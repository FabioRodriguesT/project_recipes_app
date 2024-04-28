import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { doneIcon } from '../../assets/images';
import MenuFilter from '../../components/MenuFilter';
import MenuType from '../../components/MenuType';
import { Container } from './styles';
import RecipeCard from '../../components/RecipeCard';
import foodImage from '../../assets/provisorio/Food-Image.png';
import RecipeInfoCard from '../../components/RecipeInfoCard';

function Meals() {
  const { email } = JSON.parse(localStorage.getItem('user') || 'Email not Found');

  return (
    <Container>
      <Header title="Receitas Realizadas" icon={ doneIcon } />
      <MenuFilter />
      <MenuType />
      <RecipeCard image={ foodImage } title="Chelsea Buns" />
      <RecipeInfoCard
        image={ foodImage }
        title="Chelsea Buns"
        nationality="British"
        category="Dessert"
        done="20/10/2021"
        infos={ ['bun', 'baking'] }
      />
      <Footer />
    </Container>
  );
}

export default Meals;
