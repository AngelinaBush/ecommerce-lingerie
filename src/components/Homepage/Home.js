import '../../App.css';
import Nametagline from './NameTagline/NameTagline';
import OpeningSlide from './OpeningSlide/OpeningSlide';
import WhyUs from './WhyUs/WhyUs';
import PopularSlider from './PopularSlider/PopularSlider';
import Valentines from './Valentines/Valentines';
import DiscountCountdown from './Countdown/DiscountCountdown';


const Home = () => {

    return(
        <div>
            <Nametagline />
            <OpeningSlide />
            <PopularSlider />
            <WhyUs />
            <DiscountCountdown />
            <Valentines />
        </div>     
    )
}


export default Home;

