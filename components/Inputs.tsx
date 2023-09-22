import React from "react";

type InputsProps = {
  type: string;
  placeholder: string;
  name: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Inputs = ({ type, placeholder, name, onchange }: InputsProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onchange}
      className="px-7 py-3 border-[1px] text-sm outline-none border-[#27272721] dark:border-[#cecece11] bg-[white]
      dark:bg-light-black"
    />
  );
};

export default Inputs;
