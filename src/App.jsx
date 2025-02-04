/** @format */

import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InicioContainer from "./assets/components/Pages/Inicio/InicioContainer";
import NavBar from "./assets/components/Navbar/NavBar";
import { MovieProvider } from "./assets/context/ContextMovie";

function App() {
   return (
      <BrowserRouter>
         <NavBar />
         <MovieProvider>
            <Routes>
               <Route path="/" element={<InicioContainer />} />
            </Routes>
         </MovieProvider>
      </BrowserRouter>
   );
}

export default App;
