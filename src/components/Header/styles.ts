import styled from 'styled-components';

export const Container = styled.div`
  /* Header */
  align-items: center;
  background: #740200;  
  display: flex;
  flex-direction: row;
  height: 52px;
  justify-content: space-around;
  width: 360px;
  box-sizing: border-box;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h1`
   /* Receitas */

  color: #FFFFFF;
  font-family: 'Suez One';
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 39px;
  margin-right: 5px
`;

export const Caption = styled.h1`
  /* App */

  color: var(--tertiary-bg-color);
  font-family: 'Suez One';
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 39px;
`;

export const ContainerImg = styled.div`
  align-items: center;
  display: flex;
  padding-right: 5px;
`;

export const SearchImg = styled.img`
  /* Vector */
  margin: 0;
  padding-top: 5px;
  margin-right: 5px;
  width: 40px;
`;

export const ProfileImg = styled.img`
  width: 35px;  
`;

export const ContainerPage = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  width: 360px;

  img {
    /* Done-svg */
    background: #FFFFFF;
    height: 39px;
    width: 39px;    
  }

  h1 {
    /* Receitas Realizadas */
    color: var(--tertiary-bg-color);
    font-family: 'Suez One';
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    height: 30px;
    margin: 5px 0;
    text-align: center;
  }
`;
