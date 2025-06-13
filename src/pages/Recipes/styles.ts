import styled from "styled-components";

export const Container = styled.div`
  margin-top: 6px;
  height: auto;
  padding-bottom: 55px;
`;

export const CardGroupContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(166px, 1fr));
  grid-template-rows: auto;
  gap: 6px;
  margin-top: 15px;
`;

export const CardContainer = styled.div`
  background: #ffffff;
  border: 1px solid #740200;
  border-radius: 5px;
  box-sizing: border-box;
  height: 166px;
  margin: 0 auto;
  overflow: auto;
  width: 160px;

  img {
    width: 100%;
    height: 80%;
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
