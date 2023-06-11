const ProductCard = ({ elemento }) => {
  return (
    <div>
      <h3>{elemento.title}</h3>
      <img src={elemento.img} alt="" />
      <h4>{elemento.price}</h4>
    </div>
  )
}

export default ProductCard
