const appReducer = (
  state = { products: [], customers: [], purchases: [] },
  action
) => {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return {
        ...state,
        products: action.payload.products,
      };

    case "UPDATE_PRODUCT":
      let productsState = state.products;
      let Index = productsState.findIndex((x) => x.id === action.payload.id);
      if (Index >= 0) {
        productsState[Index] = action.payload;
      }
      return { ...state, products: productsState };

    case "DELETE_PRODUCT":
      let productsArray = state.products.filter((x) => x.id !== action.payload);
      return { ...state, products: productsArray };

    case "LOAD_CUSTOMERS":
      return {
        ...state,
        customers: action.payload.customers,
      };

    case "UPDATE_CUSTOMER":
      let customersState = state.customers;
      let i = customersState.findIndex((x) => x.id === action.payload.id);
      if (i >= 0) {
        customersState[i] = action.payload;
      }
      return { ...state, customers: customersState };

    case "DELETE_CUSTOMER":
      let customersArray = state.customers.filter(
        (x) => x.id !== action.payload
      );
      return { ...state, customers: customersArray };

    case "LOAD_PURCHASE":
      return {
        ...state,
        purchases: action.payload.purchases,
      };

    case "ADD_PURCHASE":
      return { ...state, purchases: [...state.purchases, action.payload] };

    default:
      return state;
  }
};

export default appReducer;
