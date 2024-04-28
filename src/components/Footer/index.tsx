import { Container, FoodImg, DrinkImg } from './styles';
import { foodIcon, drinkIcon } from '../../assets/images';

function Footer() {
  return (
    <Container>
      <DrinkImg src={ drinkIcon } alt="Drink Icon" />
      <FoodImg src={ foodIcon } alt="Food Icon" />
    </Container>
  );
}

export default Footer;
