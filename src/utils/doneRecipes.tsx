import { DoneRecipeFunctionType, DoneRecipeType } from "../types";

const updatedDoneRecipes: DoneRecipeFunctionType = (recipe) => {
  const path = window.location.pathname.split("/");

  const pathType = path[1].slice(0, -1);
  const pathTypeCapitalized =
    pathType.charAt(0).toUpperCase() + pathType.slice(1);
  const pathId = path[2];

  const doneRecipes = JSON.parse(
    localStorage.getItem("doneRecipes") || "[]"
  ) as DoneRecipeType[];

  if (doneRecipes.find(({ id }) => id === pathId)) {
    const removedDoneRecipes = doneRecipes.filter(({ id }) => id !== pathId);
    localStorage.setItem("doneRecipes", JSON.stringify(removedDoneRecipes));
  } else {
    const newDoneRecipes = [
      ...doneRecipes,
      {
        id: recipe[`id${pathTypeCapitalized}`],
        type: pathType,
        nationality: recipe["strArea"] || "",
        category: recipe["strCategory"] || "",
        alcoholicOrNot: recipe["strAlcoholic"] || "",
        name: recipe[`str${pathTypeCapitalized}`],
        image: recipe[`str${pathTypeCapitalized}Thumb`],
        doneDate: new Date().toLocaleDateString("pt-BR"),
        tags: recipe["strTags"] ? recipe["strTags"].split(",") : [],
      },
    ];

    localStorage.setItem("doneRecipes", JSON.stringify(newDoneRecipes));
  }
};

export default updatedDoneRecipes;
