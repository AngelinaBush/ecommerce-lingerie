import { useTranslation } from 'react-i18next';
import './Footer.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Footer = () => {

    const { i18n, t } = useTranslation();
    
    return(

        <div className='footer'>

            <div className='top-footer'>  
                <div className='footer-icons hr-lines'>
                    <FaFacebookSquare className='icon'/>
                    <FaSquareInstagram className='icon' />
                    <FaSquareWhatsapp className='icon'/> 
                </div>
            </div>

            <div className='down-footer'>
                <div className='about-us'>
                    <h5>{t('About us')}</h5>
                    <p>email: essential.nk@gmail.com</p>
                    <p>{t('Phone')} +288 9023 6808</p>
                    <p>{t('Customer Support Hours')}</p>

                </div>

                <div className='help-you'>
                    <h5>{t('Let us help you')}</h5>
                    <p>{t('Return & Refund Policy')} </p>
                    <p>{t('Privacy Policy')} </p>
                    <p>{t('Care tips')}</p>
                    <p>{t('Size Charts')}</p>
                </div>

                <div className='subscribe'>
                    <h5>{t('Subscribe')} </h5>
                    <div className='input-container'>
                    <input placeholder='Email' type='text'/>
                    <button className='subscribe-btn'><HiOutlineArrowNarrowRight /></button>
                    </div>
                </div>

            </div>
        
        </div> 

    )
}


export default Footer;

