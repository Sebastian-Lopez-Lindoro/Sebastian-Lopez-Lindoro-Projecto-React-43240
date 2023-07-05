import { useEffect, useState } from "react"

import ItemList from "./ItemList.jsx"
import "./itemList.css"
import { useParams } from "react-router-dom"
import { PulseLoader } from "react-spinners"
import { db } from "../../../firebaseConfig.js"
import { collection, getDocs, query, where } from "firebase/firestore"

const override = {
  display: "flex",
  justifyContent: "center",
  marginTop: "10rem",
}

export const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const { categoryName } = useParams()

  useEffect(() => {
    let itemsCollection = collection(db, "products")

    let consult

    if (!categoryName) {
      consult = itemsCollection
    } else {
      consult = query(itemsCollection, where("category", "==", categoryName))
    }

    getDocs(consult)
      .then((res) => {
        let products = res.docs.map((element) => {
          return {
            ...element.data(),
            id: element.id,
          }
        })
        setItems(products)
      })
      .catch((err) => console.log(err))
  }, [categoryName])

  return <div>{items.length > 0 ? <ItemList items={items} /> : <PulseLoader cssOverride={override} size="30px" color="#d63636" />}</div>
}

export default ItemListContainer
