import { showActions } from "./isCartShown"
import { countActions } from "./shoppingCart"

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("c")

      if (!response.ok) {
        throw new Error("Fetch cart data failed")
      }
      const data = await response.json()

      return data
    }

    try {
      const cartData = await fetchData()
      dispatch(
        countActions.replaceItem({
          totalAmount: cartData.totalAmount,
          items: cartData.items || [],
        })
      )
    } catch (error) {
      dispatch(
        showActions.notification({
          status: "error",
          title: "error",
          message: "Fetch cart data failed",
        })
      )
    }
  }
}
export const sendCartData = (counter) => {
  return async (dispatch) => {
    dispatch(
      showActions.notification({
        status: "pending",
        title: "sending...",
        message: "it's sending...",
      })
    )

    const sendData = async () => {
      const response = await fetch(
        "https://task-888-default-rtdb.firebaseio.com/.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: counter.items,
            totalAmount: counter.totalAmount,
          }),
        }
      )
      if (!response.ok) {
        throw new Error("Send cart data failed")
      }
    }

    try {
      await sendData()

      dispatch(
        showActions.notification({
          status: "success",
          title: "success",
          message: "Send successfully",
        })
      )
    } catch (error) {
      dispatch(
        showActions.notification({
          status: "error",
          title: "error",
          message: "Send cart data failed",
        })
      )
    }
  }
}
