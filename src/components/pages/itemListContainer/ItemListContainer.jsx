import { useEffect, useState } from "react"
import { products } from "../../../productsMock.js"
import ItemList from "./ItemList.jsx"
import "./itemList.css"
import { useParams } from "react-router-dom"
import { PulseLoader } from "react-spinners"

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue",
  marginLeft: "5rem",
}

export const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const { categoryName } = useParams()
  console.log(items.length)

  let productsFiltered = products.filter((e) => e.category === categoryName)

  useEffect(() => {
    const tarea = new Promise((res) => {
      res(categoryName ? productsFiltered : products)
    })

    tarea
      .then((res) => {
        setItems(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [categoryName])

  return <div>{items.length > 0 ? <ItemList items={items} /> : <PulseLoader cssOverride={override} size="30px" color="#d63636" />}</div>
}

export default ItemListContainer
