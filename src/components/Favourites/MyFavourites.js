import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext} from "react";
import { FavouritesContext } from "../../Context";
import './MyFavourites.css';


const MyFavourites = () => {

    const { isAuthenticated } = useAuth0();
    const { t } = useTranslation();


    const [favorites, setFavorites] = useContext(FavouritesContext)

    const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : (''))

     useEffect(() => {
       localStorage.setItem('notes', JSON.stringify(notes));
     }, [notes]);

    const handleNoteChange = (itemId, event) => {
       const updatedNotes = { ...notes, [itemId]: event.target.value };
       setNotes(updatedNotes);
    };

    const handleRemove = (index) => {
       const removedItem = favorites[index];
       const updatedFavorites = favorites.filter((_, i) => i !== index);
       const updatedNotes = { ...notes };
       delete updatedNotes[removedItem.id];
       setFavorites(updatedFavorites);
       setNotes(updatedNotes);
    };

    const handleClearAll = () => {
       setFavorites([]);
    };
      
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