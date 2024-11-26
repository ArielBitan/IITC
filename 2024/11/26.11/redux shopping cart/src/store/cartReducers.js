import products from "../data/itemData";
const initialState = { items: [] };

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [
          ...state.items,
          products.find((item) => item.id === action.payload),
        ],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case "REMOVE_ALL_ITEMS":
      return { ...state, items: [] };

    default:
      return state;
  }
};
