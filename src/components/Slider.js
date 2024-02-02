import '../App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselProduct from './CarouselProduct';
import { data_popular, responsive} from './data_popular';

const Slider = () => {
    
    const popularProduct = data_popular.map((item) => (
        <CarouselProduct 
        key={item.id}
        item={item}
        name={item.name}
        image={item.image}
        price={item.price} />
    ))

    return(
        <div>
           <Carousel  responsive={responsive} autoPlay infinite={true} interval="3000" removeArrowOnDeviceType={["tablet", "mobile"]}>
                 {popularProduct}
           </Carousel>
        </div>
    )
}


export default Slider;

