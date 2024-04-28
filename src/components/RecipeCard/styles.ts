import styled from 'styled-components';

export const Container = styled.div`
  /* Food-Frame-Group */
  background: #FFFFFF;
  border: 1px solid #740200;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 166px;
  width: 160px;

  p {
    /* Food-Title */
    align-items: center;
    display: flex;
    color: #000000;
    font-family: 'Epilogue';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    height: 20%;
    margin: 0 auto;
    text-align: center;
  }

  img {
    /* Food-Image */
    border-radius: 0px 0px 0px 0px;
    height: 80%;
    width: 100%;
  }
`;
