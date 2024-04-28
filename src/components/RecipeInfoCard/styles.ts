import styled from 'styled-components';

export const Container = styled.div`
  background: var(--primary-bg-color);
  border: 1px solid var(--secondary-bg-color);
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 135px;
  width: 318px;
  
  img {
    box-sizing: border-box;
    border-radius: 5px 0px 0px 5px;
    width: 50%;
    height: 100%;   
  }
`;

export const ContainerInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 50%;
  height: 100%;
  
  h2 {
    /* Food-Title */
    color: var(--secondary-bg-color);
    font-family: 'Suez One', serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    height: 24px;
    margin: 10px 0 0 0;
    width: 116px;
  }

  p {
    /* Food-Time */
    color: #808080;
    font-family: 'Epilogue', sans-serif;
    font-style: light;
    font-weight: 300;
    font-size: 12px;    
  }
`;

export const ContainerCategory = styled.div`
  span {
    /* Food-Types */
    color: var(--tertiary-bg-color);
    font-family: 'Epilogue', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    text-align: center;
    margin: 0
  }
`;

export const ContainerTag = styled.div`
  display: flex;
  flex-direction: row;

  width: 80%;
  span {
    align-items: center;
    background: var(--tertiary-bg-color);
    border-radius: 10px;
    color: #FFFFFF;
    display: flex;
    font-family: 'Suez One';
    font-size: 9px;
    font-style: normal;
    font-weight: 400;
    justify-content: center;
    margin: 0 3px;
    padding: 0 5px;
    height: 14px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
`;

export const Button = styled.button`
  border: none;
  background: none;
  width: 40px;
  height: 100%;     
  position: relative;
  top: -8px;

  img {
    box-sizing: border-box;
    border-radius: 0px 0px 0px 0px;
    width: 100%;
    height: 100%;
  }
`;
