import { FavoriteRecipeFunctionType } from "../types";

const favoriteRecipe: FavoriteRecipeFunctionType = (
  favoriteList,
  setFavoriteList,
  recipe
) => {
  const path = window.location.pathname.split("/");

  const pathType = path[1].slice(0, -1);
  const pathTypeCapitalized =
    pathType.charAt(0).toUpperCase() + pathType.slice(1);
  const pathId = path[2];

  if (
    path[1] === "favorite-recipes" ||
    favoriteList.find(({ id }) => id === pathId)
  ) {
    const recipeId =
      recipe["idDrink"] === undefined || recipe["idDrink"] === null
        ? recipe["idMeal"]
        : recipe["idDrink"];

    const removedFavoriteRecipes = favoriteList.filter(
      ({ id }) => id !== recipeId
    );

    localStorage.setItem(
      "favoriteRecipes",
      JSON.stringify(removedFavoriteRecipes)
    );
    setFavoriteList(removedFavoriteRecipes);
  } else {
    // Obs: nationality, category e alcoholicOrNot podem ter textos vazios.
    const newFavoriteRecipes = [
      ...favoriteList,
      {
        id: recipe[`id${pathTypeCapitalized}`],
        type: pathType,
        nationality: recipe["strArea"] || "",
        category: recipe["strCategory"] || "",
        alcoholicOrNot: recipe["strAlcoholic"] || "",
        name: recipe[`str${pathTypeCapitalized}`],
        image: recipe[`str${pathTypeCapitalized}Thumb`],
      },
    ];

    localStorage.setItem("favoriteRecipes", JSON.stringify(newFavoriteRecipes));
    setFavoriteList(newFavoriteRecipes);
  }
};

export default favoriteRecipe;
