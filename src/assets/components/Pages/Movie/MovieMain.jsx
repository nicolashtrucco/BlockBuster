/** @format */
import { useContext, useState } from "react";
import { MovieContext } from "../../../context/ContextMovie";
import MovieMainChildren from "./MovieMainChildren";

const MovieMain = () => {
   const { setQuery } = useContext(MovieContext);
   const [filter, setFilter] = useState("");

   const filterMovie = (e) => {
      setFilter(e.target.value);
   };

   const handleSearchTerm = () => {
      setQuery(filter.toLowerCase());
      setFilter("");
   };    

   return (
      <>
         <MovieMainChildren
            filter={filter}
            filterMovie={filterMovie}
            handleSearchTerm={handleSearchTerm}
         />
      </>
   );
};

export default MovieMain;
