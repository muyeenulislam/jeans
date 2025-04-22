import React from "react";
import { Select, ConfigProvider } from "antd";

import "./styles.css";

const DefaultSelect = ({
  label,
  placeholder,
  style,
  items = [],
  type = "text",
  value,
  error,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-[0.5rem]">
      <p>{label}</p>
      <ConfigProvider
        theme={{
          components: {
            Select: {
              hoverBorderColor: "transparent",
              activeBorderColor: "transparent",
              activeOutlineColor: "transparent",
              borderRadius: 0,
              optionActiveBg: "#f1f3f6",
            },
          },
        }}
      >
        <Select
          className="default-select"
          placeholder={placeholder ?? "Enter value"}
          style={{ ...style }}
          value={value}
          options={items}
          allowClear
          {...rest}
        />
      </ConfigProvider>
      {error && <span className="text-red-600 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default DefaultSelect;
