export type FoodType = "meals" | "drinks";

export type RecipeTypeKey = "meals" | "drinks";
export type FilterType =
  | "name"
  | "ingredient"
  | "first-letter"
  | "categories"
  | "category"
  | "details";

export interface FavoriteRecipeFunctionType {
  (
    favoriteList: FavoriteRecipeType[],
    setFavoriteList: React.Dispatch<React.SetStateAction<FavoriteRecipeType[]>>,
    recipe: RecipeType
  ): void;
}

export interface DoneRecipeFunctionType {
  (recipe: RecipeType): void;
}

export interface SearchRecipes {
  (type: RecipeTypeKey, filter: FilterType, searchTerm: string): Promise<
    RecipeType[]
  >;
}

export type DoneRecipeType = {
  id: string | null;
  type: string | null;
  nationality: string | null;
  category: string | null;
  alcoholicOrNot: string | null;
  name: string | null;
  image: string;
  doneDate: string;
  tags: string[];
};

export type FavoriteRecipeType = {
  id: string | null;
  type: string | null;
  nationality: string | null;
  category: string | null;
  alcoholicOrNot: string | null;
  name: string | null;
  image: string | null;
};

export type InProgressRecipesType = {
  drinks: {
    [drinkId: string]: string[];
  };
  meals: {
    [mealId: string]: string[];
  };
};

export type ContextType = {
  data: DataType;
  setData: React.Dispatch<React.SetStateAction<DataType>>;
};

export type ContextTypeProps = {
  children: React.ReactNode;
};

export type DataType = {
  drinks: RecipeType[];
  meals: RecipeType[];
};

export type RecipeType = {
  [key: string]: string | null;
  idMeal: string | null;
  idDrink: string | null;
  strMeal: string | null;
  strDrink: string | null;
  strMealThumb: string;
  strDrinkThumb: string;
  dateModified: string | null;
  strArea: string | null;
  strCategory: string | null;
  strCreativeCommonsConfirmed: string | null;
  strDrinkAlternate: string | null;
  strImageSource: string | null;
  strInstructions: string | null;
  strImageAttribution: string | null;
  strSource: string | null;
  strTags: string | null;
  strYoutube: string | null;
  strAlcoholic: string | null;
  strGlass: string | null;
  strIBA: string | null;
  strVideo: string | null;
  strInstructionsDE: string | null;
  strInstructionsES: string | null;
  strInstructionsFR: string | null;
  strInstructionsIT: string | null;
  strInstructionsZH_HANS: string | null;
  strInstructionsZH_HANT: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strMeasure16: string | null;
  strMeasure17: string | null;
  strMeasure18: string | null;
  strMeasure19: string | null;
  strMeasure20: string | null;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strIngredient16: string | null;
  strIngredient17: string | null;
  strIngredient18: string | null;
  strIngredient19: string | null;
  strIngredient20: string | null;
};
