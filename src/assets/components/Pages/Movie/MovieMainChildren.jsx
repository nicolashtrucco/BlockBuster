/** @format */

import "../Movie/movieMain.scss";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading";
import ButtonPage from "../../ButtonPage/ButtonPage";
import { useContext } from "react";
import { MovieContext } from "../../../context/ContextMovie";
import { CiSearch } from "react-icons/ci";

const MovieMainChildren = ({ filter, handleSearchTerm, filterMovie }) => {
   const { data } = useContext(MovieContext);
   return (
      <div className="movieMain-global">
         <div className="movieMain-Search">
            <button onClick={handleSearchTerm}>
               <CiSearch />
            </button>
            <input
               type="text"
               value={filter}
               placeholder="Nombre de la pelicula"
               onChange={filterMovie}
            />
         </div>
         <div className="movieMain-container">
            <div className="movieMain-ListContainer">
               {data.results && data.results.length > 0 ? (
                  data.results.slice(0, 12).map((movie) => (
                     <div key={movie.id} className="movieMain-List">
                        <img
                           src={`https://image.tmdb.org/t/p/w400${movie.backdrop_path}`}
                           alt={movie.title}
                        />
                        <h2>{movie.title}</h2>
                        <p className="movieMain-p">{movie.overview}</p>
                        <Link to={""}>Ver Más</Link>
                     </div>
                  ))
               ) : data.results === undefined ? (
                  <Loading />
               ) : (
                  <p>No se encontraron resultados para tu búsqueda.</p>
               )}
            </div>
            <ButtonPage />
         </div>
      </div>
   );
};

export default MovieMainChildren;
