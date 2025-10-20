import React, { createContext, useState, useContext } from 'react';

// 1. Cria o Contexto
const FavoritesContext = createContext();

// 2. Cria o Provedor do Contexto
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (pokemon) => {
    setFavorites((prevFavorites) => [...prevFavorites, pokemon]);
  };

  const removeFavorite = (pokemonId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((pokemon) => pokemon.id !== pokemonId)
    );
  };

  const isFavorite = (pokemonId) => {
    return favorites.some((pokemon) => pokemon.id === pokemonId);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

// 3. Cria um Hook customizado para facilitar o uso do contexto
export function useFavorites() {
  return useContext(FavoritesContext);
}
