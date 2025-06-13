import { useEffect, useState } from "react";
import { doneRecipesIcon, favoritesIcon, logoutIcon } from "../../assets";
import {
  Container,
  LinksContainer,
  DoneRecipesContainer,
  FavoritesContainer,
  LogoutContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [email, setEmail] = useState<string>();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = () => {
      const response = JSON.parse(
        localStorage.getItem("user") || '"E-mail não encontrado"'
      );

      setEmail(response["email"]);
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("doneRecipes");
    localStorage.removeItem("favoriteRecipes");
    localStorage.removeItem("inProgressRecipes");

    navigate("/ ");
  };

  return (
    <Container>
      <h1 data-testid="profile-email">{email}</h1>
      <LinksContainer>
        <DoneRecipesContainer
          data-testid="profile-done-btn"
          onClick={() => navigate("/done-recipes")}
        >
          <img src={doneRecipesIcon} alt="done-recipes-icon-page" />
          <span>Done Recipes</span>
        </DoneRecipesContainer>

        <FavoritesContainer
          data-testid="profile-favorite-btn"
          onClick={() => navigate("/favorite-recipes")}
        >
          <img src={favoritesIcon} alt="favorites-icon-page" />
          <span>Favorite Recipes</span>
        </FavoritesContainer>

        <LogoutContainer
          data-testid="profile-logout-btn"
          onClick={() => handleLogout()}
        >
          <img src={logoutIcon} alt="logout-icon" />
          <span>Logout</span>
        </LogoutContainer>
      </LinksContainer>
    </Container>
  );
}

export default Profile;
