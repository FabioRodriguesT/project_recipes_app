import styled from "styled-components";

export const HigherContainer = styled.div`
  background: #740200;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  width: 100%;

  img:nth-of-type(1) {
    margin-left: 2px;
  }

  img:last-of-type {
    margin-right: 8px;
  }

  div {
    display: flex;
    justify-content: space-evenly;
    width: 50%;
  }

  p {
    border: 0;
    margin: 0;
    padding: 0;
  }

  p:nth-of-type(1) {
    color: #ffffff;
    font-family: "Suez One";
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 39px;
  }

  p:nth-of-type(2) {
    color: #e70001;
    font-family: "Suez One";
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 39px;
  }
`;

export const LowerContainer = styled.div`
  div {
    align-items: center;
    background: #740200;
    border-radius: 50%;
    display: flex;
    height: 64px;
    justify-content: center;
    margin: 12px auto 12px auto;
    width: 64px;
  }

  img {
    height: 35.56px;
    width: 40.56px;
  }

  h1 {
    color: #e70001;
    font-family: "Suez One";
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 39px;

    margin: 0;
  }

  .remove-circle {
    border-radius: 0;
    background: white;
  }
`;
