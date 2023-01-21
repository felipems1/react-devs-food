import ProductsArea from "../../components/ProductsArea";
import DeliveryArea from "../../components/DeliveryArea";

import * as C from "./style";

const CartScreen = () => {
  return (
    <C.Container>
      <ProductsArea />
      <DeliveryArea />
    </C.Container>
  );
};

export default CartScreen;
