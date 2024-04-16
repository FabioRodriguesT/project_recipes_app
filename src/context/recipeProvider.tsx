import { useEffect, useState } from 'react';
import recipeContext from './recipeContext';
import { TypeContextProps, FavType, RecomType } from '../types';

function RecipeProvider({ children }: TypeContextProps) {
  const [favoriteStorage, setFavoriteStorage] = useState<FavType[]>([]);
  const [data, setData] = useState<RecomType>({ drinks: [], meals: [] });

  useEffect(() => {
    setFavoriteStorage(
      JSON.parse(localStorage.getItem('favoriteRecipes') as string) || [],
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
