import products from "../data/itemData";
import { useDispatch } from "react-redux";
import { addItem, removeAllItems, removeItem } from "../store/cartSlice.js";

const ItemsList = () => {
  const dispatch = useDispatch();
  return (
    <>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <span style={{ marginRight: "2rem" }}>{product.name}</span>
              <span>{product.price}</span>
              <button onClick={() => dispatch(addItem(product.id))}>Add</button>
              <button
                style={{ backgroundColor: "red" }}
                onClick={() => dispatch(removeItem(product.id))}
              >
                Remove
              </button>
            </li>
          );
        })}
        <button
          style={{
            backgroundColor: "red",
            height: "3rem",
            marginRight: "2rem",
          }}
          onClick={() => dispatch(removeAllItems())}
        >
          Remove all
        </button>
      </ul>
    </>
  );
};
export default ItemsList;
