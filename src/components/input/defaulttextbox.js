import React from "react";

const DefaultTextbox = ({
  label,
  placeholder,
  style,
  value,
  rows = 3,
  error,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-[0.5rem]">
      <p>{label}</p>
      <textarea
        className="bg-lightgray px-[1.25rem] py-[1.44rem] border-b border-b-gray-400 outline-none"
        placeholder={placeholder ?? "Enter value"}
        style={{ ...style }}
        value={value}
        rows={rows}
        {...rest}
      />
      {error && <span className="text-red-600 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default DefaultTextbox;
