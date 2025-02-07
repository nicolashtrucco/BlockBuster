import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useContext } from "react";
import { MovieContext } from "../../context/ContextMovie";
import '../ButtonPage/buttonPage.scss'


const ButtonPage = () => {
    const { setPage, page } = useContext(MovieContext);

    const handleButtonNextPage = () => {
        setPage(page + 1)
    }
    const handleButtonPrevPage = () => {
        if(page <= 1){
            setPage(1)
        } else {
            setPage(page + 1)
        }
    }
  return (
    <div>
        <button  className="btnPage" onClick={handleButtonPrevPage}><FaAngleDoubleLeft /></button>
        <button  className="btnPage" onClick={handleButtonNextPage}><FaAngleDoubleRight /></button>
    </div>
  )
}

export default ButtonPage