import { ItemCount } from "./components/common/itemCount/ItemCount.jsx"
import { Navbar } from "./components/layout/navbar/Navbar.jsx"
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/pages/itemListDetail/ItemDetailContainer.jsx"

function App() {
  return (
    <div>
      <Navbar />
      <ItemDetailContainer />
      {/* <ItemListContainer /> */}
    </div>
  )
}

export default App
