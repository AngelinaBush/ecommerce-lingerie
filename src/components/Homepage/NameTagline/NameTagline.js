import { useTranslation } from 'react-i18next';
import './NameTagline.css';

const Nametagline = () => {

    const { t } = useTranslation();

    return(

        <div>
            <div className='logo-container'>
               <h1 className='logo-header'>ESSENTIAL NK</h1>     
            </div>

            <div className='logo-container'>
                <p className='tagline'>{t('Tagline')}</p>
            </div>

        </div> 
    )
}


export default Nametagline;

