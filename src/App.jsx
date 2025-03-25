/** @format */

import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InicioContainer from "./assets/components/Pages/Inicio/InicioContainer";
import NavBar from "./assets/components/Navbar/NavBar";
import { MovieProvider } from "./assets/context/ContextMovie";
import Footer from "./assets/components/Footer/Footer";
import MovieContainer from "./assets/components/Pages/Movie/MovieContainer";
import NosotrosContainer from "./assets/components/Pages/Nosotros/NosotrosContainer";
import ScrollTop from "./assets/components/scrollTop/ScrollTop";
import ContactoContainer from "./assets/components/Pages/Contacto/ContactoContainer";
import MoviesDetail from "./assets/components/MoviesDetail/MoviesDetail";


function App() {
   return (

      <>

      <BrowserRouter>
      <ScrollTop />
         <NavBar />
         <MovieProvider>
            <Routes>
               <Route path="/" element={<InicioContainer />} />
               <Route path="/Peliculas" element={<MovieContainer/>} />
               <Route path="/Nosotros" element={<NosotrosContainer/>}/>
               <Route path="/Contacto" element={<ContactoContainer/>}/>
               <Route path="/movies/:id" element={<MoviesDetail/>}/>
            </Routes>
         </MovieProvider>
         
        
         <Footer/>
      </BrowserRouter>
      </>
   );
}

export default App;
