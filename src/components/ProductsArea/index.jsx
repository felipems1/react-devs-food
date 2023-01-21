import { useContext } from "react";
import { Context } from "../../context/Context";
import * as C from "./style";

const ProductsArea = () => {
  const { state } = useContext(Context);

  return (
    <C.ProductsArea>
      <C.Title>Produtos selecionados</C.Title>
      {state.cart.products.map((item) => (
        <C.ProductArea>
          <C.Product>
            <C.ProductInfo>
              <C.ProductImage src={item.image} />
              <C.ProductName>{item.name}</C.ProductName>
            </C.ProductInfo>
            <C.ProductDetails>
              <C.ProductPrice>R$ {item.price.toFixed(2)}</C.ProductPrice>
              <C.Buttons>
                <C.Decrement>➖</C.Decrement>
                <C.Qt>{item.qt}</C.Qt>
                <C.Increment>➕</C.Increment>
              </C.Buttons>
            </C.ProductDetails>
          </C.Product>
        </C.ProductArea>
      ))}
      <C.Details>
        <C.Info>
          <C.TotalItems>Total de itens</C.TotalItems>
          <C.Value>R$ 0,00</C.Value>
        </C.Info>
        <C.Info>
          <C.Delivery>Entrega</C.Delivery>
          <C.Value>R$ 0,00</C.Value>
        </C.Info>
        <C.Info>
          <C.TotalPrice>Total</C.TotalPrice>
          <C.TotalValue>R$ 0,00</C.TotalValue>
        </C.Info>
      </C.Details>
    </C.ProductsArea>
  );
};

export default ProductsArea;
