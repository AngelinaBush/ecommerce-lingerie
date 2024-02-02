import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";
import Logout from "./Logout";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { VscMenu } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";


const Navbar = ({count}) => {

    const [MenuBar, setMenuBar] = useState(false);

    const { i18n, t } = useTranslation();

    const {isLoading} = useAuth0();


    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en')
    }

    const toggleMenu = () => {
        setMenuBar(!MenuBar);
    
    };

     return (
        <div>
            <div className="up-nav">
                <div className="up-container up-nav-container">
               
                <div className="ship-container">
                    <h3>{t('Shipping')}</h3>
                </div>

                <div className="lang-container">
                <button className="language-btn" onClick={toggleLang}>
                        {i18n.language === 'en' ? 'FR' : 'EN'}
                </button>
                </div>
                </div>
                   
            </div>

            
        <nav>
            <div className="container nav-container">
                <Link to="/">
                    <img src="images/logo.png" className="logo" alt="logo" width="100px" />
                </Link> 

                <ul className={`nav-links ${MenuBar ? 'navBarShow' : 'navBarHide'}`}>
                    <li onClick={toggleMenu}><Link to="/" className="link">{t('Home')}</Link> </li> 
                    <li onClick={toggleMenu}><Link to="/shop" className="link">{t('Shop')}</Link></li>  
                    <li onClick={toggleMenu}><Link to="/contact" className="link">{t('Contact')}</Link></li>
                </ul>

                <div className="nav-right">
                {
                    isLoading ?
                    <ClipLoader
                    color={'#fa7085'}
                    loading={isLoading}
                    size={20}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  /> : <Login/>
                }

                    <Logout />
                    

                    <Link to="/myfavorites"><button className="nav-icon"><FaHeart /></button></Link>
                    <div>
                    <Link to="/cart"><button className="nav-icon"><FaShoppingCart/>{count > 0 ? <sup>{count}</sup> : <sup>{null}</sup>}</button></Link>
                    </div>
                    
                
                    <button className="menu-button" onClick={() => setMenuBar(!MenuBar)}>
                        {
                            !MenuBar ?  <VscMenu /> : <GrClose />
                            
                        }
                    </button>
                </div>
            </div>
        </nav>
        </div>
     )
}


export default Navbar;