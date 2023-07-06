import Checkout from "./Checkout"
import { useFormik } from "formik"
import * as Yup from "yup"
import { db } from "../../../firebaseConfig"
import { collection, addDoc, updateDoc, doc } from "firebase/firestore"
import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext"

const CheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext)
  const [orderId, setOrderId] = useState(null)

  let total = getTotalPrice()

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total: total,
      }

      let ordersCollection = collection(db, "orders")
      addDoc(ordersCollection, order).then((res) => setOrderId(res.id))

      cart.forEach((product) => {
        updateDoc(doc(db, "products", product.id), { stock: product.stock - product.quantity })
      })

      clearCart()
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string().required("info is required").min(3, "must contain 3 letters min"),
      email: Yup.string().email("must be in email format").required("info is required"),
      phone: Yup.string().required("info is required").min(10, "must contain 10 numbers min"),
    }),
  })

  return <div>{orderId ? <h1>Your purchase was succeful, you order number is: {orderId}</h1> : <Checkout handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} />}</div>
}

export default CheckoutContainer
