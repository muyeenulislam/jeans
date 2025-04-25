import React from "react";
import Image from "next/image";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const WhiteButton = ({
  icon,
  text,
  disabled = false,
  loading = false,
  ...rest
}) => {
  return (
    <button
      className={`flex justify-between items-center bg-white border border-primary p-[1.25rem] md:px-[1.25rem] w-full text-primary text-[1rem] md:text-[1.125rem] leading-[1.375rem] transition-all duration-200 ease-in-out ${
        !disabled &&
        "hover:bg-gray-100 hover:scale-[1.015] active:scale-[0.97] active:bg-white/80 cursor-pointer"
      } ${disabled && "bg-white/80"}`}
      disabled={disabled}
      {...rest}
    >
      <p>{text}</p>
      {loading ? (
        <Spin
          indicator={
            <LoadingOutlined
              spin
              className="aspect-square h-[1.5rem] w-[1.5rem]"
            />
          }
        />
      ) : (
        icon && (
          <Image
            src={icon}
            height={24}
            width={24}
            className="aspect-square h-[1.5rem] w-[1.5rem]"
            alt="btn-icon"
          />
        )
      )}
    </button>
  );
};

export default WhiteButton;
