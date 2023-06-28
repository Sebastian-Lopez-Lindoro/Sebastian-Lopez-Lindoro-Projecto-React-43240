import Layout from "./components/layout/Layout"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { menuRoutes } from "./routes/menuRoutes"
import CartContextProvider from "./context/CartContext"

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            {menuRoutes.map(({ id, path, Element }) => (
              <Route key={id} path={path} element={<Element />} />
            ))}
          </Route>
          <Route
            path="*"
            element={
              <div>
                <h1>404 NOT FOUND</h1>
                <button>Back To Main Site</button>
              </div>
            }
          />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App

//  <div>
//    <Navbar />
//    <ItemDetailContainer />
//    {/* <ItemListContainer /> */}
//  </div>
