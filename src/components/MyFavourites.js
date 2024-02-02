import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";



const MyFavourites = ({favorites, handleRemove, handleClearAll, notes, handleNoteChange}) => {

    const { isAuthenticated } = useAuth0();
    const { t } = useTranslation();
      
    return (
        <div>

        { !isAuthenticated &&  
            <>
                <div className="hide-favourites">
                    <h4>{t('Log in favourites')}</h4>
                </div>
            </>
        }

        {isAuthenticated && (
            <>
                <div className="favourite-container">

                    <div className="header">
                        <h2>{t('Favorites')}</h2>
                    </div>

                    <div className="header">
                        <h3>{t('Favorites content')}</h3>
                    </div>

                    <div className="favourite-list">
            
                        {favorites.map((item, index) => (
                            <div key={index} className="favourite-item">
                                <h3>{item.name}</h3>
                                <Link to={`/item/${item.id}`}><img src={item.image} alt="item" width="200px" height="280px"/></Link>
                                <textarea
                                    placeholder={t('Write your note')}
                                    id={item.id}
                                    value={notes[item.id] || ''}
                                    onChange={(event) => handleNoteChange(item.id, event)}
                                />
                                <button className="remove-item" onClick={() => handleRemove(index)}>{t('Remove')}</button>
                               
                            </div>
                        ))}

                   </div> 

                    <div className="header">
                        {favorites.length > 0 && <button className="clear-favourites" onClick={handleClearAll}>{t('Clear all')}</button>}
                    </div>

                </div>

            </>

        )}

        </div>
  
    )
}

export default MyFavourites;