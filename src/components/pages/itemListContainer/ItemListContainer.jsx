import { Counter } from "../../common/counter/Counter.jsx"
export const ItemListContainer = ( {greeting} )=>{
   
   return (
      <>
         <h1>{greeting}</h1>
         
         <Counter />
      </>
   )
}