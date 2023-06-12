import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { products } from "../../../productsMock"

const ItemDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({})

  let id = 4

  useEffect(() => {
    let productFind = products.find((product) => product.id === id)

    const getProduct = new Promise((res, rej) => {
      res(productFind)
    })

    getProduct.then((res) => setProductSelected(res)).catch((err) => console.log(err))
  }, [id])

  console.log(productSelected)

  return <ItemDetail productSelected={productSelected} />
}

export default ItemDetailContainer
