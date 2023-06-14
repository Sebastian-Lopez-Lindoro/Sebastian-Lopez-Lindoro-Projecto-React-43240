import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { products } from "../../../productsMock"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({})

  const { id } = useParams()

  useEffect(() => {
    let productFind = products.find((product) => product.id === +id)

    const getProduct = new Promise((res, rej) => {
      res(productFind)
    })

    getProduct.then((res) => setProductSelected(res)).catch((err) => console.log(err))
  }, [id])

  return <ItemDetail productSelected={productSelected} />
}

export default ItemDetailContainer
