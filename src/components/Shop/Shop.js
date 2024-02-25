import { useContext, useState, useEffect} from 'react';
import './Shop.css';
import { useTranslation } from 'react-i18next';
import SearchButtons from './SearchButtons'
import { Link } from 'react-router-dom';
import { BsBalloonHeart } from "react-icons/bs";
import { BsBalloonHeartFill } from "react-icons/bs";
import { data } from '../../data/data';
import { FavouritesContext } from '../../Context';


const Shop= () => {

    const { t } = useTranslation();

    const [shop, setShop] = useState(data)

    const [favorites, setFavorites] = useContext(FavouritesContext)

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));

        const favoritesIds = favorites.map((fav) => fav.id)
        
        setShop((currValue) => currValue.map((item) =>
         ({...item, liked: favoritesIds.includes(item.id)  
        })))
      
    }, [favorites]); 
    
    
    const handleToggleLike = (item) => {
        if (item.liked) {
          setFavorites(favorites.filter((i) => i.id !== item.id));
        } else {
          setFavorites([...favorites, item]);
        }
    };

    
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
    
    const itemsPerPage = 8;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;

    const filteredProducts = (category) => {
        const filteredResult = [];
        data.forEach(product => {
            product.category.forEach(term => {
                if (term === category) {
                    filteredResult.push(product);
                    setShop(filteredResult)
                    setSelectedCategory(category);
                    setCurrentPage(1);
                }
            })
        })
    }

    const nextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(shop.length / itemsPerPage)));
    };
    
    const prevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    return(
        
        <div className='shop-page'>
            <div className='left-box'>

                <div className='search-categories'>
                    <SearchButtons data={data} setShop={setShop} filteredProducts={filteredProducts}/>
                </div>

                <div className='banner'>
                    <img src="/images/ad1.png" alt='banner'/>
                </div>
            </div>

             
            <div className='right-box'>
                <div className='banner'>
                    <img src="/images/ad2.png" alt='banner'/>
                </div>



                <div className='products-container'>

                {shop.slice(startIndex, endIndex).map((product) => {
                     const {id, name, image, price, discount_price} = product;

                    return(
                        <div key={id}>
                            <div className='product' >
                                <Link to={`/shop/item/${product.id}`}><img src={image} alt="product" width="200px" height="300px"/></Link>
                                <div className='product-details'>
                                    <div> 
                                        <h3>{name}</h3>
                                        <h4> <sub>{discount_price}</sub>{price}  CFA</h4>
                                    </div>
                                    <div>
                                        <button className='heart-btn' onClick={() => handleToggleLike(product)}>{product.liked ?  <BsBalloonHeartFill /> : <BsBalloonHeart /> }</button>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    )
                 })}

                </div> 

                <div className='pages'>
                     <button className='pages-back-btn' onClick={prevPage} disabled={currentPage === 1}>{t('Back')}</button>
                     <button className='pages-next-btn' onClick={nextPage} disabled={endIndex >= shop.length}>{t('Next')}</button>
                </div>

            </div>

        </div>

    )

}


export default Shop;