import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import '../styles/Login.scss';
import { MyButton } from "../components/UI/button/MyButton";
import { MyInput } from "../components/UI/input/MyInput";
import { AuthContext } from "../store/AuthContext";

export const Login = () => {
  const { login } = useContext(AuthContext);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {state} = useLocation();
  const navigate = useNavigate();

  function handleSubmit() {

    login({ login: userName, password })
      .then(() => navigate(state.pathname || '/about', {replace: true}))
      .catch(err => setError(err.message))
  };

  return (
    <div className="login">
      <h1>Login page</h1>
      <form className="form login__form">
        <MyInput
          type='text'
          placeholder="Enter login"
          onChange={value => setUserName(value)}
        />
        <MyInput
          type='password'
          placeholder="Enter password"
          onChange={value => setPassword(value)}
        />
        <MyButton onClick={handleSubmit}>login</MyButton>
        {error && <h2>{error}</h2>}
      </form>

    </div>
  )
}