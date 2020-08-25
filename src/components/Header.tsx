import React from "react";
import { storage } from "../helpers/storage";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <header className="header">
      <img className="logo" src={require("../assets/images/l.svg")} alt="" />
      <span
        className="logout"
        onClick={() => {
          storage.remove();
          history.push("/");
        }}
      >
        Sair
      </span>
    </header>
  );
};

export default Header;
