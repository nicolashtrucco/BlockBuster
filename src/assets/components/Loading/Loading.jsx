import '../Loading/loading.scss'
import { PulseLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className='loading-container'>
        <PulseLoader size={32} color={'#fff'}/>
    </div>
  )
}

export default Loading