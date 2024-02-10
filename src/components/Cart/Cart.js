import { useTranslation } from 'react-i18next';
import './Cart.css';
import { Link } from 'react-router-dom';
import { FaRegTrashAlt } from "react-icons/fa";
import { CartContext} from '../../Context';
import { useContext } from 'react';


const Cart = () => {

    const { t } = useTranslation();

    const [cart, setCart] = useContext(CartContext)

    const increaseQty = (id, size) => {
        setCart(cart => 
            cart.map((item) => 
            (id === item.id  && size === item.size) ? {...item, qty: item.qty + 1} : item))       
    };

    const decreaseQty = (id, size) => {
        setCart(cart => 
            cart.map((item) => 
            (id === item.id  && size === item.size) ? {...item, qty: item.qty - (item.qty > 1 ? 1 : 0)} : item))      
    };


    const removeItem = (id,size) => {
        const newCart = cart.filter(item => !(item.id === id &&  item.size === size));
        setCart(newCart)
    };

    const totalPrice = cart.reduce((price, item) => price + item.qty * item.price, 0)

    
    const clearCart = () => {
       setCart([])
    }

    
    return(
        <div className='cart'>
            <div className='cart-header'>
                <h3>{t('My Shopping Cart')}</h3>
            </div>

            {
            cart.length === 0 && 
            <>

            <div className='empty-cart'>
                <h2>{t('Empty basket')}</h2>
                <Link to="/shop"> <button><i className="animation"></i>SHOP NOW<i className="animation"></i></button></Link>
            </div>

            </>
            }

            <div className='full-cart'>


                {cart.map((El) => {
                    return (
                
                        <div className='cart-item' key={El.id + El.size}>
                            <div>
                               <img src={process.env.PUBLIC_URL + `/${El.image}`} alt="item" width="100px"/>
                            </div>

                            <div className='item-details'>

                                <div className='item-info'>
                                    <h4>{El.name}</h4>
                                    <p>{t('Size')}: {El.size}</p>
                                </div>

                                <div className='item-quantity'>
                                    <button onClick={() => increaseQty(El.id, El.size)}>+</button>
                                    <input type="number" value={El.qty} readOnly></input>
                                    <button onClick={() => decreaseQty(El.id, El.size)}>-</button>
                                </div>

                                <div className='item-price'> 
                                    <p>Total: <span>{El.price * El.qty}</span> CFA</p>
                                </div>

                                <div className='remove-item'>
                                    <button onClick={() => removeItem(El.id, El.size)}><FaRegTrashAlt /></button>
                                </div>

                            </div>
    
                        </div>    
                    )
                })}

                {
                    cart.length > 0 && 
                    <>
                    <div className='clear-cart'>
                        <button onClick={clearCart}>{t('Clear cart')}</button>
                    </div>
                    </>
                }

            </div>

            <div className='total-price'>
            {
                cart.length > 0 &&
                <>
                    <div className='total'>
                       <h4>{t('Total')}: {totalPrice} CFA</h4>
                    </div>

                    <div className='checkout'>
                        <Link to='/checkout'><button className='checkout-btn'>{t('Check out')}</button></Link>
                    </div>
                </>
            }
        
            </div>

           

        </div>
    )


}


export default Cart;