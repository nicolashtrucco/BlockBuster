/** @format */

import { createContext, useState, useEffect } from "react";
import { apiKey } from "./ApiKeyMovie";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
   const [data, setData] = useState({})
   const [page, setPage] = useState(1)
   const [loading, setLoading] = useState(true)


   

   useEffect(() => {
         const fetchMovie = async () => {
           try {
               const response = await fetch(
                  `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=${page}`,
               );
            
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
               setLoading(false)
            } finally {
               setLoading(false)
            }
            
         };
         fetchMovie();
   }, [page]);

   return(
       <MovieContext.Provider value={{data, setPage, page}}>
           {children}
       </MovieContext.Provider>
   )
};



export {MovieContext, MovieProvider}


