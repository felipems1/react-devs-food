import { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";
import * as C from "./style";

const ProductsArea = () => {
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  const { state, dispatch } = useContext(Context);

  const handleProductChange = (key, type) => {
    dispatch({ type: "CHANGE_PRODUCT", payload: { key, type } });
  };

  useEffect(() => {
    updateCart();
  }, [state]);

  const updateCart = () => {
    let subtotal = 0;
    let entrega = 3.5;
    let total = 0;

    for (let i in state.cart.products) {
      let productItem = state.cart.products.find(
        (item) => item.id == state.cart.products[i].id
      );
      subtotal += productItem.price * state.cart.products[i].qt;
      total = subtotal + entrega;
    }

    setSubtotal(subtotal);
    setTotal(total);
  };

  return (
    <C.ProductsArea>
      <C.Title>Produtos selecionados</C.Title>
      {state.cart.products.map((item, index) => (
        <C.ProductArea key={index}>
          <C.Product>
            <C.ProductInfo>
              <C.ProductImage src={item.image} />
              <C.ProductName>{item.name}</C.ProductName>
            </C.ProductInfo>
            <C.ProductDetails>
              <C.ProductPrice>R$ {item.price.toFixed(2)}</C.ProductPrice>
              <C.Buttons>
                <C.Decrement onClick={() => handleProductChange(index, "-")}>
                  ➖
                </C.Decrement>
                <C.Qt>{item.qt}</C.Qt>
                <C.Increment onClick={() => handleProductChange(index, "+")}>
                  ➕
                </C.Increment>
              </C.Buttons>
            </C.ProductDetails>
          </C.Product>
        </C.ProductArea>
      ))}
      <C.Details>
        <C.Info>
          <C.TotalItems>Total de itens</C.TotalItems>
          <C.Value>R$ {subtotal.toFixed(2)}</C.Value>
        </C.Info>
        <C.Info>
          <C.Delivery>Entrega</C.Delivery>
          <C.Value>R$ 3,50</C.Value>
        </C.Info>
        <C.Info>
          <C.TotalPrice>Total</C.TotalPrice>
          <C.TotalValue>R$ {total.toFixed(2)}</C.TotalValue>
        </C.Info>
      </C.Details>
      {subtotal !== 0 ? (
        <C.ButtonArea>
          <C.Button>Finalizar pedido</C.Button>
        </C.ButtonArea>
      ) : (
        <></>
      )}
    </C.ProductsArea>
  );
};

export default ProductsArea;
