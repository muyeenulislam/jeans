import React from "react";

const DefaultInput = ({
  label,
  placeholder,
  style,
  value,
  type = "text",
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-[0.5rem]">
      <p>{label}</p>
      <input
        className="bg-lightgray px-[1.25rem] py-[1.44rem] border-b border-b-gray-400 outline-none"
        placeholder={placeholder ?? "Enter value"}
        style={{ ...style }}
        value={value}
        type={type}
        {...rest}
      />
    </div>
  );
};

export default DefaultInput;
