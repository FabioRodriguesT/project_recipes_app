import { profileIcon, searchIcon, miniLogo, doneIcon } from '../../assets/images';
import {
  Container,
  Title,
  Caption,
  ContainerImg,
  ContainerPage,
  ContainerTitle,
  SearchImg,
  ProfileImg,
} from './styles';

type HeaderProps = {
  title: string;
  icon: string
};

function Header({ title, icon }: HeaderProps) {
  return (
    <>
      <Container>
        <img src={ miniLogo } alt="Logo Icon" />
        <ContainerTitle>
          <Title>Receitas</Title>
          <Caption>App</Caption>
        </ContainerTitle>
        <ContainerImg>
          <SearchImg src={ searchIcon } alt="Search Icon" data-testid="search-top-btn" />
          <ProfileImg
            src={ profileIcon }
            alt="Profile Icon"
            data-testid="profile-top-btn"
          />
        </ContainerImg>
      </Container>
      <ContainerPage>
        <img src={ icon } alt="Done-Icon" />
        <h1>{title}</h1>
      </ContainerPage>
    </>
  );
}

export default Header;
