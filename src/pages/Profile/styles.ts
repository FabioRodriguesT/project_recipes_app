import styled from "styled-components";

export const Container = styled.div`
  h1 {
    color: #e70001;
    font-family: "Suez One";
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 39px;
    text-decoration-line: underline;
    margin: 33px 0;
  }

  height: 100vh;
`;

export const LinksContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40%;

  div {
    align-items: center;
    border-bottom: 2px solid #740200;
    column-gap: 8px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 33%;
    width: 80%;
  }

  div:last-of-type {
    border-bottom: none;
  }

  img {
    height: 40px;
  }

  span {
    color: #e70001;
    font-family: "Suez One";
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 34px;
  }
`;

export const DoneRecipesContainer = styled.div``;

export const FavoritesContainer = styled.div``;

export const LogoutContainer = styled.div``;
