export const cartInitialState = {
  products: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "addProduct":
      let products = [...state.products];
      let id = action.payload.data.id;
      let index = products.findIndex((item) => item.id === id);

      if (index >= 0) {
        products[index].qt += action.payload.qt;
      } else {
        products.push({
          ...action.payload.data,
          qt: action.payload.qt,
        });
      }

      return { ...state, products };
      break;
  }

  return state;
};
