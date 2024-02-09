import { useTranslation } from 'react-i18next';
import '../App.css';
import { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Swal from 'sweetalert2';

const Contact = () => {

    const { t } = useTranslation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
   
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length===0|| email.length===0 || message.length===0) {
      setError('All fields are required');
      return;
    }

    setError('');
    setSuccess('');
 
        
        const data  = {name, email, message}
        fetch("https://backend-lingerie.netlify.app/", {
            method:"POST",
            body: JSON.stringify(data),
            headers:{
                "Content-Type": "application/json"
            }
        })

          .then(data => {
            setSuccess(Swal.fire({
                position: "top",
                icon: "success",
                iconColor:"#c34466",
                text: "Thanks for reaching out! We'll review your message and get back to you shortly.",
                showConfirmButton: false,
                timer: 1500
              }));
            setName('');
            setEmail('');
            setMessage('');
          })
        .catch (error => {
                setError('An error occurred while submitting the form');
            });
    }
    
    return(
        <div className='general-contact'>
            <div className='contact'>
            
                    <div className='header'>
                        <h2>{t('Get in touch')}</h2>
                    </div>

                    <div className='contact-box'>
                    <div className='contact-left'>

                        <h3>{t('Send us a message')}</h3>

                        <form onSubmit={handleSubmit}>

                            {error && <div>{error}</div>}

                            <div className='form-group'>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value) } placeholder={t('Your name')} />
                            </div>
                    
                            <div className='form-group'>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value) } placeholder={t('Your email')} />
                            </div>
                    
                            <div className='form-group'>
                                <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value) } id="" cols="30" row="10"></textarea>
                           </div>

                           <div>
                                <button className='submit-form-btn' >{t('Send')}</button>
                           </div>
                        </form>
                    </div>


                    <div className='contact-right'>
                        <h3>Contact information</h3>

                        <div className=''>
                            <p><FaPhoneAlt /> +288 90 99 9999</p>
                            <p><MdLocalPostOffice /> essential.support@gmail.com</p>
                            <p><FaLocationDot />Lome, Togo</p>
                        </div>

                    </div>

                    </div>

                
            </div>

        </div>

    )
}


export default Contact;