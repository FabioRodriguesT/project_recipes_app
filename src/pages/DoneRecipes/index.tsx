import { profileIcon } from '../../assets/images';
import Header from '../../components/Header';

function DoneRecipes() {
  return (
    <div>
      <Header
        title="Done Recipes"
        icon={ profileIcon }
        searchVisible={ false }
      />
    </div>
  );
}

export default DoneRecipes;
