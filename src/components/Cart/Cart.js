import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const items = useSelector((state) => state.counter.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={{
              price: item.price,
              id: item.id,
              totalPrice: item.totalPrice,
              title: item.name,
              amount: item.amount,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
