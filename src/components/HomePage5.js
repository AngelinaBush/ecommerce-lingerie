import { Link } from 'react-router-dom';
import '../App.css';
import Countdown from './Countdown';
import { useTranslation } from 'react-i18next';



const HomePage5 = () => {

    const { t } = useTranslation();

    return(
        <div className='discount-countdown'>


            <div className='header'>
                <h2>{t('Final days')}</h2>
                <h3>15%</h3>
                <Link to="/shop"><button>{t('Check it out')}</button></Link>
                <p>{t('Discount content')}</p>
            </div>

            <div>
                <Countdown />
            </div>

            <div className='accordion'>
                <span className='acc-img'></span>
                <span className='acc-img'></span>
                <span className='acc-img'></span>   
                <span className='acc-img'></span>     
                <span className='acc-img'></span> 
                <span className='acc-img'></span> 
            </div>

        </div>

            
   
    )
}

export default HomePage5;