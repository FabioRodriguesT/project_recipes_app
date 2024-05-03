/* eslint-disable react/jsx-max-depth */
import {
  Container,
  ContainerButtons,
  ContainerImage,
  ContainerIngredients,
  ContainerInstructions,
  ContainerVideo,
  ContainerRecommends,
  ContainerRecipe,
  Button,
} from './styles';
import FoodImage from '../../assets/provisorio/Food-Banner.svg';
import { dessetIcon, favoriteButton, sharedButton } from '../../assets/images';
import RecipeCard from '../../components/RecipeCard';
import DrinkImage from '../../assets/provisorio/Drink-Image.svg';

function InProgress() {
  return (
    <Container>
      <ContainerImage
        style={ {
          backgroundImage: `url(${FoodImage})`,
        } }
      >
        <h1>Chelsea Buns</h1>
        <ContainerButtons>
          <div>
            <img src={ dessetIcon } alt="Dessert Icon" />
            <span>Dessert</span>
          </div>
          <div>
            <button>
              <img src={ sharedButton } alt="Shared" />
            </button>
            <button>
              <img src={ favoriteButton } alt="favorite" />
            </button>
          </div>
        </ContainerButtons>
      </ContainerImage>
      <ContainerIngredients>
        <h1>Ingredientes</h1>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
        </ul>
      </ContainerIngredients>
      <ContainerInstructions>
        <h1>Instruções</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Etiam varius odio eros, a sodales risus consectetur sit amet.
          Integer condimentum elit sit amet consequat vulputate.
          Integer pretium iaculis finibus.
          Phasellus laoreet nisi vel massa iaculis tristique.
          Aenean eu iaculis erat, ac volutpat ante.
          In eu vehicula lacus. Morbi dictum porttitor eros,
          a fermentum augue blandit non.
          Phasellus non pretium sem.

          In porttitor risus consectetur tellus interdum porta.
          Cras mattis nisi id purus sagittis, eget fermentum dolor rhoncus.
          Nulla at suscipit ipsum. Quisque est tortor, vulputate a lorem ac,
          fringilla dapibus quam. Proin laoreet lobortis elit in pharetra.
          Fusce convallis odio malesuada, efficitur diam nec, fringilla sapien.
          Donec porttitor finibus purus, a interdum massa tempor in.
          Ut ut varius sapien. Donec laoreet lacinia metus, ut sodales lorem consequat in.
          In tempor accumsan arcu ut facilisis.
        </p>
      </ContainerInstructions>
      <ContainerVideo>
        <h1>Video</h1>
        <iframe src="https://www.youtube.com/embed/vqs0941fn_c?si=W-BeLHJA-W0JkgBo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen />
      </ContainerVideo>
      <ContainerRecommends>
        <h1>Recomendados</h1>
        <ContainerRecipe>
          <RecipeCard image={ DrinkImage } title="Ice Tea" />
          <RecipeCard image={ DrinkImage } title="Ice Tea" />
        </ContainerRecipe>
      </ContainerRecommends>
      <Button>Começar Receita</Button>
    </Container>
  );
}

export default InProgress;
