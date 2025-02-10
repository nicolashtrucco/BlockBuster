/** @format */

import { createContext, useState, useEffect } from "react";
import { apiKey } from "./ApiKeyMovie";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
   const [data, setData] = useState({});
   const [page, setPage] = useState(1);
   const [loading, setLoading] = useState(true);
   const [query, setQuery] = useState("");

   const trimQuery = query.trim();

   const url = trimQuery
      ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-ES&query=${trimQuery}&page=${page}&include_adult=false`
      : `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=${page}`;

   useEffect(() => {
      const fetchMovie = async () => {
         try {
            const response = await fetch(url);

            if (response.ok) {
               const dataApi = await response.json();
               setData(dataApi);
               // console.log(Object.entries(data));
               // console.log(data);
            } else {
               console.log(`Error: ${response.statusText}`);
            }
         } catch (error) {
            console.log("Error en la solicitud", error);
         } finally {
            setLoading(false);
         }
      };
      fetchMovie();
   }, [page, query]);

   return (
      <MovieContext.Provider value={{ data, setPage, page, query, setQuery }}>
         {children}
      </MovieContext.Provider>
   );
};

export { MovieContext, MovieProvider };
