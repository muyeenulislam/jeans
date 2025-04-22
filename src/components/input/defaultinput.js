import React from "react";

const DefaultInput = ({
  label,
  placeholder,
  style,
  value,
  type = "text",
  error,
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
      {error && <span className="text-red-600 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default DefaultInput;
