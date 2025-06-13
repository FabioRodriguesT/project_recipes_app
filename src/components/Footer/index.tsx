import { dishesIcon, drinksIcon } from "../../assets";
import { FooterContainer } from "./styles";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const handlePage = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <FooterContainer data-testid="footer">
      <img
        src={drinksIcon}
        alt="navegar até a página de bebida"
        data-testid="drinks-bottom-btn"
        onClick={() => handlePage("drinks")}
      />
      <img
        src={dishesIcon}
        alt="navegar até a página de comida"
        data-testid="meals-bottom-btn"
        onClick={() => handlePage("meals")}
      />
    </FooterContainer>
  );
}

export default Footer;
