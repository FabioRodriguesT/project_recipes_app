import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import recipeContext from '../../context/recipeContext';
import { Container, ContainerRadio, Button } from './styles';
import searchAPI from '../../services/api';

function SearchFilter() {
  const location = useLocation(); // location é um objeto e location.pathname me retorna /meals ou /drinks.
  const { data, setData } = useContext(recipeContext);
  const [condition, setCondition] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const type = location.pathname.split('/')[1] === 'meals' ? 'meals' : 'drinks';
  const navigate = useNavigate();

  const handleChangeCondition = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setCondition(target.value);
  };

  const handleChangeSearchTerm = ({ target } : React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(target.value);
  };

  const handleSearch = () => {
    // se caso eu não digitar nada no search Term não fazer nada
    if (condition === 'letter' && searchTerm.length > 1) {
      window.alert('Your search must have only 1 (one) character');
    } else if (searchTerm !== '') {
      const fetchData = async () => {
        const fetch = await searchAPI(searchTerm, condition, type);
        setData(
          fetch,
        );

        if (fetch[type] === null) {
          window.alert("Sorry, we haven't found any recipes for these filters.");
          setData(data);
        } else if (fetch[type].length === 1) {
          // varia entre idMeal e idDrindex.tsxink
          const id = type === 'meals' ? 'idMeal' : 'idDrink';
          navigate(`${location.pathname}/${fetch[type][0][id]}`);
        }
      };

      fetchData();
    }
  };

  return (
    <Container>
      <input
        type="text"
        placeholder="Pesquisar"
        data-testid="search-input"
        onChange={ handleChangeSearchTerm }
      />
      <ContainerRadio>
        <div>
          <input
            id="ingredient"
            type="radio"
            name="search"
            data-testid="ingredient-search-radio"
            value="ingredient"
            onChange={ handleChangeCondition }
          />
          <label htmlFor="ingredient">Ingredientes</label>
        </div>
        <div>
          <input
            id="name"
            type="radio"
            name="search"
            data-testid="name-search-radio"
            value="name"
            onChange={ handleChangeCondition }
          />
          <label htmlFor="name">Nome</label>
        </div>
        <div>
          <input
            id="letter"
            type="radio"
            name="search"
            data-testid="first-letter-search-radio"
            value="letter"
            onChange={ handleChangeCondition }
          />
          <label htmlFor="letter">Primeira Letra</label>
        </div>
      </ContainerRadio>
      <Button data-testid="exec-search-btn" onClick={ handleSearch }>Pesquisar</Button>
    </Container>
  );
}

export default SearchFilter;
