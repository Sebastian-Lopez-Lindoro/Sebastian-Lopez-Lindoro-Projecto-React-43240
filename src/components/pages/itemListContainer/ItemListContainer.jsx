import { useEffect, useState } from "react"
//import CounterContainer from "../../common/counter/CounterContainer.jsx"
import { products } from "../../../productsMock.js"
import ItemList from "./ItemList.jsx"

export const ItemListContainer = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const tarea = new Promise((res, rej) => {
      setTimeout(() => {
        res(products)
      }, 1000)
      //rej("la promesa salio mal")
    })

    tarea
      .then((res) => {
        setItems(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return <ItemList items={items} />
}
