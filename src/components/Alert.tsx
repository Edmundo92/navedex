import React, { FC } from "react";

type AlertType = {
  title: string;
  message: string;
  children?: any;
  onCancel: () => void;
};

const Alert: FC<AlertType> = ({ title, message, children, onCancel }) => {
  return (
    <div className="alert-content">
      <div className="close-content">
        <img
          src={require("../assets/images/close.svg")}
          alt="Close"
          onClick={onCancel}
        />
      </div>
      <h1>{title}</h1>
      <p>{message}</p>
      {children}
    </div>
  );
};

export default Alert;
