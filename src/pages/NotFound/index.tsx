import { Link } from 'react-router-dom';
import { Container, LinksContainer } from './styles';

function NotFound() {
  return (
    <Container>
      <h1>404!</h1>
      <h2>Não foi possível encontrar essa página.</h2>
      <h2>Mas ainda está tudo INCRÍVEL!</h2>
      <LinksContainer>
        <Link to="/">
          <h3>Voltar à página inicial</h3>
        </Link>
      </LinksContainer>
    </Container>
  );
}

export default NotFound;
