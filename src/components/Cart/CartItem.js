import classes from "./CartItem.module.css";
import { countActions } from "../../store/shoppingCart";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const { price, totalPrice, title, amount, id } = props.item;

  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(countActions.addItem(props.item));
  };
  const removeItemHandler = () => {
    dispatch(countActions.removeItem(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{amount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
