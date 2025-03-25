/** @format */

import { useEffect, useState } from "react";
import "../MoviesDetail/movieDetail.scss";
import { useParams, Link } from "react-router-dom";
import { apiKey } from "../../context/ApiKeyMovie";

const MoviesDetail = () => {
   const { id } = useParams();
   const [data, setData] = useState({});

   useEffect(() => {
      fetch(
         `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es-ES`
      )
         .then((res) => res.json())
         .then((data) => setData(data))
         .catch((error) => console.log(error));
   }, []);

   console.log(data);

   return (
      <div className="movieDetail-global">
         <div className="movieDetail-container">
            <div className="movieDetail-img">
               <img
                  src={`https://image.tmdb.org/t/p/w400${data.backdrop_path}`}
                  alt={data.title}
               />
            </div>
            <div className="movieDetail-info">
               <h1>{data.title}</h1>
               <p>{data.overview}</p>
            <Link to="/Peliculas">Volver</Link>
            </div>

         </div>
      </div>
   );
};

export default MoviesDetail;
