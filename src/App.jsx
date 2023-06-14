import Layout from "./components/layout/Layout"
import CartContainer from "./components/pages/cart/CartContainer.jsx"
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/pages/itemListDetail/ItemDetailContainer.jsx"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/itemListDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/category/:categoryName" element={<ItemListContainer />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              <h1>404 NOT FOUND</h1> <button>Back To Main Site</button>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

//  <div>
//    <Navbar />
//    <ItemDetailContainer />
//    {/* <ItemListContainer /> */}
//  </div>
