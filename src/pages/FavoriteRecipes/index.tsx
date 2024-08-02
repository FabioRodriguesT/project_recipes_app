import { profileIcon } from '../../assets/images';
import Header from '../../components/Header';

function FavoriteRecipes() {
  return (
    <div>
      <Header
        title="Favorite Recipes"
        icon={ profileIcon }
        searchVisible={ false }
      />
    </div>
  );
}

export default FavoriteRecipes;
