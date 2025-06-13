import styled from "styled-components";

export const Container = styled.div``;

export const MenuContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 16px auto 16px auto;
  max-width: 360px;
  width: 90%;

  p {
    color: #e70001;
    font-family: "Suez One";
    font-weight: 400;
    font-size: 20px;
    font-style: normal;
    line-height: 26px;
    margin: 0;
    width: 75px;
  }
`;

export const CopiedContainer = styled.div`
  display: flex;
  justify-content: center;

  h2 {
    align-items: center;
    color: #000000;
    display: flex;
    font-family: "Suez One";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 33px;
    height: 50px;
    margin: 0;
    position: relative;
    width: 148px;
    text-align: center;
  }
`;

export const RecipesContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  gap: 12px;
  width: 100%;
`;

export const RecipeContainer = styled.div`
  align-items: center;
  background: #740200;
  border: 1px solid #e90101;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  height: 135px;
  max-width: 318px;
  width: 100%;

  @media (min-width: 360px) and (max-width: 645px) {
    max-width: 90%;
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 50%;

  img {
    box-sizing: border-box;
    border: 1px solid #e90101;
    border-radius: 5px 0px 0px 5px;
    height: 100%;
    width: 100%;
  }
`;

export const InfoContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90%;
  width: 50%;

  h1 {
    color: #e90101;
    font-family: "Suez One";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-top: 6px;
  }

  p {
    align-items: center;
    color: rgba(231, 0, 1, 0.8);
    display: flex;
    font-family: "Epilogue";
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: 12px;
    justify-content: center;
    margin: 0;
  }

  div:first-of-type {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 70%;
    justify-content: flex-start;
  }
`;

export const ButtonsContainer = styled.div`
  align-items: center;
  column-gap: 12px;
  display: flex;
  height: 30%;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0;
  width: 90%;

  .black-heart {
    height: 25px;

    display: flex;
    align-items: first baseline;
  }
`;
