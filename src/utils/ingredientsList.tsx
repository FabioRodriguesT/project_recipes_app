import { RecipeType } from "../types";

function getIngredients(recipe: RecipeType) {
  return Object.entries(recipe)
    .filter(
      (item) =>
        item[0].startsWith("strIngredient") &&
        item[1] !== "" &&
        item[1] !== null
    )
    .map((item) => item[1]) as string[];
}

function getIngredientsWithMeasures(recipe: RecipeType) {
  return Object.entries(recipe)
    .filter(
      ([key, value]) =>
        key.startsWith("strIngredient") && value && value.trim() !== ""
    )
    .map(([key, ingredient]) => {
      const index = key.replace("strIngredient", "");

      const measure = recipe[`strMeasure${index}`];

      if (measure === null) {
        return `${ingredient}`;
      } else {
        return `${measure} ${ingredient}`;
      }
    });
}

export { getIngredients, getIngredientsWithMeasures };
