import classes from "./CartButton.module.css";

import { showActions } from "../../store/isCartShown";
// import { countActions } from "../../store/shoppingCart";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.counter.totalAmount);

  const showCartHandler = () => {
    dispatch(showActions.toggleShow());
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}> {totalAmount} </span>
    </button>
  );
};

export default CartButton;
