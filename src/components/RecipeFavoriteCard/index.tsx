import {
  Container,
  ContainerInfo,
  ContainerCategory,
  ContainerButton,
  Button,
} from './styles';

import { sharedButton, favoriteButton } from '../../assets/images';

type RecipeFavoriteCardProps = {
  image: string,
  title: string,
  nationality: string,
  category: string,
};

function RecipeFavoriteCard({
  image,
  title,
  nationality,
  category,
}: RecipeFavoriteCardProps) {
  const handleShared = () => {
    console.log('jabuticaba');
  };

  return (
    <Container>
      <img src={ image } alt="food" />
      <ContainerInfo>
        <ContainerCategory>
          <h2>{title}</h2>
          <span>{nationality}</span>
          {' '}
          <span>-</span>
          {' '}
          <span>{category}</span>
        </ContainerCategory>
        <ContainerButton>
          <Button onClick={ handleShared }>
            <img src={ sharedButton } alt="shared-icon" />
          </Button>
          <Button onClick={ handleShared }>
            <img src={ favoriteButton } alt="shared-icon" />
          </Button>
        </ContainerButton>
      </ContainerInfo>
    </Container>
  );
}

export default RecipeFavoriteCard;
