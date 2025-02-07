/** @format */

import "../Movie/movieMain.scss";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading";
import ButtonPage from "../../ButtonPage/ButtonPage";
import { useContext } from "react";
import { MovieContext } from "../../../context/ContextMovie";

const MovieMain = () => {
   const { data } = useContext(MovieContext);
   return (
      <>
         <div className="movieMain-global">
            <div className="movieMain-container">
               <div>
               </div>
               <div className="movieMain-ListContainer">
                  {data.results ? (
                     data.results.slice(0, 12).map((movie) => (
                        <div key={movie.id} className="movieMain-List">
                           <img
                              src={`https://image.tmdb.org/t/p/w400${movie.backdrop_path}`}
                              alt={movie.title}
                           />
                           <h2>{movie.title}</h2>
                           <p className="movieMain-p">{movie.overview}</p>
                           <Link to={""}>Ver Mas</Link>
                        </div>
                     ))
                  ) : (
                     <Loading />
                  )}
               </div>
                  <ButtonPage/>
            </div>
         </div>
      </>
   );
};

export default MovieMain;
