import { configureStore } from '@reduxjs/toolkit';

import userReducer from './features/user/userSlice';
import CartReducer from './features/cart/cartSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: CartReducer,
  },
});

export default store;
