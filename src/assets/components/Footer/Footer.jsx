import '../Footer/footer.scss'
import { Link } from "react-router-dom"
import { RiInstagramFill } from "react-icons/ri";


const Footer = () => {
  return (
    <div className="footer-creditosContainer">
            <p>Copyright ©2025 BlockBuster. Todos los derechos reservados. Desarrollado por <span>Nicolas Trucco</span></p>
            <Link to={'https://www.instagram.com/nicolas.trucco/'}target="_blank"><RiInstagramFill/></Link>
         </div>
  )
}

export default Footer