import React from 'react'
import { useAppContext } from './context/appContext';
import { useNavigate } from 'react-router';

const Favorites = () => {

    const navigate = useNavigate();

    const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

    console.log('favorites are',favorites);

    const favoritesChecker = (id)=>{
        const boolean = favorites.some((book) => book.id === id);
        return boolean;
    };

    return (
        <div className="favorites">
             {favorites.length > 0 ? favorites.map((book)=>(
                <div key={book.id} className="book">
                    <div>
                    <h3>{book.title}</h3>
                    </div>
                    <div>
                    <img src={book.image_url} alt="#" onClick={()=>navigate(`/books/${book.id}`)}/>
                    </div>
                    <div>
                    {favoritesChecker(book.id)? (
                    <button onClick={()=> removeFromFavorites(book.id) } >
                    Remove from Favorites
                    </button> 
                    ) : (
                    <button onClick={()=> addToFavorites(book) } >
                    Add to Favorites
                    </button>
                    )
                    }
                    </div>
                </div>
            ))
            :
            <h1>You don't have favorite books yet!</h1>
            }
        </div>
    )
}
export default Favorites