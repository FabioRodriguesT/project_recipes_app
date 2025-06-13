import { FormEvent, useEffect, useState } from "react";
import searchRecipes from "../../services/api";
import {
  Container,
  TitleContainer,
  LowerTitleContainer,
  IngredientContainer,
  InstructionContainer,
  VideoContainer,
  RecommendedContainer,
  CardContainer,
  CardGroupContainer,
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
import { getIngredientsWithMeasures } from "../../utils/ingredientsList";

import shareRecipe from "../../utils/shareRecipe";
import favoriteRecipe from "../../utils/favoriteRecipe";

function RecipeDetails() {
  const [recommended, setRecommended] = useState<RecipeType[]>([]);
  const [isCopied, setIsCopied] = useState(false);
  const [recipe, setRecipe] = useState<RecipeType>({} as RecipeType);
  const [favoriteRecipes, setFavoriteRecipes] = useState<FavoriteRecipeType[]>(
    []
  );
  const [inProgressRecipes, setInProgressRecipes] =
    useState<InProgressRecipesType>({
      drinks: {},
      meals: {},
    });
  const [ingredientsWithMeasures, setIngredientsWithMeasures] = useState<
    string[]
  >([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const path = window.location.pathname.split("/")[1] as RecipeTypeKey;
  const pathSingle = path.charAt(0).toUpperCase() + path.slice(1, -1);
  const pathSingleInverse = pathSingle === "Meal" ? "Drink" : "Meal";
  const pathId = window.location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await searchRecipes(path, "details", pathId);
        const responseRecommended = await searchRecipes(
          path === "meals" ? "drinks" : "meals",
          "name",
          ""
        );
        const responseInProgressRecipes = JSON.parse(
          localStorage.getItem("inProgressRecipes") || "{}"
        );
        const responseFavoriteRecipes = JSON.parse(
          localStorage.getItem("favoriteRecipes") || "[]"
        );

        setRecipe(response[0]);
        setRecommended(responseRecommended.slice(0, 6));
        setInProgressRecipes(responseInProgressRecipes);
        setIngredientsWithMeasures(getIngredientsWithMeasures(response[0]));
        setFavoriteRecipes(responseFavoriteRecipes);
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

  const handleRecipeDetails = (id: string | null) => {
    const url = path === "meals" ? "drinks" : "meals";
    navigate(`/${url}/${id}`);
  };

  const handleStartButton = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const updateInProgressRecipes = {
      ...inProgressRecipes,
      [path]: {
        ...inProgressRecipes[path],
        [pathId]: [],
      },
    };

    setInProgressRecipes(updateInProgressRecipes);

    navigate("in-progress");
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
              src={path === "meals" ? dishesCategoryIcon : drinkCategoryIcon}
              alt="Ícone da categoria"
            />
            <p data-testid="recipe-category">
              {path === "meals" ? recipe.strCategory : recipe.strAlcoholic}
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

      <IngredientContainer>
        {isCopied && (
          <div className="copied-container">
            <h2>Link copied!</h2>
          </div>
        )}
        <h2>Ingredientes</h2>
        <ul>
          {ingredientsWithMeasures.map((ingredient, index) => (
            <li
              data-testid={`${index}-ingredient-name-and-measure`}
              key={ingredient}
            >
              {ingredient}
            </li>
          ))}
        </ul>
      </IngredientContainer>
      <InstructionContainer>
        <h2>Instruções</h2>
        <p data-testid="instructions">{recipe.strInstructions}</p>
      </InstructionContainer>
      {recipe.strYoutube && (
        <VideoContainer>
          <h2>Vídeo</h2>
          <iframe
            src={recipe.strYoutube.replace("watch?v=", "embed/")}
            title={"Video"}
            data-testid="video"
          ></iframe>
        </VideoContainer>
      )}
      {Array.isArray(recommended) && recommended.length > 0 && (
        <RecommendedContainer>
          <h2>Recomendados</h2>
          <CardGroupContainer>
            {recommended.map((item, index) => (
              <CardContainer
                data-testid={`${index}-recommendation-card`}
                onClick={() =>
                  handleRecipeDetails(item[`id${pathSingleInverse}`])
                }
                key={index}
              >
                {item[`str${pathSingleInverse}Thumb`] && (
                  <img
                    src={item[`str${pathSingleInverse}Thumb`]}
                    alt="food-image"
                    data-testid={`${index}-card-img`}
                  />
                )}
                <p data-testid={`${index}-recommendation-title`}>
                  {item[`str${pathSingleInverse}`]}
                </p>
              </CardContainer>
            ))}
          </CardGroupContainer>
        </RecommendedContainer>
      )}
      <StartButton data-testid="start-recipe-btn" onClick={handleStartButton}>
        {inProgressRecipes[path] && pathId in inProgressRecipes[path]
          ? "Continue Recipe"
          : "Start Recipe"}
      </StartButton>
    </Container>
  );
}

export default RecipeDetails;
