import FavType from './FavType';
import RecommendedType from './RecommendedType';

type TypeContext = {
  favoriteStorage: FavType[];
  setFavoriteStorage: React.Dispatch<React.SetStateAction<FavType[]>>;
  data: RecommendedType;
  setData: React.Dispatch<React.SetStateAction<RecommendedType>>;
};

export default TypeContext;
