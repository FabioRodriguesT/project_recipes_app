import { RecipeType, RecommendedType } from '../types';

export const foodApi = (typeFood: string) => {
  const MEAL_URL = 'https://www.themealdb.com/api/json/v1/1';
  const DRINK_URL = 'https://www.thecocktaildb.com/api/json/v1/1';
  const BASE_URL = typeFood === 'meals' ? MEAL_URL : DRINK_URL;

  const RECOMMENDATION_MEAL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const RECOMMENDATION_DRINK = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const RECOMMENDATION_BASE = typeFood === 'meals'
    ? RECOMMENDATION_MEAL : RECOMMENDATION_DRINK;

  const recipeId = async (id?: string): Promise<RecipeType> => {
    const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
    const data = await response.json();
    if (BASE_URL === DRINK_URL) {
      return data.drinks[0];
    }

    return data.meals[0];
  };

  const recipesRecommended = async (): Promise<RecommendedType | null> => {
    const response = await fetch(RECOMMENDATION_BASE);
    const data = await response.json();
    return data;
  };

  return {
    recipeId,
    recipesRecommended,
  };
};
