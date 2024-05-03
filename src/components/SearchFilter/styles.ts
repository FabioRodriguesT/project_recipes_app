import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: var(--tertiary-bg-color);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 113px;
  margin: 0 auto;

  input[type=text] {
    background: #FFFFFF;
    border: 2px solid black;
    border-radius: 5px 5px 0px 0px;
    box-sizing: border-box;
    font-family: 'Epilogue';
    font-size: 26px;
    font-style: normal;
    font-weight: 300;
    line-height: 50px;
    height: 50px;
    width: 100%;
    text-indent: 20px;
    vertical-align: middle;
  }

  input[type=text]::placeholder{    
    color: #808080;
    font-family: 'Epilogue';
    font-size: 26px;
    font-style: normal;
    font-weight: 300;
    line-height: 50px;
    text-indent: 20px;
    vertical-align: middle;
  }

  input[type=radio] {
    border: 0px;
    width: 100%;
    height: 0.75rem;     
  }
  
  input[type=radio]:checked {
    accent-color: #740200;
  }

  label {
    color: #FFFFFF;
    font-family: 'Epilogue';
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
  }
`;

export const ContainerRadio = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* grid-template-columns: 2fr 1fr 3fr;
  flex-direction: row; */
  margin: 5px 0;
  width: 80%;

  div {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-sizing: border-box;

    input[type=radio] {
      margin: 0;
      width: 20px;
      box-shadow: none !important;
    }

    label {
      width: 90%;
    }
  }
`;

export const Button = styled.button`
  color: #FFFFFF;
  background: var(--primary-bg-color);
  border: 0;
  border-radius: 5px;
  height: 31.74px;
  font-family: 'Suez One';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  width: 80%;

  &:hover{
    padding-bottom: 5px;
  }

  &:disabled {
    background-color: #cccccc;
    border: 1px solid #999999;
    color: #666666;
  } 
`;
