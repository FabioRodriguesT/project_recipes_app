import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { profileIcon, searchIcon, miniLogo } from '../../assets/images';
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
import SearchFilter from '../SearchBar';

export type HeaderProps = {
  title: string;
  icon: string;
  searchVisible?: boolean;
};

function Header({ title, icon, searchVisible = true }: HeaderProps) {
  const [showSearchFilter, setShowSearchFilter] = useState(false);
  const navigate = useNavigate();

  const handleNavigateProfile = () => {
    navigate('/profile');
  };

  const handleShowSearchFilter = () => {
    setShowSearchFilter(!showSearchFilter);
  };

  return (
    <>
      <Container>
        <img src={ miniLogo } alt="Logo Icon" />
        <ContainerTitle>
          <Title>Receitas</Title>
          <Caption>App</Caption>
        </ContainerTitle>
        <ContainerImg>
          {searchVisible && (<SearchImg
            src={ searchIcon }
            alt="Search Icon"
            data-testid="search-top-btn"
            onClick={ handleShowSearchFilter }
          />)}
          <ProfileImg
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="Profile Icon"
            onClick={ handleNavigateProfile }
          />
        </ContainerImg>
      </Container>
      <ContainerPage>
        <img src={ icon } alt="Done-Icon" />
        <h1 data-testid="page-title">{title}</h1>
      </ContainerPage>
      {showSearchFilter && <SearchFilter />}
    </>
  );
}

export default Header;
