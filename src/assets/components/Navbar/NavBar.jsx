/** @format */
import "../Navbar/navBar.scss";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../../img/LogoBlockBuster.png";
import { FaBars, FaTimes  } from "react-icons/fa";
import { useState } from "react";
const NavBar = () => {

   const [isOpen, setIsOpen] = useState(false)

   const toggleMenu = () => {
      setIsOpen(!isOpen)
   }

   return (
      <>
      <header className="navBar-Header">
         <div className="navBar-Container">
            <nav>
               <div className="navBar-Logo">
                  <Link to={'/'}><img src={Logo} alt="" /></Link>
               </div>

               <ul className={isOpen ? "navBar-Links active" : "navBar-Links"}>
                  <li>
                     <NavLink to={'/'} className={({ isActive }) => isActive ? "navBar-active" : ""} onClick={toggleMenu}>Inicio</NavLink>
                  </li>
                  <li>
                     <NavLink to={'/Peliculas'} className={({ isActive }) => isActive ? "navBar-active" : ""} onClick={toggleMenu}>Peliculas</NavLink>
                  </li>
                  <li>
                  <NavLink to={'/Nosotros'} className={({ isActive }) => isActive ? "navBar-active" : ""} onClick={toggleMenu}>Nosotros</NavLink>
                  </li>
                  <li>
                  <NavLink to={'/Contacto'} className={({ isActive }) => isActive ? "navBar-active" : ""} onClick={toggleMenu}>Contacto</NavLink>
                  </li>
               </ul>
               <div className="navBar-Icon" onClick={toggleMenu}>
                  {isOpen ? <FaBars /> : <FaTimes />}
                  
               </div>
            </nav>
         </div>
      </header>
      </>
   );
};

export default NavBar;
