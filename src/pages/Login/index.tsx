import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormDataType } from '../../types';
import { isValidEmail, isValidPassword } from '../../utils/validations';

function Login() {
  const [disabled, setDisabled] = useState(true);
  const [formData, setFormData] = useState<FormDataType>({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (isValidEmail(formData.email) && isValidPassword(formData.password)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formData]);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    localStorage.setItem('user', JSON.stringify({
      email: formData.email,
    }));
    navigate('meals');
  };

  return (
    <div>
      <h1>
        Login
      </h1>
      <input
        type="text"
        data-testid="email-input"
        placeholder="Email"
        name="email"
        onChange={ handleChangeInput }
        value={ formData.email }
      />
      <input
        type="password"
        data-testid="password-input"
        placeholder="Password"
        name="password"
        onChange={ handleChangeInput }
        value={ formData.password }
      />
      <button
        data-testid="login-submit-btn"
        disabled={ disabled }
        onClick={ handleLogin }
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
