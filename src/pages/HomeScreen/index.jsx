import { useState, useEffect } from "react";

import * as C from "./style";

import api from "../../api";

import Header from "../../components/Header";
import CategoryItem from "../../components/CategoryItem";
import ProductItem from "../../components/ProductItem";
import Modal from "../../components/Modal";
import ModalProduct from "../../components/ModalProduct";

let searchTimer = null;

const HomeScreen = () => {
  const [headerSearch, setHeaderSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const [modalStatus, setModalStatus] = useState(false);
  const [modalData, setModalData] = useState({});

  const [activeCategory, setActiveCategory] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [activeSearch, setActiveSearch] = useState("");

  const getProducts = async () => {
    const prods = await api.getProducts(
      activeCategory,
      activePage,
      activeSearch
    );
    if (prods.error === "") {
      setProducts(prods.result.data);
      setTotalPages(prods.result.pages);
      setActivePage(prods.result.page);
    }
  };

  useEffect(() => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      setActiveSearch(headerSearch);
    }, 2000);
  }, [headerSearch]);

  useEffect(() => {
    const getCategories = async () => {
      const cat = await api.getCategories();
      if (cat.error === "") {
        setCategories(cat.result);
      }
    };

    getCategories();
  }, []);

  useEffect(() => {
    setProducts([]);
    getProducts();
  }, [activeCategory, activePage, activeSearch]);

  const handleProductClick = (data) => {
    setModalData(data);
    setModalStatus(true);
  };

  return (
    <C.Container>
      <Header search={headerSearch} onSearch={setHeaderSearch} />
      {categories.length > 0 && (
        <C.CategoryArea>
          Selecione uma categoria
          <C.CategoryList>
            <CategoryItem
              data={{
                id: 0,
                title: "Todas as categorias",
                image: "/assets/food-and-restaurant.png",
              }}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            {categories.map((item, index) => (
              <CategoryItem
                key={index}
                data={item}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            ))}
          </C.CategoryList>
        </C.CategoryArea>
      )}
      {products.length > 0 && (
        <C.ProductArea>
          <C.ProductList>
            {products.map((item, index) => (
              <ProductItem
                key={index}
                data={item}
                onClick={handleProductClick}
              />
            ))}
          </C.ProductList>
        </C.ProductArea>
      )}
      {totalPages > 0 && (
        <C.ProductPaginationArea>
          {Array(totalPages)
            .fill(0)
            .map((item, index) => (
              <C.ProductPaginationItem
                key={index}
                active={activePage}
                current={index + 1}
                onClick={() => setActivePage(index + 1)}
              >
                {index + 1}
              </C.ProductPaginationItem>
            ))}
        </C.ProductPaginationArea>
      )}
      <Modal status={modalStatus} setStatus={setModalStatus}>
        <ModalProduct
          data={modalData}
          setStatus={setModalStatus}
          status={modalStatus}
        />
      </Modal>
    </C.Container>
  );
};

export default HomeScreen;
