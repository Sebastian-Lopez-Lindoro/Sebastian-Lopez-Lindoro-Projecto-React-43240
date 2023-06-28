import { useContext, useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { products } from "../../../productsMock"
import { useParams } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({})

  const { addToCart } = useContext(CartContext)

  const { id } = useParams()

  useEffect(() => {
    let productFind = products.find((product) => product.id === +id)

    const getProduct = new Promise((res, rej) => {
      res(productFind)
    })

    getProduct.then((res) => setProductSelected(res)).catch((err) => console.log(err))
  }, [id])

  return <ItemDetail productSelected={productSelected} addToCart={addToCart} />
}

export default ItemDetailContainer
