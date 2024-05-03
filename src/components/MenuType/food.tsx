import { Container, SingleContainer } from './styles';
import {
  allType,
  beefType,
  goatType,
  breakfastType,
  chickenType,
  dessertType,
} from '../../assets/images';

function MenuFoodType() {
  const typesList = [
    { type: 'Todos', img: allType },
    { type: 'Bovina', img: beefType },
    { type: 'Caprina', img: goatType },
    { type: 'Frango', img: chickenType },
    { type: 'Café da Manhã', img: breakfastType },
    { type: 'Sobremesa', img: dessertType },
  ];

  return (
    <Container>
      {typesList.map(({ type, img }) => (
        <SingleContainer key={ type }>
          <img src={ img } alt={ `${type}-filter-icon` } />
          <p>{type}</p>
        </SingleContainer>
      ))}
    </Container>
  );
}

export default MenuFoodType;
