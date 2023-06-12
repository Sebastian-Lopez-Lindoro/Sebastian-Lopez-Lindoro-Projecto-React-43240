import ProductCard from "../../common/productCard/ProductCard"

const ItemList = ({ items }) => {
  console.log(items)
  return (
    <div className="div_container">
      {items.map((elemento) => {
        return <ProductCard key={elemento.id} elemento={elemento} />
      })}
    </div>
  )
}

export default ItemList
