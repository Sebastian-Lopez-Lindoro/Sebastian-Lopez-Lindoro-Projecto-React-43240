import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import { Button } from "@mui/material"

const CartContainer = () => {
  const { cart, clearCart, removeById } = useContext(CartContext)
  console.log(cart)

  return (
    <div>
      <button onClick={clearCart}>Clear Cart</button>
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
