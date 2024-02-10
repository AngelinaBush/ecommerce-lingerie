import { Link } from 'react-router-dom';
import './Slider.css';
import 'react-multi-carousel/lib/styles.css';

const CarouselProduct = (props) => {
 
    return(

        <div key={props.item.id} className='carousel-product' >
            <Link to={`/item/${props.item.id}`}> 
                <img src={props.image} alt="product" width="250px" height="350px" /></Link>
                <h2>{props.name}</h2>
                <p><span> {props.price} </span>CFA</p>       
            
        </div>
    )
}


export default CarouselProduct;

