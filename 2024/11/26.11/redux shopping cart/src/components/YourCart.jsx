import { useSelector } from "react-redux";

const YourCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  if (!cartItems || cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <>
      <div>Your cart:</div>
      <ul>
        {cartItems.map((item) => {
          return (
            <li key={item.id}>
              <span style={{ marginRight: "2rem" }}>{item.name}</span>
              <span>{item.price}</span>
            </li>
          );
        })}
      </ul>
      <div>
        Total:{" "}
        {cartItems
          .reduce((accumulator, product) => {
            return accumulator + (product.price || 0);
          }, 0)
          .toFixed(2)}
      </div>
    </>
  );
};

export default YourCart;
