import { useContext, useEffect, useState } from 'react';
import { drinkIcon } from '../../assets/images';
import Header from '../../components/Header';
import RecipeCard from '../../components/RecipeCard';
import { RecipeType, CategoryType } from '../../types';
import { Container, ContainerRecipes } from './styles';
import recipeContext from '../../context/recipeContext';
import searchAPI from '../../services/api';
import Footer from '../../components/Footer';

function Drinks() {
  const { data, setData } = useContext(recipeContext);

  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const loadingRecipes = async () => {
      try {
        const response = await searchAPI('', 'name', 'drinks');
        setData({ drinks: response.drinks, meals: [] });
        const responseCategories = await searchAPI('list', 'category', 'drinks');
        setCategories(responseCategories.drinks);
      } catch (error) {
        console.error('Erro ao carregar as receitas', error);
      }
    };

    loadingRecipes();
  }, [setData]);

  return (
    <Container>
      <Header
        title="Drinks"
        icon={ drinkIcon }
      />
      <ContainerRecipes>
        {data.drinks && data.drinks.slice(0, 12).map(
          (item: RecipeType, index: number) => (
            <RecipeCard
              key={ item.idDrink }
              image={ item.strDrinkThumb }
              title={ item.strDrink }
              index={ index }
            />
          ),
        )}
      </ContainerRecipes>
      <Footer />
    </Container>
  );
}

export default Drinks;
