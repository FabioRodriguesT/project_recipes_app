import { Container, LowerContainer } from "./styles";
import searchRecipes from "../../services/api";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { FilterType, FoodType } from "../../types";
import { useNavigate } from "react-router-dom";
import RecipeContext from "../../context/recipeContext";

function Search() {
  const { data, setData } = useContext(RecipeContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<FilterType>("name");
  const path = window.location.pathname.split("/")[1] as FoodType;
  const pathid = path == "meals" ? "idMeal" : "idDrink";

  const navigate = useNavigate();

  const handleSearchTerm = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(target.value);
  };

  const handleChangeFilter = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFilter(target.value as FilterType);
  };

  const handleSearch = async () => {
    if (filter === "first-letter" && searchTerm.length > 1) {
      window.alert("Your search must have only 1 (one) character");
    } else {
      // se tiver drinks e sem termo de busca, vai dar no data found. Resolver esse problema.
      const recipesFetch = await searchRecipes(path, filter, searchTerm);
      if (Array.isArray(recipesFetch)) {
        if (recipesFetch.length == 1) {
          navigate(`/${path}/${recipesFetch[0][pathid]}`);
        } else {
          // falta teste aki
          setData({ ...data, [path]: recipesFetch });
        }
      } else {
        // falta teste aki
        window.alert("Sorry, we haven't found any recipes for these filters.");
        // Se não for um array, você pode definir o estado como um array vazio
      }
    }
  };

  //Fazer consulta aos end-points Requisito 11
  return (
    <Container>
      <input
        type="text"
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={handleSearchTerm}
        data-testid="search-input"
      />
      <LowerContainer>
        <div>
          <label htmlFor="ingredient">
            <input
              type="radio"
              name="search-filter"
              id="ingredient"
              data-testid="ingredient-search-radio"
              value="ingredient"
              onChange={handleChangeFilter}
            />
            <p>Ingredient</p>
          </label>
          <label htmlFor="name">
            <input
              type="radio"
              name="search-filter"
              id="name"
              data-testid="name-search-radio"
              value="name"
              onChange={handleChangeFilter}
            />
            <p>Name</p>
          </label>
          <label htmlFor="firstLetter">
            <input
              type="radio"
              name="search-filter"
              id="firstLetter"
              data-testid="first-letter-search-radio"
              value="first-letter"
              onChange={handleChangeFilter}
            />
            <p>First Letter</p>
          </label>
        </div>
        <button data-testid="exec-search-btn" onClick={handleSearch}>
          Pesquisar
        </button>
      </LowerContainer>
    </Container>
  );
}

export default Search;
