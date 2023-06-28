import CartContainer from "../components/pages/cart/CartContainer"
import { ItemListContainer } from "../components/pages/itemListContainer/ItemListContainer"
import ItemDetailContainer from "../components/pages/itemListDetail/ItemDetailContainer"

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "categories",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "itemDetail",
    path: "/itemListDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
]
