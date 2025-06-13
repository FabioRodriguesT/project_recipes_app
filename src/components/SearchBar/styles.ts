import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 5px 5px 0px 0px;
    box-sizing: border-box;
    color: #740200;
    font-family: "Epilogue";
    font-size: 26px;
    font-style: normal;
    font-weight: 300;
    line-height: 27px;
    height: 50px;
    padding: 0px;
    padding-left: 12px;
    width: 90%;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: #808080;
    font-family: "Epilogue";
    font-size: 26px;
    font-style: normal;
    font-weight: 300;
    line-height: 27px;
  }
`;

export const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  height: 80px;
  background: #e70001;
  border-radius: 0px 0px 5px 5px;

  div {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    justify-content: space-around;
    justify-items: center;
    align-items: center;
    width: 90%;
    height: 24px;
  }

  label {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    width: 100%;
    height: 24px;
    margin-right: 6px;
  }

  input[type="radio"] {
    width: 15px;
    height: 15px;
  }

  p {
    color: #ffffff;
    font-family: "Epilogue";
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 12px;
    margin: 0;
  }

  button {
    align-items: center;
    color: #ffffff;
    background: #740200;
    border: none;
    border-radius: 5px;
    font-family: "Suez One";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    height: 35px;
    text-align: center;
    width: 90%;
  }
`;
