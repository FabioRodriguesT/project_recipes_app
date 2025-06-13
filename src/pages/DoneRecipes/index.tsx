import { useEffect, useState } from "react";
import {
  allDoneRecipesIcon,
  dishesDoneRecipesIcon,
  drinksDoneRecipesIcon,
  shareIcon2,
} from "../../assets";

import {
  MenuContainer,
  RecipesContainer,
  RecipeContainer,
  ImageContainer,
  InfoContainer,
  CopiedContainer,
} from "./styles";

import { DoneRecipeType, RecipeType } from "../../types";
import Loading from "../Loading";

import shareRecipe from "../../utils/shareRecipe";
import { useNavigate } from "react-router-dom";

function DoneRecipes() {
  const [recipes, setRecipes] = useState<DoneRecipeType[]>();

  const [isCopied, setIsCopied] = useState(false);
  const [selectedType, setSelectedType] = useState("all");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = () => {
      const response = JSON.parse(localStorage.getItem("doneRecipes") || "[]");

      setRecipes(response);
    };

    fetchData();
  }, []);

  const navigatToDetails = (type: string | null, id: string | null) => {
    navigate(`/${type}s/${id}`);
  };

  return (
    <div>
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
              <RecipeContainer key={recipe["id"]}>
                <ImageContainer
                  onClick={() => navigatToDetails(recipe["type"], recipe["id"])}
                >
                  <img
                    src={recipe["image"]}
                    alt=""
                    data-testid={`${index}-horizontal-image`}
                  />
                </ImageContainer>
                <InfoContainer>
                  <h1
                    data-testid={`${index}-horizontal-name`}
                    onClick={() =>
                      navigatToDetails(recipe["type"], recipe["id"])
                    }
                  >
                    {recipe["name"]}
                  </h1>
                  {recipe["alcoholicOrNot"] ? (
                    <p
                      className="category"
                      data-testid={`${index}-horizontal-top-text`}
                    >
                      {recipe["alcoholicOrNot"]}
                    </p>
                  ) : (
                    <p
                      className="category"
                      data-testid={`${index}-horizontal-top-text`}
                    >
                      {recipe["nationality"] && (
                        <span>{recipe["nationality"]}</span>
                      )}
                      {recipe["nationality"] && recipe["category"] && (
                        <span> - </span>
                      )}
                      {recipe["category"] && <span>{recipe["category"]}</span>}
                    </p>
                  )}

                  <p
                    className="doneTime"
                    data-testid={`${index}-horizontal-done-date`}
                  >
                    Feito em: {recipe["doneDate"]}
                  </p>
                  <div className="tag">
                    {recipe["tags"].slice(0, 2).map((tag) => (
                      <p
                        key={tag}
                        data-testid={`${index}-${tag}-horizontal-tag`}
                      >
                        {tag}
                      </p>
                    ))}
                    <img
                      src={shareIcon2}
                      alt="Ícone de compartilhar"
                      data-testid={`${index}-horizontal-share-btn`}
                      onClick={() =>
                        shareRecipe(
                          isCopied,
                          setIsCopied,
                          recipe["type"],
                          recipe["id"]
                        )
                      }
                      className="share-btn"
                    />
                  </div>
                </InfoContainer>
              </RecipeContainer>
            ))}
      </RecipesContainer>
    </div>
  );
}

export default DoneRecipes;
