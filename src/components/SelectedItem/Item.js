import { useParams } from 'react-router';
import './SelectedItem.css';
import { BsArrowRightShort } from "react-icons/bs";
import {useNavigate} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { data } from '../../data/data';
import { CartContext} from '../../Context';
import Swal from 'sweetalert2';
import { useState, useEffect, useContext } from 'react';


const Item = () => {

    const { t } = useTranslation();

    const {itemId} = useParams();
    const item = data.find((e) => e.id === Number(itemId))

    const navigate = useNavigate();
    const navigateToShop = () => {
        navigate('/shop');
      };

      const [cart, setCart] = useContext(CartContext)

      const [size, setSize] = useState('')


      useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
      }, [cart]);
    
      const addSize = (s) => {
          setSize(s)
      }
    
      const addToCart = (item, size) => {
        if (size) {
          const existingItemIndex = cart.findIndex(
            (cartItem) => cartItem.id === item.id && cartItem.size === size
          );
    
          if (existingItemIndex !== -1) {
            Swal.fire({
              position:"top",
              text:"This item  is already in the cart.",
              confirmButtonColor:"#F5B9C3",
            })
          } 
          else {
            Swal.fire({
              position: "top",
              icon: "success",
              iconColor:"#c34466",
              text: "Item is added to the cart",
              showConfirmButton: false,
              timer: 1500
            });
            setCart([...cart, { ...item, qty:1, size}]);
            setSize('');
          }
        } 
        else {
          Swal.fire({
            position:"top",
            icon:"warning",
            iconColor:"#c34466",
            confirmButtonColor:"#F5B9C3",
            text:"Please select a size before adding to the cart."
          })
        }
      }

    
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

