import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 60px;
  max-width: 100%;

  h2 {
    align-items: center;
    color: #000000;
    display: flex;
    font-family: "Suez One";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 33px;
    left: 30px;
    height: 50px;
    margin: 0;
    position: relative;
    width: 148px;
    text-align: center;
  }
`;

export const TitleContainer = styled.div`
  align-items: center;
  border-radius: 0px;
  display: flex;
  flex-direction: column;
  height: 162px;
  margin: 0;
  text-align: center;
  width: 100%;

  .background-image {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 162px;
    object-fit: cover;
    position: absolute;
    max-width: 720px;
    width: 100%;
    z-index: 0;
  }

  h1 {
    align-items: center;
    color: #ffffff;
    display: flex;
    font-family: "Suez One";
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 33px;
    justify-content: center;
    margin: 0 auto;
    min-height: 162px;
    width: 100%;
    text-align: center;
    z-index: 1;

    text-shadow: -1px -1px 0 #740200, 1px -1px 0 #740200, -1px 1px 0 #740200,
      1px 1px 0 #740200, 0px -1px 0 #740200, 0px 1px 0 #740200,
      -1px 0px 0 #740200, 1px 0px 0 #740200;
  }
`;

export const LowerTitleContainer = styled.div`
  bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  width: 100%;
  z-index: 2;

  div:first-child {
    margin-left: 6px;
  }

  div:last-child {
    margin-right: 6px;

    img:first-child {
      margin-right: 15px;
    }
  }

  div {
    align-items: center;
    display: flex;
    flex-direction: row;
    margin-bottom: 6px;

    img {
      margin-right: 6px;
    }

    p {
      color: white;
      font-family: "Suez One";
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      margin: 0;

      text-shadow: -1px -1px 0 #740200, 1px -1px 0 #740200, -1px 1px 0 #740200,
        1px 1px 0 #740200, 0px -1px 0 #740200, 0px 1px 0 #740200,
        -1px 0px 0 #740200, 1px 0px 0 #740200;
    }
  }
`;

export const IngredientContainer = styled.div`
  text-align: start;

  ul {
    border: 1px solid #740200;
    border-radius: 5px;
    box-sizing: border-box;
    height: auto;
    margin: 0 auto;
    padding: 10px 0px 10px 30px;
    width: 90%;
  }

  li {
    color: #1a1b1c;
    font-family: "Epilogue";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    margin-bottom: 12px;
    width: 100%;
  }

  li:last-child {
    margin-bottom: 0;
  }

  .copied-container {
    display: flex;
    justify-content: center;

    h2 {
      width: auto;
      left: 0;
    }
  }
`;

export const InstructionContainer = styled.div`
  h1 {
    align-items: center;
    color: #000000;
    display: flex;
    font-family: "Suez One";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 33px;
    left: 30px;
    height: 50px;
    margin: 0;
    position: relative;
    width: 148px;
    text-align: center;
  }

  p {
    border: 1px solid #740200;
    border-radius: 5px;
    box-sizing: border-box;
    color: #1a1b1c;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    height: auto;
    margin: 0 auto;
    padding: 15px 20px;
    text-align: justify;
    width: 90%;
  }
`;

export const VideoContainer = styled.div`
  iframe {
    border: 1px solid #740200;
    border-radius: 5px;
    box-sizing: border-box;
    height: 209px;
    width: 90%;
  }
`;

export const RecommendedContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const CardGroupContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  max-width: 360px;
  margin: 0 auto;
  scroll-behavior: smooth;
  overflow-x: auto;

  button {
    background: none;
    border: none;
    flex: 0 0 0;
    height: 100%;
    width: 8%;

    img {
      width: 18px;
    }
  }

  button:first-child {
    left: 15px;
  }

  button:last-child {
    right: 16px;
  }
`;

export const CardContainer = styled.div`
  background: #ffffff;
  border: 1px solid #740200;
  border-radius: 5px;
  box-sizing: border-box;
  flex: 0 0 50%;
  font-size: 1.2rem;
  height: 166px;
  padding: 10px;
  overflow: auto;
  text-align: center;
  width: 160px;

  img {
    height: 80%;
    width: 100%;
  }

  p {
    align-items: center;
    color: #000000;
    font-family: "Epilogue";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    margin: 4px 0;
    text-align: center;
  }
`;

export const StartButton = styled.button`
  align-items: center;
  background: #e90101;
  border: none;
  border-radius: 5px;
  bottom: 0;
  color: #ffffff;
  display: flex;
  font-family: "Suez One";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  height: 50px;
  justify-content: center;
  line-height: 26px;
  max-width: 720px;
  padding: 0;
  position: fixed;
  text-align: center;
  width: 100%;
`;
