import { useEffect, useState } from 'react';
import recipeContext from './recipeContext';
import { TypeContextProps, FavType, RecommendedType } from '../types';

function RecipeProvider({ children }: TypeContextProps) {
  const [favoriteStorage, setFavoriteStorage] = useState<FavType[]>([]);
  const [data, setData] = useState<RecommendedType>({ drinks: [], meals: [] });

  useEffect(() => {
    setFavoriteStorage(
      JSON.parse(localStorage.getItem('favoriteRecipes') as string) || [],
    );
  }, []);

  const values = {
    favoriteStorage,
    setFavoriteStorage,
    data,
    setData,
  };

  return (
    <recipeContext.Provider value={ values }>
      { children }
    </recipeContext.Provider>
  );
}

export default RecipeProvider;
