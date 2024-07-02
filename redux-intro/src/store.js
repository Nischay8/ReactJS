import { type } from "@testing-library/user-event/dist/type";
import { combineReducers, createStore } from "redux";

import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

// store.dispatch({ type: "account/deposit", payload: 500 });

// console.log("Hey Redux");

// console.log(store.getState());

// store.dispatch({ type: "account/withdraw", payload: 200 });

// console.log(store.getState());

// store.dispatch({ type: "account/deposit", payload: 500 });

// store.dispatch({ type: "account/withdraw", payload: 200 });

// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 1000, purpose: "Buy a Car" },
// });

// console.log(store);

// store.dispatch({ type: "account/payLoan" });

// console.log(store.getState());

// store.dispatch(deposit(500));

// console.log(store.getState());

// store.dispatch(creatCustomer("Nischay", "125689"));

// console.log(store.getState());

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
