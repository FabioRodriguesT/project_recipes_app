import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: var(--primary-bg-color);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  margin: 0 auto;
  max-width: 360px;
  width: 100vw;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  
`;

export const Title = styled.p`
  /* Receitas */
  color: #FFFFFF;
  font-family: "Suez One", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 50px;
  margin: 0
`;

export const Caption = styled.p`
  /* App */
  color: var(--tertiary-bg-color);
  font-family: 'Suez One';
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  margin: 0
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
  /* LOGIN */
    color: #FFFFFF; 
    font-family: 'Suez One';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 39px;
    margin: 20px 0;
    text-align: center;    
  }

  input {
    /* Email */
    /* background */
    background: #FFFFFF;
    border: 2px solid var(--secondary-bg-color);
    border-radius: 10px;
    box-sizing: border-box;
    color: var(--primary-bg-color);
    font-size: 18px;
    font-weight: 800;
    height: 46px; 
    margin: 5px 0;
    padding-inline: 0px;
    padding-block: 0px;
    text-indent: 10px;
    width: 291px;  
  }

  input::placeholder {
    /* E-mail */
    color: #740200;    
    font-family: 'Suez One';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;    
    text-indent: 10px;
  }
  
  input:focus {
    outline: none;
  }

  button {
    /* Rectangle 5 */
    /* Text-Button */
    background: var(--secondary-bg-color);
    border-radius: 10px;
    border: 0;
    color: #FFFFFF;
    font-family: 'Suez One';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    height: 46px;
    margin-top: 20px;
    text-align: center;
    width: 291px;
  }

  button:hover {
    padding: 5px;
  }

  button:disabled {
    background-color: #cccccc;
    border: 1px solid #999999;
    color: #666666;
  } 
`;
