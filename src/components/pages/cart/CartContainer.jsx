import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import { Button } from "@mui/material"
import Swal from "sweetalert2"

const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } = useContext(CartContext)

  let total = getTotalPrice()

  const emptyCart = () => {
    Swal.fire({
      title: "Do you want to clear your Cart?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "YES, clear",
      denyButtonText: `NO, cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart()
        Swal.fire("Cart Cleared", "", "success")
      } else if (result.isDenied) {
        Swal.fire("Got it!", "", "info")
      }
    })
  }

  return (
    <div>
      {cart.length > 0 && <h2>total cart is: {total}</h2>}
      {cart.length > 0 ? <button onClick={emptyCart}>Clear Cart</button> : <h1>Cart is empty</h1>}
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
            <h3>{product.quantity}</h3>
            <img src={product.img} alt="" />
            <Button onClick={() => removeById(product.id)}>Remove Item</Button>
          </div>
        )
      })}
    </div>
  )
}

export default CartContainer
