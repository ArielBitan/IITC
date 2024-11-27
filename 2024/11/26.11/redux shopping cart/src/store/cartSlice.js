import products from "../data/itemData";
import { createSlice } from "@reduxjs/toolkit";

const cartSlicer = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem(state, action) {
      const item = products.find((item) => item.id === action.payload);
      state.items.push(item);
    },
    removeItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state.items.splice(itemIndex, 1);
    },
    removeAllItems(state, action) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, removeAllItems } = cartSlicer.actions;
export default cartSlicer.reducer;
