import "./ProductCard.css"

const ProductCard = ({ elemento }) => {
  return (
    <div className="div_cards">
      <h3>{elemento.title}</h3>
      <img className="div_img" src={elemento.img} alt="" />
      <h4>{"$" + elemento.price}</h4>
      <button>Wiew details</button>
    </div>
  )
}

export default ProductCard
