import { Container, ContainerRadio, Button } from './styles';

function SearchFilter() {
  return (
    <Container>
      <input type="text" placeholder="Pesquisar" />
      <ContainerRadio>
        <div>
          <input type="radio" />
          <label htmlFor="Ingredientes">Ingredientes</label>
        </div>
        <div>
          <input type="radio" />
          <label htmlFor="Nome">Nome</label>
        </div>
        <div>
          <input type="radio" />
          <label htmlFor="Primeira Letra">Primeira Letra</label>
        </div>
      </ContainerRadio>
      <Button>Pesquisar</Button>
    </Container>
  );
}

export default SearchFilter;
