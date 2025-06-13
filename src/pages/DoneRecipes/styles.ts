import styled from "styled-components";

export const MenuContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 12px auto 30px auto;
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
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 55px;
  align-items: center;

  justify-content: center;
  gap: 6px;
  width: 100%;
  margin: 0 auto;
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #740200;
  border: 1px solid #e90101;
  border-radius: 5px;
  height: 135px;
  width: 100%;
  max-width: 318px;
  margin: 0;

  @media (min-width: 360px) and (max-width: 645px) {
    max-width: 90%;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;

  img {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  h1 {
    align-items: center;
    color: #e90101;
    display: flex;
    font-family: "Suez One", serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    height: 40%;
    justify-content: center;
    line-height: 24px;
    margin: 0;
  }

  .category {
    align-items: center;
    color: rgba(231, 0, 1, 0.8);
    display: flex;
    font-family: "Epilogue";
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    height: 15%;
    justify-content: center;
    line-height: 12px;
    margin: 0;
    text-align: center;
  }

  .doneTime {
    align-items: center;
    color: #808080;
    display: flex;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    height: 15%;
    justify-content: center;
    line-height: 12px;
    margin: 0;
    text-align: center;
  }

  .tag {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 30%;
    justify-content: flex-end;
    margin: 0 10px 0 0;

    p {
      background: #e70001;
      border-radius: 40%;
      color: #ffffff;

      font-family: "Suez One";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      display: flex;
      align-items: center;

      padding: 2px 4px;
      margin: 4px;
    }
  }

  .share-btn {
    width: 30px;
    height: 30px;
    margin-left: 6px;
    color: white;
  }
`;
