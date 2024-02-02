import { useTranslation } from 'react-i18next';
import '../App.css';
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";


const SearchButtons = ({data, setShop, filteredProducts}) => {

    const { t } = useTranslation();
    
    return(
        <div className='categories'>
            <ul>
                <li className='category all-cat' onClick={() => setShop(data)}>{t('All Categories')}</li>
                <li className='category' onClick={() => filteredProducts("most wanted")}>Best sellers <span><CiStar /></span></li>
                <li className='category' onClick={() => filteredProducts("matching set")}>{t('Matching sets')}</li>
                <li className='category' onClick={() => filteredProducts("black and white")}>{t('Black and white sets')}</li>
                <li className='category' onClick={() => filteredProducts("colorful")}>{t('Colorful sets')}</li>
                <li className='category' onClick={() => filteredProducts("longline bra")}>{t('Sets with longline bra')}</li>
                <li className='category valentines-cat' onClick={() => filteredProducts("valentines")}>Valentine's Edit <span><CiHeart /></span></li>

            </ul>
        </div>
    )
}


export default SearchButtons;