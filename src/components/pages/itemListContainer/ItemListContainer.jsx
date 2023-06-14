import { useEffect, useState } from "react"
import { products } from "../../../productsMock.js"
import ItemList from "./ItemList.jsx"
import "./itemList.css"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const { categoryName } = useParams()

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

  return <ItemList items={items} />
}
