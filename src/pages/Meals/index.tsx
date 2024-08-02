import { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { doneIcon } from '../../assets/images';
import { Container, ContainerRecipes } from './styles';
import searchAPI from '../../services/api';
import { CategoryType, RecipeType } from '../../types';
import RecipeCard from '../../components/RecipeCard';
import recipeContext from '../../context/recipeContext';

function Meals() {
  // const { email } = JSON.parse(localStorage.getItem('user') || 'Email not Found');
  const { data, setData } = useContext(recipeContext);
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const loadingRecipes = async () => {
      try {
        const response = await searchAPI('', 'name', 'meals');
        setData({ drinks: [], meals: response.meals });
        const responseCategories = await searchAPI('list', 'category', 'meals');
        setCategories(responseCategories.meals);
      } catch (error) {
        console.error('Erro ao carregar as receitas:', error);
      }
    };
    loadingRecipes();
  }, [setData]);

  // o meals que vai mudar de acordo com o filtro.

  return (
    <Container>
      <Header
        title="Meals"
        icon={ doneIcon }
      />
      <ContainerRecipes>
        {data.meals && data.meals.slice(0, 12).map((item: RecipeType, index: number) => (
          <RecipeCard
            key={ item.idMeal }
            image={ item.strMealThumb }
            title={ item.strMeal }
            index={ index }
          />
        ))}
      </ContainerRecipes>
      <Footer />
    </Container>
  );
}

export default Meals;
