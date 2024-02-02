import { useParams } from 'react-router';
import '../App.css';
import { BsArrowRightShort } from "react-icons/bs";
import {useNavigate} from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Item = ({data, addToCart, addSize, size}) => {

    const { t } = useTranslation();

    const {itemId} = useParams();
    const item = data.find((e) => e.id === Number(itemId))

    const navigate = useNavigate();
    const navigateToShop = () => {
        navigate('/shop');
      };

    
    return(
        <div className='selected-item-window'>

            <div>
                <button className='continueBtn' onClick={navigateToShop}>{t('Continue shopping')}<span><BsArrowRightShort /></span></button>
            </div>


        <div className='selected-item'>
           
            <div className='selected-item-leftside'>
               <img className='chosen-item-img' src={process.env.PUBLIC_URL + `/${item.image}`} alt="product"/>
            </div>
            <div className='selected-item-rightside'>
                <div className='selected-item-info'>
                    <h2>{item.name}</h2>
                    <h3>{item.price} CFA</h3>
                </div>

                <div className='select-size'>
                    <h3>{t('Size')}</h3>
                    <div className='size-range'>
                        <button className={ size==='s' ? 'selected-size-btn' : 'selected-size-default'} onClick={() => addSize('s')}>S</button>
                        <button className={ size==='m' ? 'selected-size-btn' : 'selected-size-default'} onClick={() => addSize('m')}>M</button>
                        <button className={ size==='l' ? 'selected-size-btn' : 'selected-size-default'} onClick={() => addSize('l')}>L</button>
                        <button className={ size==='xl' ? 'selected-size-btn' : 'selected-size-default'} onClick={() => addSize('xl')}>XL</button>
                    </div>
                   
                </div>

                <div>
                     <button className='addToCart-btn' onClick={() => addToCart(item, size)}>{t('Add to cart')}</button>
                </div>

            </div>
        </div>

        </div>
    )
}


export default Item;

