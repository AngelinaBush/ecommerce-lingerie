import { BsArrowDown } from "react-icons/bs";
import { TbFaceIdError } from "react-icons/tb";
import './Checkout.css';

const Checkout = () => {

    return (
        <div>
            <div className="checkout-box">
                <h3>Unfortunately, I haven't resolved the StripeBackendBlablaDatabaseIssue..YET (!)</h3>
                <h3>For now just...<span><BsArrowDown /></span> But thank you for coming!</h3>
            </div>

            <div className="imaginary-checkout">
                <p>Imaginary Checkout Page</p>
                <TbFaceIdError/>
            </div>
        </div>
    )
}

export default Checkout;