import { createSlice } from "@reduxjs/toolkit";

const showSlice = createSlice({
  name: "isCartShown",
  initialState: { cartShow: false, notification: null },
  reducers: {
    isShow(state) {
      state.cartShow = true;
    },

    toggleShow(state) {
      state.cartShow = !state.cartShow;
    },
    notification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const showActions = showSlice.actions;

export default showSlice.reducer;
