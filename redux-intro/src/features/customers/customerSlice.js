const intialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

export function creatCustomer(fullName, nationalID) {
  return {
    type: "customer/creatCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
}

export default function customerReducer(state = intialStateCustomer, action) {
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
