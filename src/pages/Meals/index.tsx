import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { doneIcon } from '../../assets/images';
import { Container } from './styles';
import RecipeFavoriteCards from '../../components/RecipeFavoriteCard';
import FoodImg from '../../assets/provisorio/Food-Image.png';

function Meals() {
  const { email } = JSON.parse(localStorage.getItem('user') || 'Email not Found');

  return (
    <Container>
      <Header title="Receitas Realizadas" icon={ doneIcon } />
      <RecipeFavoriteCards
        image={ FoodImg }
        title="Chelsea Buns"
        nationality="British"
        category="Dessert"
      />
      <RecipeFavoriteCards
        image={ FoodImg }
        title="Chelsea Buns"
        nationality="British"
        category="Dessert"
      />
      <Footer />
    </Container>
  );
}

export default Meals;
