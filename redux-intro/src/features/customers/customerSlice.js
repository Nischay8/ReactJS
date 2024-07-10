/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  intialState,
  reducers: {
    creatCustomer: {
      prepare: function (fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },

      reducer(state, action) {
        // eslint-disable-next-line no-undef
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },

    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});
// export default function customerReducer(state = intialState, action) {
//   switch (action.type) {
//     case "customer/creatCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };

//     case "customer/updateName":
//       return { ...state, fullName: action.payload.fullName };

//     default:
//       return { ...state };
//   }
// }

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
