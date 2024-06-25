// import { createStore } from "redux";
const initial_state = {
  users: ["Admin", "End-User", "Manager"],
  loginDetails: "None",
};
const loginReducer = (state = initial_state, action) => {
  console.log(action);

  if (action.type == "LOGIN") {
    return {
      ...state,
      loginDetails: action.loginDetails,
    };
  }
  return state;
};
// const store = createStore(reducer);

export default loginReducer;
