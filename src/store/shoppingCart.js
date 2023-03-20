import { createSlice } from "@reduxjs/toolkit"

const initialCountState = {
  totalAmount: 0,
  items: [],
  change: false,
}
const countSlice = createSlice({
  name: "counter",
  initialState: initialCountState,

  reducers: {
    replaceItem(state, action) {
      state.totalAmount = action.payload.totalAmount
      state.items = action.payload.items
      state.change = false
    },

    addItem(state, action) {
      state.change = true
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)
      state.totalAmount++

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          totalPrice: newItem.price,
          name: newItem.title,
          amount: 1,
        })
      } else {
        existingItem.totalPrice = existingItem.totalPrice + newItem.price
        existingItem.amount++
      }
    },
    removeItem(state, action) {
      const id = action.payload
      const existingItem = state.items.find((item) => item.id === id)
      state.totalAmount--

      if (existingItem.amount === 1) {
        state.items = state.items.filter((item) => item.id !== id)
      } else {
        existingItem.amount--
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price
      }
    },
  },
})
export const countActions = countSlice.actions
export default countSlice.reducer
