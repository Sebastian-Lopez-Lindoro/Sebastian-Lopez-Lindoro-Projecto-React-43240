import { Badge } from "@mui/material"
import { BsFillCartCheckFill } from "react-icons/bs"
import "./Navbar.css"

export const Navbar = () => {
  return (
    <div className="cart_div">
      <img className="nav_logo" src="https://res.cloudinary.com/dmdbuaptb/image/upload/v1686336449/Ranma/ranma-1-y-2-1080x609_li5qlq.jpg" alt="" />
      <ul>
        <li>All</li>
        <li>Manga</li>
        <li>Anime</li>
        <li>OVA & Movies</li>
        <li>Complete</li>
      </ul>
      <div className="cart_icon">
        <Badge badgeContent={4} color="primary">
          <BsFillCartCheckFill className="cart_widget" color="red" size="3rem" />
        </Badge>
      </div>
    </div>
  )
}
