import styled from 'styled-components';

export const Container = styled.div`
  /* Footer-Group */

  background: var(--primary-bg-color);
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 360px;
  height: 46px;
  bottom: 0;
  position: fixed;
  box-sizing: border-box;  
`;

export const FoodImg = styled.img`
  /* Food-Icon */
  height: 35px;
  margin-right: 15px;
  width: 54px;
`;

export const DrinkImg = styled.img`
  height: 39px;
  margin-left: 15px;
  width: 26px;
`;
