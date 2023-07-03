import { Badge } from "@mui/material"
import { BsFillCartCheckFill } from "react-icons/bs"
import "./Navbar.css"

import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"

export const Navbar = () => {
  const { getTotalItems } = useContext(CartContext)
  let totalItems = getTotalItems()
  return (
    <>
      <div className="cart_div">
        <Link to="/">
          <img className="nav_logo" src="https://res.cloudinary.com/dmdbuaptb/image/upload/v1686336449/Ranma/ranma-1-y-2-1080x609_li5qlq.jpg" alt="" />
        </Link>

        <ul>
          <Link className="link_button" to="/">
            All
          </Link>
          <Link className="link_button" to="/category/manga">
            Manga
          </Link>
          <Link className="link_button" to="/category/anime">
            Anime
          </Link>
          <Link className="link_button" to="/category/ovaMovie">
            OVA & Movies
          </Link>
          <Link className="link_button" to="/category/complete">
            Complete
          </Link>
        </ul>

        <Link to="/cart">
          <div className="cart_icon">
            <Badge badgeContent={totalItems} showZero color="primary">
              <BsFillCartCheckFill className="cart_widget" color="red" size="3rem" />
            </Badge>
          </div>
        </Link>
      </div>
    </>
  )
}
