import { BsFillCartCheckFill } from "react-icons/bs"
import './Navbar.css'


export const Navbar = () => {
  return (
   <div className="cart_div">
      <h4>Imagen</h4>
      <ul>
         <li>Todas</li>
         <li>Urbanas</li>
         <li>Deportivas</li>
      </ul>
      <div className="cart_icon">
         <BsFillCartCheckFill className="cart_widget" color="red" size="3rem"/>  
         <span className="cart_div_number">2</span>
      </div> 
   </div>
  )
}
