import { useTranslation } from 'react-i18next';
import '../App.css';
import Slider from './Slider';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


const HomePage3 = () => {

    const { t } = useTranslation();
    
    return(
        <div className='popular'>
            <div className='header'>
                <h3>{t('Most wanted')} <span><HiOutlineArrowNarrowRight /></span></h3>
            </div>

            <div className='slider'>
                <Slider />
            </div>
            
        </div>
   
    )
}


export default HomePage3;

