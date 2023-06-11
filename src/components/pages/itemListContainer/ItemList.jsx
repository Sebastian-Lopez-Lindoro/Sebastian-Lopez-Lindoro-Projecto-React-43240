import ProductCard from "../../common/productCard/ProductCard"

const ItemList = ({ items }) => {
  console.log(items)
  return (
    <div>
      {items.map((elemento) => {
        return <ProductCard key={elemento.id} elemento={elemento} />
      })}
    </div>
  )
}

export default ItemList
