import { type } from "@testing-library/user-event/dist/type";
import { combineReducers, createStore } from "redux";

const intialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const intialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

function accountReducer(state = intialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };

    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };

    //   Lateer
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.loanPurpose,
        balance: state.balance + action.payload.amount,
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

function customerReducer(state = intialStateCustomer, action) {
  switch (action.type) {
    case "customer/creatCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };

    case "customer/updateName":
      return { ...state, fullName: action.payload.fullName };

    default:
      return { ...state };
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

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

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount) {
  return {
    type: "account/requestLoan",
    payload: { amount: amount, purpose: "Buy a Car" },
  };
}

function payLoan(amount) {
  return { type: "account/payLoan" };
}
// store.dispatch(deposit(500));

// console.log(store.getState());

function creatCustomer(fullName, nationalID) {
  return {
    type: "customer/creatCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
}

store.dispatch(creatCustomer("Nischay", "125689"));

console.log(store.getState());
