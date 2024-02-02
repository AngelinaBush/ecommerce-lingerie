import { useTranslation } from 'react-i18next';
import '../App.css';
import video from './video.mp4'
import { Link } from 'react-router-dom';

const HomePage4 = () => {

    const { t } = useTranslation();
    
    return(
        <div className='valentines'>

            <div className='valentines-content'>

                <div className='video-content'>
                   <video className='video' autoPlay="autoplay" loop muted  >
                       <source src={video} type="video/mp4" />
                   </video>
                </div>

                <div className='text-content'>
                    <h3>{t('Valentines header')}</h3>
                    <p>{t('Valentines content')}</p>
                    <Link to="/shop"><button>Shop Valentine's</button></Link>
                </div>

            </div>
        </div>

   
    )
}


export default HomePage4;

