import * as C from "./style";

const ProductItem = ({ data, onClick }) => {
  const handleClick = () => {
    onClick(data);
  };

  return (
    <C.Container onClick={handleClick}>
      <C.ProductPhotoArea>
        <C.ProductPhoto src={data.image} />
      </C.ProductPhotoArea>
      <C.ProductInfoArea>
        <C.ProductName>{data.name}</C.ProductName>
        <C.ProductPrice>R$ {data.price}</C.ProductPrice>
        <C.ProductIngredients>{data.ingredients}</C.ProductIngredients>
      </C.ProductInfoArea>
      <C.ProductButtonArea>
        <C.ProductButton src="/assets/next.png" />
      </C.ProductButtonArea>
    </C.Container>
  );
};

export default ProductItem;
