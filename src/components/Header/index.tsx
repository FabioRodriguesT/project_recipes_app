import { HigherContainer, LowerContainer } from "./styles";
import {
  doneRecipesIcon,
  drinksIcon,
  favoritesIcon,
  headerLogo,
  mealsIcon,
  profileIcon,
  profileIcon2,
  searchIcon,
} from "../../assets/index";

import { useLocation, useNavigate } from "react-router-dom";
import Search from "../SearchBar";
import { useEffect, useState } from "react";
import { setUISelectionRaw } from "@testing-library/user-event/dist/types/document/UI";

type LocationType = {
  imgIcon: string;
  imgAlt: string;
  title: string;
  isVisible: boolean;
};

function Header() {
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [locationInfo, setLocationInfo] = useState<LocationType>({
    imgIcon: mealsIcon,
    imgAlt: "alt-example",
    title: "title-example",
    isVisible: false,
  });

  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    const findLocation = (location: string) => {
      switch (location) {
        case "/meals": {
          setLocationInfo({
            imgIcon: mealsIcon,
            imgAlt: "Meals-icon",
            title: "Meals",
            isVisible: true,
          });

          break;
        }

        case "/drinks": {
          setLocationInfo({
            imgIcon: drinksIcon,
            imgAlt: "Drinks-icon",
            title: "Drinks",
            isVisible: true,
          });

          break;
        }

        case "/profile": {
          setLocationInfo({
            imgIcon: profileIcon2,
            imgAlt: "ProfilePage-icon",
            title: "Perfil",
            isVisible: false,
          });

          break;
        }

        case "/done-recipes": {
          setLocationInfo({
            imgIcon: doneRecipesIcon,
            imgAlt: "DoneRecipes-icon",
            title: "Done Recipes",
            isVisible: false,
          });

          break;
        }

        case "/favorite-recipes": {
          setLocationInfo({
            imgIcon: favoritesIcon,
            imgAlt: "FavoriteRecipes-icon",
            title: "Favorite Recipes",
            isVisible: false,
          });
          break;
        }
      }
    };

    findLocation(pathname);
  }, [pathname]);

  const handleProfileButton = () => {
    navigate("/profile");
  };

  const handleSearchButton = () => {
    setSearchBarVisible(!searchBarVisible);
  };

  return (
    <div>
      <HigherContainer>
        <img src={headerLogo} alt="Logo-icon" />
        <div>
          <p>Recipes</p>
          <p>App</p>
        </div>
        {locationInfo.isVisible && (
          <img
            src={searchIcon}
            alt="Search-icon"
            data-testid="search-top-btn"
            onClick={handleSearchButton}
          />
        )}
        <img
          src={profileIcon}
          alt="Profile-icon"
          data-testid="profile-top-btn"
          onClick={handleProfileButton}
        />
      </HigherContainer>
      <LowerContainer>
        <div
          className={
            locationInfo.imgAlt === "DoneRecipes-icon" ||
            locationInfo.imgAlt === "FavoriteRecipes-icon" ||
            locationInfo.imgAlt === "ProfilePage-icon"
              ? "remove-circle"
              : undefined
          }
        >
          <img src={locationInfo.imgIcon} alt={locationInfo.imgAlt} />
        </div>
        <h1 data-testid="page-title">{locationInfo.title}</h1>
      </LowerContainer>
      {searchBarVisible && <Search />}
    </div>
  );
}

export default Header;
