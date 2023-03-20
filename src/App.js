import Cart from "./components/Cart/Cart"
import Layout from "./components/Layout/Layout"
import Products from "./components/Shop/Products"
import { useDispatch, useSelector } from "react-redux"
import { Fragment, useEffect } from "react"
import Notification from "./components/UI/Notification"
import { sendCartData, fetchCartData } from "./store/cart-action"
import { counter } from "./store/index"
// import { countActions } from "./store/shoppingCart";
let initialState = true

function App() {
  const show = useSelector((state) => state.isCartShown.cartShow)
  const counter = useSelector((state) => state.counter)
  const notification = useSelector((state) => state.isCartShown.notification)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCartData())
  }, [])

  useEffect(() => {
    if (initialState) {
      initialState = false
      return
    }
    if (counter.change) {
      dispatch(sendCartData(counter))
    }
  }, [counter])

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {show && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  )
}

export default App
