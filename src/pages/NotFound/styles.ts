import styled from 'styled-components';

const PurpleColor = '#41197F';
const YellowColor = '#FCC436';
const WhiteColor = '#FFFFFF';
const LinksColor = '#797D86';

export const Container = styled.div`
  align-items: stretch;
  background: ${PurpleColor};
  box-sizing: border-box;
  display: grid;
  font-family: Epilogue;
  height: calc(640px - 6.125rem);
  justify-items: center;
  margin: 0 auto;
  max-width: 100vw;
  padding-top: 5px;
  text-align: center;
  width: 22.5rem;
  

  h1 {
    margin-top: 15px;
    color: ${YellowColor};    
    font-family: Epilogue;
    font-weight: 900;
    letter-spacing: 2.1px;
    text-transform: uppercase;    
  }

  h2 {
    color: ${WhiteColor};
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.48px;
    text-transform: capitalize;
    text-align: center;
  }

  h3 {
    color: ${LinksColor};
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.48px;
    text-transform: capitalize;
    text-decoration: none;
    margin-left: 15px;
  }

  img {
    margin-top: 15px;
    width: 25%;
    height: 50%;
  }
`;

export const LinksContainer = styled.div`
  align-items: baseline;
  display: flex;
  flex-direction: column;
  justify-items: baseline;
  justify-content: flex-end;
`;

export const GrayLine = styled.hr` 
  background: #B1B1B1;
  width: 80%;
`;
