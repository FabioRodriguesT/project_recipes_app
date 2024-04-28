import { Container } from './styles';

type RecipeCardProp = {
  image: string,
  title: string
};

function RecipeCard({ image, title }: RecipeCardProp) {
  return (
    <Container>
      <img src={ image } alt="food" />
      <p>{title}</p>
    </Container>
  );
}

export default RecipeCard;
