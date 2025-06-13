import {
  DataType,
  FilterType,
  RecipeType,
  RecipeTypeKey,
  SearchRecipes,
} from "../types";

const searchRecipes: SearchRecipes = async (type, filter, searchTerm) => {
  const typeURL = findType(type);
  const filterURL = findFilter(filter);

  const URL = `https://www.${typeURL}/api/json/v1/1/${filterURL}=${searchTerm}`;

  try {
    const response = await fetch(URL);
    const responseJson: DataType = await response.json();
    if (typeof responseJson[type] === "string") {
      return [];
    }
    return responseJson[type];
  } catch (error) {
    console.log(error);
    return [];
  }
};

const findType = (type: RecipeTypeKey) => {
  if (type == "meals") {
    return "themealdb.com";
  } else if (type == "drinks") {
    return "thecocktaildb.com";
  }
};

const findFilter = (filter: FilterType) => {
  switch (filter) {
    case "name":
      return "search.php?s";
    case "ingredient":
      return "filter.php?i";
    case "first-letter":
      return "search.php?f";
    case "categories":
      return "list.php?c";
    case "category":
      return "filter.php?c";
    case "details":
      return "lookup.php?i";
  }
};

export default searchRecipes;
