import { useEffect, useState } from "react";
import RecipeContext from "./recipeContext";
import { DataType, ContextTypeProps, RecipeTypeKey, FoodType } from "../types";
import { data } from "react-router-dom";
import searchRecipes from "../services/api";

function RecipeProvider({ children }: ContextTypeProps) {
  const [data, setData] = useState<DataType>({
    drinks: [],
    meals: [],
  });

  const values = {
    data,
    setData,
  };

  return (
    <RecipeContext.Provider value={values}>{children}</RecipeContext.Provider>
  );
}

export default RecipeProvider;
