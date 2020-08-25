import React from "react";

type Input = {
  type: string;
  name: string;
  label: string;
  value?: string;
  placeholder: string;
  eventHandle: (e: any) => any;
};

const Input = ({
  type,
  label,
  value,
  placeholder,
  name,
  eventHandle,
}: Input) => {
  return (
    <div className="input-content">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => eventHandle(e.target)}
      />
    </div>
  );
};

export default Input;
