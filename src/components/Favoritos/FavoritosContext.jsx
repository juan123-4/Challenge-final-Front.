import React,{ createContext, useContext, useEffect, useState} from 'react';

const FavoritosContext = createContext();

    export const FavoritosProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    const toggleFavorite = (id) => {
        let updatedFavorites;
        if (favorites.includes(id)) {
        updatedFavorites = favorites.filter(favId => favId !== id);
        } else {
        updatedFavorites = [...favorites, id];
        }
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return (
        <FavoritosContext.Provider value={{ favorites, toggleFavorite }}>
        {children}
        </FavoritosContext.Provider>
    );
    };

    export const useFavoritos = () => useContext(FavoritosContext);
