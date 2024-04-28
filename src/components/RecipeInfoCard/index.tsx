import {
  Container,
  ContainerInfo,
  ContainerCategory,
  ContainerTag,
  ContainerButton,
  Button,
} from './styles';

import { sharedButton } from '../../assets/images';

type RecipeInfoCardProps = {
  image: string,
  title: string,
  nationality: string,
  category: string,
  done: string,
  infos: string[],
};

function RecipeInfoCard({
  image,
  title,
  nationality,
  category,
  done,
  infos,
}: RecipeInfoCardProps) {
  const handleShared = () => {
    console.log(infos);
  };

  return (
    <Container>
      <img src={ image } alt="food" />
      <ContainerInfo>
        <h2>{title}</h2>
        <ContainerCategory>
          <span>{nationality}</span>
          {' '}
          <span>-</span>
          {' '}
          <span>{category}</span>
        </ContainerCategory>
        <p>
          Feito em:
          {' '}
          {done}
        </p>
        <ContainerButton>
          <ContainerTag>
            {infos && infos.map((info) => (
              <span key={ info }>{info}</span>
            ))}
          </ContainerTag>
          <Button onClick={ handleShared }>
            <img src={ sharedButton } alt="shared-icon" />
          </Button>
        </ContainerButton>
      </ContainerInfo>
    </Container>
  );
}

export default RecipeInfoCard;
