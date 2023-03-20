import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./shoppingCart";

import showReducer from "./isCartShown";

const store = configureStore({
  reducer: { counter: countReducer, isCartShown: showReducer },
});

export default store;
