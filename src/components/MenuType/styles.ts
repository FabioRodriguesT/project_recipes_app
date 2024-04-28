import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;
`;

export const SingleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 85px;
  margin-right: 5px;
  p {
    /* Todos */
    color: var(--tertiary-bg-color);
    font-family: 'Suez One';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    text-align: center;    
    margin: 0;
  }

  img {
    /* Icon */
    width: 48px;
    height: 48px;
  }
`;
