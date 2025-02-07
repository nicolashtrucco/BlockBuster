/** @format */

import { createContext, useState, useEffect } from "react";
import { apiKey } from "./ApiKeyMovie";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
   // const apiKey = "3ea47d3c800bf82fca2e63547e872c63";
   const [data, setData] = useState({})

   useEffect(() => {
      const fetchMovie = async () => {
        try {
            const response = await fetch(
               `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES`,
            );
         
            if (response.ok) {
               const dataApi = await response.json();
               setData(dataApi);
               // console.log(data);
               
            } else {
               console.log(`Error: ${response.statusText}`);
            }
         } catch (error) {
            console.log("Error en la solicitud", error);
         }
         
      };
      fetchMovie();
   }, []);

   return(
       <MovieContext.Provider value={{data}}>
           {children}
       </MovieContext.Provider>
   )
};



export {MovieContext, MovieProvider}


