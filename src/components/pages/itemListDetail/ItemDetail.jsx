import { ItemCount } from "../../common/itemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({ productSelected }) => {
  const onAdd = (quantity) => {
    let data = {
      ...productSelected,
      quantity: quantity,
    }
    console.log(data)
  }

  return (
    <>
      <div className="div_cards_detail">
        <p className="card_title">{productSelected.title}</p>
        <img className="div_img" src={productSelected.img} alt="" />
        <p className="card_description">{productSelected.description}</p>
      </div>
      <ItemCount stock={productSelected.stock} initial={1} onAdd={onAdd} />
    </>
  )
}

export default ItemDetail