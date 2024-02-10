import './WhyUs.css';
import { TbNavigationSearch } from "react-icons/tb";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { useTranslation } from 'react-i18next';


const WhyUs = () => {

    const { t } = useTranslation();

    
    return(
        <div className='why-us'>
            <div className='why-us-bg'>

                <div className='why-us-header'>
                    <h3>{t('Shopping easy')}</h3>
                </div>

                <div className='why-us-body'>
                    <ul>
                        <li>
                            <h4><span><TbNavigationSearch /></span>{t('Diverse Styles, Effortless Navigation')}</h4>
                            <p>{t('Diverse Styles, Effortless Navigation content')}</p>
                        </li>
                        <li>
                            <h4><span><MdOutlineSecurityUpdateGood /></span>{t('Quick and Secure Checkout')}</h4>
                            <p>{t('Quick and Secure Checkout content')}</p>
                        </li>
                        <li>
                            <h4><span><MdOutlineSupportAgent /></span>{t('Prompt Customer Support')}</h4>
                            <p>{t('Prompt Customer Support content')}</p>
                        </li>
                        <li>
                            <h4><span><TbTruckReturn /></span>{t('Hassle-Free Returns')}</h4>
                            <p>{t('Hassle-Free Returns content')}</p>
                        </li>
                    </ul>

                    <div className='why-us-end'>
                         <h3>{t('Experience stress-free lingerie shopping')}</h3>
                    </div>

                </div>

            </div>
        </div>
   
    )
}


export default WhyUs;

