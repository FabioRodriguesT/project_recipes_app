import React, { MouseEventHandler, use, useContext, useEffect } from "react";
import { CardContainer, CardGroupContainer, Container } from "./styles";
import RecipeContext from "../../context/recipeContext";
import { RecipeType, RecipeTypeKey } from "../../types";
import searchRecipes from "../../services/api";
import Categories from "../../components/CategoriesBar";
import { useNavigate } from "react-router-dom";

function Recipes() {
  const navigate = useNavigate();

  const { data, setData } = useContext(RecipeContext);
  const path = window.location.pathname.split("/")[1] as RecipeTypeKey;
  const pathSingle = path.charAt(0).toUpperCase() + path.slice(1, -1);

  useEffect(() => {
    const fetchData = async () => {
      if (data && data.meals.length === 0) {
        const response = await searchRecipes(path, "name", "");
        if (Array.isArray(response)) {
          setData({ ...data, [path]: response });
        }
      }
    };

    fetchData();
  }, []);

  const handleScrollReset = (
    event:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.TouchEvent<HTMLDivElement>
  ) => {
    const target = event.currentTarget as HTMLDivElement;
    setTimeout(() => {
      target.scrollTo({ top: 0, behavior: "smooth" }); // ou scrollTop = 0
    }, 3000);
  };

  const handleRecipeDetails = (id: string | null) => {
    navigate(`/${path}/${id}`);
  };

  return (
    <Container>
      <Categories />
      <CardGroupContainer>
        {data &&
          data[path].slice(0, 12).map((item: RecipeType, index: number) => (
            <CardContainer
              onMouseLeave={handleScrollReset}
              onTouchEndCapture={handleScrollReset}
              data-testid={`${index}-recipe-card`}
              key={item[`id${pathSingle}`]}
              onClick={() => handleRecipeDetails(item[`id${pathSingle}`])}
            >
              {item[`str${pathSingle}Thumb`] && (
                <img
                  src={item[`str${pathSingle}Thumb`]!}
                  alt={path === "meals" ? "food-image" : "drink-image"}
                  data-testid={`${index}-card-img`}
                />
              )}
              <p data-testid={`${index}-card-name`}>
                {item[`str${pathSingle}`]}
              </p>
            </CardContainer>
          ))}
      </CardGroupContainer>
    </Container>
  );
}

export default Recipes;
