export const addItem = (id) => ({ type: "ADD_ITEM", payload: id });
export const removeItem = (id) => ({ type: "REMOVE_ITEM", payload: id });
export const removeAllItems = () => ({ type: "REMOVE_ALL_ITEMS" });
