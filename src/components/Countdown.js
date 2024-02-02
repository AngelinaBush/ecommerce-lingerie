import { useEffect, useRef, useState } from 'react';
import '../App.css';
import { useTranslation } from 'react-i18next';

const Countdown = () => {

    const { t } = useTranslation();

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [lastDate, setLastDate] = useState("29 Feb, 2024");

    let interval = useRef()

    const startTimer = () => {
        interval = setInterval(()=> {
        const endDate = new Date(lastDate);
        const currentDate = new Date();
        const totalSeconds = (endDate - currentDate) / 1000;

        if (totalSeconds < 0){
            clearInterval(interval.current)
        }

        else {
            setDays(Math.floor(totalSeconds / 3600 / 24));
            setHours(Math.floor(totalSeconds / 3600) % 24);
            setMinutes(Math.floor(totalSeconds / 60) % 60);
            setSeconds(Math.floor(totalSeconds % 60));
        }
    }, 1000);
    }
 
    useEffect(()=> {
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
    })
 

    return(
        <div className='countdown-container-general'>

            <div className='countdown-container'>
                <div className='countdown-value'>
                    <h3>{days}</h3><span>{t('days')}</span>
                </div>
                <div className='countdown-value'>
                    <h3>{hours}</h3><span>{t('hours')}</span>
                </div>
                <div className='countdown-value'>
                    <h3>{minutes}</h3><span>{t('minutes')}</span>
                </div>
                <div className='countdown-value'>
                    <h3>{seconds}</h3><span>{t('seconds')}</span>
                </div>
            </div>

        </div>
   
    )
}

export default Countdown;