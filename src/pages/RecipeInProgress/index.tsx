import { FormEvent, useEffect, useState } from "react";
import {
  Container,
  TitleContainer,
  LowerTitleContainer,
  IngredientContainer,
  InstructionContainer,
  VideoContainer,
  StartButton,
} from "./styles";

import Loading from "../../pages/Loading";
import {
  blackHeartIcon,
  dishesCategoryIcon,
  drinkCategoryIcon,
  shareIcon,
  whiteHeartIcon,
} from "../../assets";
import {
  FavoriteRecipeType,
  InProgressRecipesType,
  RecipeType,
  RecipeTypeKey,
} from "../../types";
import { useNavigate } from "react-router-dom";
import searchRecipes from "../../services/api";
import { getIngredientsWithMeasures } from "../../utils/ingredientsList";
import shareRecipe from "../../utils/shareRecipe";
import favoriteRecipe from "../../utils/favoriteRecipe";
import updatedDoneRecipes from "../../utils/doneRecipes";

function RecipeInProgress() {
  const [recipe, setRecipe] = useState<RecipeType>({} as RecipeType);
  const [ingredientsWithMeasures, setIngredientsWithMeasures] = useState<
    string[]
  >([]);
  const [inProgressRecipes, setInProgressRecipes] =
    useState<InProgressRecipesType>({} as InProgressRecipesType);
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);
  const [isCopied, setIsCopied] = useState(false);
  const [favoriteRecipes, setFavoriteRecipes] = useState<FavoriteRecipeType[]>(
    []
  );

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const path = window.location.pathname.split("/")[1] as RecipeTypeKey; // meals or drinks
  const pathSingle = path.charAt(0).toUpperCase() + path.slice(1, -1); // Meal or Drink
  const pathId = window.location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await searchRecipes(path, "details", pathId);

        const responseFavoriteRecipes = JSON.parse(
          localStorage.getItem("favoriteRecipes") || "[]"
        );
        const responseInProgressRecipe = JSON.parse(
          localStorage.getItem("inProgressRecipes") || "{}"
        );

        const responseCheckedIngredientes =
          responseInProgressRecipe[path] &&
          responseInProgressRecipe[path][pathId]
            ? responseInProgressRecipe[path][pathId]
            : [];

        setRecipe(response[0]);
        setFavoriteRecipes(responseFavoriteRecipes);
        setInProgressRecipes(responseInProgressRecipe);
        setCheckedIngredients(responseCheckedIngredientes);
        setIngredientsWithMeasures(getIngredientsWithMeasures(response[0]));

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const handleFinishButton = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    updatedDoneRecipes(recipe);

    navigate("/done-recipes");
  };

  const handleCheckboxChange = (ingredient: string) => {
    if (checkedIngredients.find((item) => item === ingredient)) {
      const removedIngredients = checkedIngredients.filter(
        (item) => item !== ingredient
      );

      const updateInProgressRecipes = {
        ...inProgressRecipes,
        [path]: {
          ...inProgressRecipes[path],
          [pathId]: removedIngredients,
        },
      };

      localStorage.setItem(
        "inProgressRecipes",
        JSON.stringify(updateInProgressRecipes)
      );

      setCheckedIngredients(removedIngredients);
      setInProgressRecipes(updateInProgressRecipes);
    } else {
      const updateInProgressRecipes = {
        ...inProgressRecipes,
        [path]: {
          ...inProgressRecipes[path],
          [pathId]: [...checkedIngredients, ingredient],
        },
      };

      localStorage.setItem(
        "inProgressRecipes",
        JSON.stringify(updateInProgressRecipes)
      );

      setCheckedIngredients([...checkedIngredients, ingredient]);
      setInProgressRecipes(updateInProgressRecipes);
    }
  };

  return (
    <Container>
      <TitleContainer>
        <img
          src={recipe["strMealThumb"] || recipe["strDrinkThumb"]}
          alt="Imagem da receita"
          data-testid="recipe-photo"
          className="background-image"
        />
        <h1 data-testid="recipe-title">{recipe[`str${pathSingle}`]}</h1>
        <LowerTitleContainer>
          <div>
            <img
              src={
                pathSingle === "Drink" ? drinkCategoryIcon : dishesCategoryIcon
              }
              alt="Ícone da categoria"
            />
            <p data-testid="recipe-category">
              {pathSingle === "Drink"
                ? recipe.strAlcoholic
                : recipe.strCategory}
            </p>
          </div>
          <div>
            <img
              src={shareIcon}
              alt="Ícone de compartilhar"
              data-testid="share-btn"
              onClick={() => shareRecipe(isCopied, setIsCopied)}
            />
            <img
              src={
                favoriteRecipes.find(({ id }) => id === pathId)
                  ? blackHeartIcon
                  : whiteHeartIcon
              }
              alt="Ícone de gostei"
              data-testid="favorite-btn"
              onClick={() =>
                favoriteRecipe(favoriteRecipes, setFavoriteRecipes, recipe)
              }
            />
          </div>
        </LowerTitleContainer>
      </TitleContainer>

      <IngredientContainer data-testid="instructions">
        {isCopied && (
          <div className="copied-container">
            <h2>Link copied!</h2>
          </div>
        )}
        <h2>Ingredientes</h2>
        <ul>
          {ingredientsWithMeasures.map((ingredient, index) => (
            <label
              htmlFor={ingredient}
              data-testid={`${index}-ingredient-step`}
              key={ingredient}
              onChange={() => handleCheckboxChange(ingredient)}
              className={
                checkedIngredients.find((item) => item === ingredient)
                  ? "checked"
                  : "unchecked"
              }
            >
              <input
                id={ingredient}
                type="checkbox"
                key={ingredient}
                checked={
                  checkedIngredients.find((item) => item === ingredient)
                    ? true
                    : false
                }
                onChange={() => handleCheckboxChange(ingredient)}
                data-testid={`${index}-ingredient-step-input`}
              />
              <p>{ingredient}</p>
            </label>
          ))}
        </ul>
      </IngredientContainer>
      <InstructionContainer>
        <h2>Instruções</h2>
        <p data-testid="instructions">{recipe.strInstructions}</p>
      </InstructionContainer>
      {recipe.strYoutube && recipe.strMeal && (
        <VideoContainer>
          <h2>Vídeo</h2>
          <iframe
            src={recipe.strYoutube.replace("watch?v=", "embed/")}
            title={recipe.strMeal}
            data-testid="video"
          ></iframe>
        </VideoContainer>
      )}

      <StartButton
        data-testid="finish-recipe-btn"
        onClick={handleFinishButton}
        className={
          ingredientsWithMeasures.length !== 0 &&
          checkedIngredients.length === ingredientsWithMeasures.length
            ? "enabled"
            : "disabled"
        }
        disabled={
          checkedIngredients.length === ingredientsWithMeasures.length
            ? false
            : true
        }
      >
        Finalizar Receita
      </StartButton>
    </Container>
  );
}

export default RecipeInProgress;
