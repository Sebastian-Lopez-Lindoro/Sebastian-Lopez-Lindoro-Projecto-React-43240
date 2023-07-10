import { useCount } from "../../hooks/useCount"
import "./ItemCount.css"

export const ItemCount = ({ stock, initial, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock)
  return (
    <>
      <div className="count--container">
        <button className="button_count" onClick={decrement}>
          -
        </button>
        <span>{count}</span>
        <button className="button_count" onClick={increment}>
          +
        </button>
        <button className="button_add" onClick={() => onAdd(count)}>
          add to cart
        </button>
      </div>
    </>
  )
}
