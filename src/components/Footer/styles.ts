import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #740200;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 46px;
  width: 100%;
  max-width: 720px;
  position: fixed;
  bottom: 0;
  left: auto;

  img:first-of-type {
    margin-left: 12px;
  }

  img:last-of-type {
    margin-right: 12px;
  }
`;
