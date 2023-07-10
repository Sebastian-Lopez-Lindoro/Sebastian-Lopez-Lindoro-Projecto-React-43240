import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"
import "./CartContainer.css"

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
      if (result.isConfirmed) {
        clearCart()
        Swal.fire("Cart Cleared", "", "success")
      } else if (result.isDenied) {
        Swal.fire("Got it!", "", "info")
      }
    })
  }

  return (
    <>
      <div className="div_cart_tags">
        {cart.length > 0 && <h2 className="total_display">Total cart is : $ {total}</h2>}
        {cart.length > 0 ? (
          <button className="cart_buttons" onClick={emptyCart}>
            Clear Cart
          </button>
        ) : (
          <h1>Cart is empty... BUY ALL THE THINGS!</h1>
        )}
        <Link to="/checkout">{cart.length > 0 && <button className="cart_buttons">Checkout</button>}</Link>
      </div>
      <div className="div_cart_detail">
        <div className="div_cart_buttons">
          {cart.map((product) => {
            return (
              <>
                <div className="div_cart_unit">
                  <div className="div_cart_card" key={product.id}>
                    <h2>{product.title}</h2>
                    <h3>${product.price}</h3>
                    <h3>Unit/s {product.quantity}</h3>
                    <img className="cart_img" src={product.img} alt="" />
                    <button className="cart_remove" onClick={() => removeById(product.id)}>
                      Remove Item
                    </button>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default CartContainer
