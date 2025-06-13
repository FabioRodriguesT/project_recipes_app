import React, { ChangeEvent, FormEvent, useState } from "react";
import logo from "../../assets/logo.svg";
import { Container, Title, LowerContainer } from "./styles";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.name === "email") {
      setEmail(target.value);

      buttonEnablement(target.value, password);
    } else if (target.name === "password") {
      setPassword(target.value);

      buttonEnablement(email, target.value);
    }
  };

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length > 6;
  };

  const buttonEnablement = (email: string, password: string) => {
    if (validateEmail(email) && validatePassword(password)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    localStorage.setItem("user", JSON.stringify({ email: email }));

    navigate("meals");

    setEmail("");
    setPassword("");
    setDisabled(true);
  };

  return (
    <Container>
      <Title>
        <h1>Receitas</h1>
        <h2>App</h2>
      </Title>
      <img src={logo} alt="logo" />
      <LowerContainer>
        <p>Login</p>
        <input
          type="text"
          placeholder="E-mail"
          data-testid="email-input"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Password"
          data-testid="password-input"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button
          data-testid="login-submit-btn"
          disabled={disabled}
          onClick={handleSubmit}
        >
          Entrar
        </button>
      </LowerContainer>
    </Container>
  );
}

export default Login;
