// import { createStore } from "redux";
const initial_state = {
  products: [
    {
      p_name: "Apple",
      price: 20,
    },
    {
      p_name: "Guava",
      price: 9,
    },
    {
      p_name: "Orange",
      price: 12,
    },
  ],
  cart: [],
  total: 0,
  
};
const productReducer = (state = initial_state, action) => {
  console.log(action);
  if (action.type === "Purchase_Action") {
    return {
      ...state,
      cart: [...state.cart, action.payLoad],
      total: state.total + parseInt(action.payLoad.price),
    };
  }
  if (action.type == "Delete_Item") {
    return {
      ...state,
      cart: state.cart.filter((i, index) => index != action.payLoad.index),
      total: state.total - action.payLoad.price,
    };
  }

  return state;
};
// const store = createStore(reducer);

export default productReducer;
