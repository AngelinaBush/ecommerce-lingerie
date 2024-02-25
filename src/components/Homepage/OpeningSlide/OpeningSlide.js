import { useTranslation } from 'react-i18next';
import './OpeningSlide.css';
import { Link } from "react-router-dom";


const OpeningSlide = () => {

    const { t } = useTranslation();
    
    return(
        <div className='home'>
            <div className='home2'>

                <div className='landing-content'>
                       <h2>{t('Exclusive Lingerie Collection')}</h2>
                       <h3>{t('Welcome to Essential NK')}</h3>
                       
                       <div className='shop-btn-container'>
                           <Link to="/shop">
                           <button className="shop-btn"><i className="animation"></i>SHOP NOW<i className="animation"></i>
                          </button>
                           </Link>
                       </div>
                </div>
            </div>
        </div>
   
    )
}


export default OpeningSlide;

