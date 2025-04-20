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
    </div>
  );
};

export default DefaultSelect;
