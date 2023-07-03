import { useContext, useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { products } from "../../../productsMock"
import { useParams } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"
import Swal from "sweetalert2"

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({})

  const { addToCart } = useContext(CartContext)

  const { id } = useParams()

  const onAdd = (quantity) => {
    let data = {
      ...productSelected,
      quantity: quantity,
    }
    addToCart(data)
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Product added to Cart",
      showConfirmButton: false,
      timer: 1500,
    })
  }

  useEffect(() => {
    let productFind = products.find((product) => product.id === +id)

    const getProduct = new Promise((res) => {
      res(productFind)
    })

    getProduct.then((res) => setProductSelected(res)).catch((err) => console.log(err))
  }, [id])

  return <div>{productSelected.price ? <ItemDetail productSelected={productSelected} addToCart={addToCart} onAdd={onAdd} /> : <h1>cargando</h1>}</div>
}

export default ItemDetailContainer
