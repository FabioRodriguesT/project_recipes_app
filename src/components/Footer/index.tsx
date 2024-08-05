import { Link } from 'react-router-dom';
import { Container, FoodImg, DrinkImg } from './styles';
import { mealIcon, drinkIcon } from '../../assets/images';

function Footer() {
  return (
    <Container data-testid="footer">
      <Link to="/drinks">
        <DrinkImg src={ drinkIcon } alt="Drink Icon" data-testid="drinks-bottom-btn" />
      </Link>
      <Link to="/meals">
        <FoodImg src={ mealIcon } alt="Food Icon" data-testid="meals-bottom-btn" />
      </Link>
    </Container>
  );
}

export default Footer;
