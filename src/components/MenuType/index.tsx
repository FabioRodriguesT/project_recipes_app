import { Container, SingleContainer } from './styles';
import {
  allType,
  beefType,
  goatType,
  breakfastType,
  chickenType,
  dessertType,
} from '../../assets/images';

function MenuType() {
  return (
    <Container>
      <SingleContainer>
        <img src={ allType } alt="all-filter-icon" />
        <p>Todos</p>
      </SingleContainer>
      <SingleContainer>
        <img src={ beefType } alt="beef-filter-icon" />
        <p>Bovina</p>
      </SingleContainer>
      <SingleContainer>
        <img src={ goatType } alt="goat-filter-icon" />
        <p>Caprina</p>
      </SingleContainer>
      <SingleContainer>
        <img src={ chickenType } alt="chicken-filter-icon" />
        <p>Frango</p>
      </SingleContainer>
      <SingleContainer>
        <img src={ breakfastType } alt="breakfast-filter-icon" />
        <p>Café da Manhã</p>
      </SingleContainer>
      <SingleContainer>
        <img src={ dessertType } alt="dessert-filter-icon" />
        <p>Sobremesa</p>
      </SingleContainer>
    </Container>
  );
}

export default MenuType;
