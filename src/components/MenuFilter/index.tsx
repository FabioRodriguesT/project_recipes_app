import { allFilter, foodFilter, drinkFilter } from '../../assets/images';
import { Container, SingleContainer } from './styles';

function MenuFilter() {
  return (
    <Container>
      <SingleContainer>
        <img src={ allFilter } alt="all-filter-icon" />
        <p>Todos</p>
      </SingleContainer>
      <SingleContainer>
        <img src={ foodFilter } alt="all-filter-icon" />
        <p>Pratos</p>
      </SingleContainer>
      <SingleContainer>
        <img src={ drinkFilter } alt="all-filter-icon" />
        <p>Bebidas</p>
      </SingleContainer>
    </Container>
  );
}

export default MenuFilter;
