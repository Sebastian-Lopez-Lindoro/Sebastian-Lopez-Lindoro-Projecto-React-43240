import { ItemCount } from "../../common/itemCount/ItemCount"
import "./itemDetail.css"

const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <>
      <div className="div_cards_detail">
        <p className="card_title">{productSelected.title}</p>
        <img className="div_img" src={productSelected.img} alt="" />
        <p className="card_description">{productSelected.description}</p>
        <p className="card_price">{"$" + productSelected.price}</p>
        {productSelected.stock > 0 ? <ItemCount stock={productSelected.stock} initial={1} onAdd={onAdd} /> : <h3>Without stock</h3>}
      </div>
    </>
  )
}

export default ItemDetail
