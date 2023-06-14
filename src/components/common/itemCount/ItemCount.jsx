import { useCount } from "../../hooks/useCount"
import "./ItemCount.css"

export const ItemCount = ({ stock, initial, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock)
  return (
    <>
      <div className="count--container">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        <button onClick={() => onAdd(count)}>add to cart</button>
      </div>
    </>
  )
}
