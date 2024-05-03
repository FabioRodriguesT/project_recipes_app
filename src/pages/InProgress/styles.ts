import styled from 'styled-components';

export const Container = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerImage = styled.div`
  align-items: center;
  border-radius: 0px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 161.85px;
  width: 100%;
  
  h1 { 
    color: #FFFFFF;
    font-family: 'Suez One';
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    margin: 0%;
    text-align: center;
  }
`;

export const ContainerButtons = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;  
  top: 40px;
  width: 90%;

  div {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 20%;
  }

  span {
    color: #E90101;
    font-family: 'Suez One';
    font-size: 15px;
    font-style: normal;
    font-weight: 400;

    margin-left: 0.31rem;
  }

  button {
    border: none;
    background: none;
    padding: 0;
  }
`;

export const ContainerIngredients = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 90%;
  height: 100%;

  h1 {
    color: #000000;
    font-family: 'Suez One';
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    margin: 0.5rem 0;
  }

  ul {
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid #740200;
    border-radius: 5px;
    padding: 0 2rem;
    margin: 0;
  }

  li {
    color: #1A1B1C;
    font-family: 'Epilogue';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    margin: 0.6rem 0px;
  }
`;

export const ContainerInstructions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0.5rem auto 0 auto;
  width: 90%;
  height: 110%;

  h1 {
    color: #000000;
    font-family: 'Suez One';
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    margin: 0;
  }

  p {
    background: #FFFFFF;
    border: 1px solid #740200;
    border-radius: 5px;
    box-sizing: border-box;
    color: #1A1B1C;
    font-family: 'Epilogue';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    padding: 0.8rem 2rem;
  } 
`;

export const ContainerVideo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 90%;
  margin: 0 auto;

  h1 {
    color: #000000;
    font-family: 'Suez One';
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    margin: 0.5rem 0;
  }

  iframe {
    background: #D9D9D9;
    border: 1px solid #740200;
    border-radius: 5px;
    box-sizing: border-box;
    height: 20rem;
    width: 100%;
  }
`;

export const ContainerRecommends = styled.div`
  height: 100%;
  width: 90%;
  margin: 0 auto;

  h1 {
    color: #000000;
    font-family: 'Suez One';
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    margin: 0.5rem 0;
  } 
`;

export const ContainerRecipe = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  div {
    margin: 0 0.2rem;
  }
`;

export const Button = styled.button`
  background: var(--secondary-bg-color);
  border: 0;
  color: #FFFFFF;
  height: 3.125rem;
  border-radius: 0.3125rem;
  font-family: 'Suez One';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  margin: 0.5rem auto;
  width: 90%;

  &:hover{
    padding-bottom: 0px;
  }

  &:disabled {
    background-color: #cccccc;
    border: 1px solid #999999;
    color: #666666;
  } 
`;
