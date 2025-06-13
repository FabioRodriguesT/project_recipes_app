import styled from "styled-components";

const BrownColor = "#740200";
const OrangeColor = "#E90101";
const DarkRedColor = "#E70001";
const WhiteColor = "#FFF";

export const Container = styled.div`
  align-items: center;
  background: ${BrownColor};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;

  img {
    width: 50%;
    min-width: 291px;
  }
`;

export const Title = styled.div`
  margin: 0 auto;

  width: 50%;
  min-width: 291px;

  h1 {
    color: ${WhiteColor};
    font-family: "Suez One";
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 65px;
    margin: 0;
  }

  h2 {
    color: ${DarkRedColor};
    font-family: "Suez One";
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 52px;
    margin: 0;
    margin-top: -15px;
  }
`;

export const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 260px;
  width: 50%;
  min-width: 291px;

  p {
    align-items: center;
    color: ${WhiteColor};
    display: flex;
    font-family: "Suez One";
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 39px;
    text-align: center;
    text-transform: uppercase;
    margin: 0;
  }

  input {
    background: ${WhiteColor};
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 20px;
    color: ${BrownColor};
    height: 46px;
    padding-left: 12px;
    width: 100%;
  }

  input:nth-of-type(2) {
    /*margin-top: -12px;*/
  }

  input::placeholder {
    align-items: center;
    display: flex;
    color: ${BrownColor};
    font-family: "Suez One";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  button {
    background: ${OrangeColor};
    border-radius: 5px;
    border: 0px solid;
    color: ${WhiteColor};
    font-family: "Suez One";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    height: 46px;
    text-align: center;
    width: 100%;
  }

  button:disabled {
    background: gray;
  }
`;
