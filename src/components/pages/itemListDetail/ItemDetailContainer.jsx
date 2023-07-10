import { useContext, useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"

import { useParams } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"
import Swal from "sweetalert2"
import { db } from "../../../firebaseConfig"
import { collection, getDoc, doc } from "firebase/firestore"
import { PulseLoader } from "react-spinners"

const override = {
  display: "flex",
  justifyContent: "center",
  marginTop: "10rem",
}

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
    let itemsCollection = collection(db, "products")
    let refDoc = doc(itemsCollection, id)
    getDoc(refDoc).then((res) => {
      setProductSelected({ id: res.id, ...res.data() })
    })
  }, [id])

  return <div>{productSelected.price ? <ItemDetail productSelected={productSelected} addToCart={addToCart} onAdd={onAdd} /> : <PulseLoader cssOverride={override} size="30px" color="#d63636" />}</div>
}

export default ItemDetailContainer
