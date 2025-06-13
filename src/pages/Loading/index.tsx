import React from "react";
import logo from "../../assets/logo.svg";
import { Container, TextContainer } from "./styles";

function Loading() {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <TextContainer>
        <h1>Receitas</h1>
        <h2>App</h2>
      </TextContainer>
    </Container>
  );
}

export default Loading;
