/** @format */

import { useContext } from "react";
import { MovieContext } from "../../../context/ContextMovie";
import "../Inicio/inicioMain.scss";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading";

const InicioMain = () => {
   const { data } = useContext(MovieContext);

   // setPage(3)
   return (
      <>
         <div className="inicioMain-global">
            <div className="inicioMain-container">
               <div>
                  <h1>Lo más reciente</h1>
               </div>
               <div className="inicioMain-ListContainer">
                  {data.results ? (
                     data.results.slice(0, 6).map((movie) => (
                        <div key={movie.id} className="inicioMain-List">
                           <img
                              src={`https://image.tmdb.org/t/p/w400${movie.backdrop_path}`}
                              alt={movie.title}
                           />
                           <h2>{movie.title}</h2>
                           <p className="inicioMain-p">{movie.overview}</p>
                           <Link onClick={() => console.log(`ID de la película: ${movie.id}`)} to={`/movies/${movie.id}`}>Ver Más</Link>
                        </div>
                     ))
                  ) : (
                     <Loading />
                  )}
               </div>
            </div>
         </div>

         <section className="inicioMain-nosotros">
            <div className="inicioMain-container">
               <div>
                  <h1>más populares</h1>
               </div>
               <div className="inicioMain-ListContainer">
                  {data.results ? (
                     data.results.slice(7, 10).map((movie) => (
                        <div key={movie.id} className="inicioMain-List">
                           <img
                              src={`https://image.tmdb.org/t/p/w400${movie.backdrop_path}`}
                              alt={movie.title}
                           />
                           <h2>{movie.title}</h2>
                           <p className="inicioMain-p">{movie.overview}</p>
                           <Link onClick={() => console.log(`ID de la película: ${movie.id}`)} to={`/movies/${movie.id}`}>Ver Mas</Link>
                        </div>
                     ))
                  ) : (
                     <Loading />
                  )}
               </div>
            </div>
         </section>
      </>
   );
};

export default InicioMain;
