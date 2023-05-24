import { Navbar } from "./components/layout/navbar/Navbar.jsx"
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer.jsx"

function App() {

   let greeting = "Welcome to the shop"
   
  return (
   <div>
      <Navbar />
      <ItemListContainer greeting={greeting} />
   </div>
  )
}

export default App
