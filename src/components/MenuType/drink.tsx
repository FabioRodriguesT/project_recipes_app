import { Container, SingleContainer } from './styles';
import {
  allDrinkType,
  ordinaryDrinkType,
  cocktailDrinkType,
  shakeDrinkType,
  otherDrinkType,
  cocoaDrinkType,
} from '../../assets/images';

function MenuDrinkType() {
  const typesList = [
    { type: 'Todos', img: allDrinkType },
    { type: 'Ordináry Drink', img: ordinaryDrinkType },
    { type: 'Cocktail', img: cocktailDrinkType },
    { type: 'Shake', img: shakeDrinkType },
    { type: 'Other/Unknown', img: otherDrinkType },
    { type: 'Cocoa', img: cocoaDrinkType },
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

export default MenuDrinkType;
