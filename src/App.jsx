import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./context/Context";

import * as C from "./AppStyled";

import HomeScreen from "./pages/HomeScreen";
import CartScreen from "./pages/CartScreen";

import MenuItem from "./components/MenuItem";

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <C.Container>
          <C.Menu>
            <MenuItem icon="/assets/store.png" link="/" />
            <MenuItem icon="/assets/cart.png" link="/cart" />
          </C.Menu>
          <C.PageBody>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/cart" element={<CartScreen />} />
            </Routes>
          </C.PageBody>
        </C.Container>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
