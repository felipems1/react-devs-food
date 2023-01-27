import { useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../context/Context";

import * as C from "./style";

const ModalProduct = ({ data, setStatus, status }) => {
  const [qt, setQt] = useState(1);

  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    setQt(1);
  }, [status]);

  const handleAddToCart = () => {
    dispatch({ type: "ADD_PRODUCT", payload: { data, qt } });
    setStatus(false);
  };

  const handleCancelButton = () => {
    setStatus(false);
  };

  const handleMinusQt = () => {
    if (qt > 1) {
      setQt(qt - 1);
    }
  };

  const handlePlusQt = () => {
    setQt(qt + 1);
  };

  return (
    <C.Container>
      <C.ProductArea>
        <C.ProductPhoto src={data.image} />
        <C.ProductInfoArea>
          <C.ProductDetails>
            <C.ProductName>{data.name}</C.ProductName>
            <C.ProductIngredients>{data.ingredients}</C.ProductIngredients>
          </C.ProductDetails>
          <C.ProductQuantityArea>
            <C.ProductQuantity>
              <C.ProductQtImage
                src="/assets/minus.png"
                onClick={handleMinusQt}
              />
              <C.ProductQtText>{qt}</C.ProductQtText>
              <C.ProductQtImage src="/assets/plus.png" onClick={handlePlusQt} />
            </C.ProductQuantity>
            <C.ProductPrice>R$ {(data.price * qt).toFixed(2)}</C.ProductPrice>
          </C.ProductQuantityArea>
        </C.ProductInfoArea>
      </C.ProductArea>
      <C.ProductButtons>
        <C.ProductButton small={true} onClick={handleCancelButton}>
          Cancelar
        </C.ProductButton>
        <C.ProductButton onClick={handleAddToCart}>
          Adicionar ao Carrinho
        </C.ProductButton>
      </C.ProductButtons>
    </C.Container>
  );
};

export default ModalProduct;
