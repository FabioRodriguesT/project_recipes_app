import searchRecipes from "../../services/api";
import { useContext, useEffect, useState } from "react";
import { Container, CategoryContainer } from "./styles";
import { FoodType, RecipeType } from "../../types";
import {
  allDrinksIcon,
  allMealsIcon,
  beefIcon,
  breakFastIcon,
  chickenIcon,
  cocktailIcon,
  dessertIcon,
  foodImageExample,
  goatIcon,
  ordinaryIcon,
  otherIcon,
  punchIcon,
  shakeIcon,
} from "../../assets";
import RecipeContext from "../../context/recipeContext";

function Categories() {
  const { data, setData } = useContext(RecipeContext);
  const [categories, setCategories] = useState<RecipeType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const path = window.location.pathname.split("/")[1] as FoodType;

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await searchRecipes(path, "categories", "list");

      setCategories(response.slice(0, 5));
    };

    fetchCategories();
  }, []);

  const CategoryImage = (category: string | null) => {
    switch (category) {
      case "Beef":
        return beefIcon;
      case "Breakfast":
        return breakFastIcon;
      case "Chicken":
        return chickenIcon;
      case "Dessert":
        return dessertIcon;
      case "Goat":
        return goatIcon;
      case "Cocktail":
        return cocktailIcon;
      case "Ordinary Drink":
        return ordinaryIcon;
      case "Punch / Party Drink":
        return punchIcon;
      case "Shake":
        return shakeIcon;
      case "Other / Unknown":
        return otherIcon;
      case "meals":
        return allMealsIcon;
      case "drinks":
        return allDrinksIcon;
    }
  };

  const handleCategoryFilter = async (category: string | null) => {
    let response = [];

    if (
      category === null ||
      category.length === 0 ||
      selectedCategory === category
    ) {
      response = await searchRecipes(path, "name", "");
      setSelectedCategory(null);
    } else {
      response = await searchRecipes(path, "category", category);
      setSelectedCategory(category);
    }

    setData({ ...data, [path]: response });
  };

  return (
    <Container>
      <CategoryContainer
        onClick={() => handleCategoryFilter("")}
        data-testid="All-category-filter"
      >
        <img src={CategoryImage(path)} alt="Imagem da Categoria" />
        <p>Todos</p>
      </CategoryContainer>

      {categories &&
        categories.map(({ strCategory }) => {
          const image = CategoryImage(strCategory);

          return (
            <CategoryContainer
              key={strCategory}
              onClick={() => handleCategoryFilter(strCategory)}
              data-testid={`${strCategory}-category-filter`}
            >
              <img src={image} alt="Imagem da Categoria" />
              <p>{strCategory}</p>
            </CategoryContainer>
          );
        })}
    </Container>
  );
}

export default Categories;
