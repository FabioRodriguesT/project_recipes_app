import { Container } from './styles';

type RecipeCardProp = {
  image: string,
  title: string,
  index: number,
};

function RecipeCard({ image, title, index }: RecipeCardProp) {
  return (
    <Container
      data-testid={ `${index}-recipe-card` }
    >
      <img
        src={ image }
        alt="food"
        data-testid={ `${index}-card-img` }
      />
      <p
        data-testid={ `${index}-card-name` }
      >
        {title}
      </p>
    </Container>
  );
}

export default RecipeCard;
