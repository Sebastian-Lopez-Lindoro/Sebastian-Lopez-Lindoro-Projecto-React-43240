import { createContext, useState } from "react"
import Swal from "sweetalert2"

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (newProduct) => {
    let exist = isInCart(newProduct.id)
    if (exist) {
      let newArray = cart.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + newProduct.quantity,
          }
        } else {
          return product
        }
      })
      setCart(newArray)
    } else {
      setCart([...cart, newProduct])
    }
  }

  const isInCart = (id) => {
    let exist = cart.some((prod) => prod.id === id)
    return exist
  }

  const clearCart = () => {
    setCart([])
  }

  const removeById = (id) => {
    let newArray = cart.filter((product) => product.id !== id)
    setCart(newArray)
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Product removed from Cart",
      showConfirmButton: false,
      timer: 1500,
    })
  }

  const getTotalQuantityById = (id) => {
    let product = cart.find((prod) => prod.id === id)
    return product?.quantity
  }

  const getTotalItems = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.quantity
    }, 0)
    return total
  }

  const getTotalPrice = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.quantity * element.price
    }, 0)
    return total
  }

  let data = {
    cart,
    addToCart,
    clearCart,
    removeById,
    getTotalQuantityById,
    getTotalItems,
    getTotalPrice,
  }
  return <CartContext.Provider value={data}> {children} </CartContext.Provider>
}

export default CartContextProvider
