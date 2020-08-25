import React, { useEffect, FC, useState } from "react";
import Input from "../components/Input";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useHistory } from "react-router-dom";

import { loginAction } from "../store/account/login/action";

type LoginProps = {
  user: Response;
  loginAction(values: Login): void;
};

type Response = {
  isValid: boolean;
};

export interface Login {
  email?: string;
  password: string;
}

const Login: FC<LoginProps> = ({ loginAction, user }) => {
  const history = useHistory();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    redirect();
  }, [user.isValid]);

  function redirect() {
    if (user.isValid) {
      history.push("/home");
    }
  }

  function loginUser(e: any) {
    e.preventDefault();
    loginAction(loginData);
  }

  function handleEvent(e: any) {
    const { name, value } = e;

    setLoginData((old) => ({ ...old, [name]: value }));
  }

  return (
    <div className="login-content">
      <div className="logo-content">
        <img
          className="logo"
          src={require("../assets/images/logo.svg")}
          alt=""
        />
      </div>
      <div className="form-content">
        <form className="form" onSubmit={loginUser}>
          <Input
            type="text"
            name="email"
            label="E-mail"
            placeholder="E-mail"
            eventHandle={handleEvent}
          />
          <Input
            type="password"
            name="password"
            label="Senha"
            placeholder="Senha"
            eventHandle={handleEvent}
          />

          <button type="submit" className="btn-primary">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return { user: state.login };
};
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ loginAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
