import '../Movie/movieHeader.scss'
import BackGround from '../../../../img/Movies.jpg'

const MovieHeader = () => {
  return (
    <div className='movieHeader-Container'>
        <div className='movieHeader-img'></div>
        {/* <img src={BackGround} alt="BlockBuster-BackGround" /> */}
        {/* <div className='movieHeader-H1'> */}
          <h1>Las Mejores Películas para Ti</h1>

        {/* </div> */}
    </div>
  )
}

export default MovieHeader