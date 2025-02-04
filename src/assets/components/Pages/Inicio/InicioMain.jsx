import { useContext } from 'react'
import { MovieContext } from '../../../context/ContextMovie'
import '../Inicio/inicioMain.scss'

const InicioMain = () => {
    const {data} = useContext(MovieContext)
    console.log(data);
    
    return (
      <div>
          {data.results ? (
          data.results.slice(0,6).map((movie) => (
            <div key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`} alt={movie.title} />
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              <p>Fecha de estreno: {movie.release_date}</p>
            </div>
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    )
}

export default InicioMain