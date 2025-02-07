import '../Inicio/inicioHeader.scss'
import ImagenBlockBusterHeader from '../../../../img/BackGround-BlockBuster.webp' 

const InicioHeader = () => {
  return (
    <div className='inicioHeader-container'>
      <img src={ImagenBlockBusterHeader} alt="" />
    </div>
  )
}

export default InicioHeader