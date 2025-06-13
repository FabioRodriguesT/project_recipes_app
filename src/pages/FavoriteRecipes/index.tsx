import { useEffect, useState } from "react";
import { FavoriteRecipeType, RecipeType, RecipeTypeKey } from "../../types";
import {
  allDoneRecipesIcon,
  blackHeartIcon2,
  dishesDoneRecipesIcon,
  drinksDoneRecipesIcon,
  shareIcon2,
} from "../../assets";

import {
  Container,
  MenuContainer,
  RecipesContainer,
  RecipeContainer,
  ImageContainer,
  InfoContainer,
  ButtonsContainer,
  CopiedContainer,
} from "./style";
import shareRecipe from "../../utils/shareRecipe";
import favoriteRecipe from "../../utils/favoriteRecipe";
import searchRecipes from "../../services/api";
import { useNavigate } from "react-router-dom";

function FavoriteRecipes() {
  const [recipes, setRecipes] = useState<FavoriteRecipeType[]>([]);
  const [isCopied, setIsCopied] = useState(false);
  const [selectedType, setSelectedType] = useState("all");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = () => {
      const response = JSON.parse(
        localStorage.getItem("favoriteRecipes") || "[]"
      );

      setRecipes(response);
    };

    fetchData();
  }, []);

  const navigatToDetails = (type: string | null, id: string | null) => {
    navigate(`/${type}s/${id}`);
  };

  const removeFavoriteRecipe = (id: string) => {
    const removed = recipes.filter((recipe) => recipe["id"] !== id);

    localStorage.setItem("favoriteRecipes", JSON.stringify(removed));
    setRecipes(removed);
  };

  return (
    <Container>
      <MenuContainer>
        <div
          onClick={() => setSelectedType("all")}
          data-testid="filter-by-all-btn"
        >
          <img src={allDoneRecipesIcon} alt="all-done-recipes-icon" />
          <p>Todos</p>
        </div>
        <div
          onClick={() => setSelectedType("meal")}
          data-testid="filter-by-meal-btn"
        >
          <img src={dishesDoneRecipesIcon} alt="dishes-done-recipes-icon" />
          <p>Pratos</p>
        </div>
        <div
          onClick={() => setSelectedType("drink")}
          data-testid="filter-by-drink-btn"
        >
          <img src={drinksDoneRecipesIcon} alt="drinks-done-recipes-icon" />
          <p>Bebidas</p>
        </div>
      </MenuContainer>
      {isCopied && (
        <CopiedContainer className="copied-container">
          <h2>Link copied!</h2>
        </CopiedContainer>
      )}
      <RecipesContainer>
        {recipes &&
          recipes
            .filter(
              ({ type }) => selectedType === "all" || type === selectedType
            )
            .map((recipe, index) => (
              <RecipeContainer key={`${recipe.id}-${index}`}>
                <ImageContainer>
                  {recipe["image"] && (
                    <img
                      src={recipe["image"]}
                      alt={`${recipe["name"]}-image`}
                      data-testid={`${index}-horizontal-image`}
                      onClick={() =>
                        navigatToDetails(recipe["type"], recipe["id"])
                      }
                    />
                  )}
                </ImageContainer>
                <InfoContainer>
                  <div className="info">
                    <h1
                      data-testid={`${index}-horizontal-name`}
                      onClick={() =>
                        navigatToDetails(recipe["type"], recipe["id"])
                      }
                    >
                      {recipe["name"]}
                    </h1>
                    {recipe["alcoholicOrNot"] ? (
                      <p data-testid={`${index}-horizontal-top-text`}>
                        {recipe["alcoholicOrNot"]}
                      </p>
                    ) : (
                      <p data-testid={`${index}-horizontal-top-text`}>
                        {recipe["nationality"]} - {recipe["category"]}
                      </p>
                    )}
                  </div>
                  <ButtonsContainer>
                    <div>
                      <img
                        src={shareIcon2}
                        alt="share-button"
                        data-testid={`${index}-horizontal-share-btn`}
                        onClick={() =>
                          shareRecipe(
                            isCopied,
                            setIsCopied,
                            recipe["type"],
                            recipe["id"]
                          )
                        }
                      />
                    </div>
                    <div>
                      {/* dependendo aki entra a lógica de coração vazio/cheio */}
                      <img
                        src={blackHeartIcon2}
                        alt="favorite-button"
                        className="black-heart"
                        data-testid={`${index}-horizontal-favorite-btn`}
                        onClick={() => {
                          recipe["id"] && removeFavoriteRecipe(recipe["id"]);
                        }}
                      />
                    </div>
                  </ButtonsContainer>
                </InfoContainer>
              </RecipeContainer>
            ))}
      </RecipesContainer>
    </Container>
  );
}

export default FavoriteRecipes;
