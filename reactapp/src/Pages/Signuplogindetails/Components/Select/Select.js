import { Select } from "antd";
export const Dropdown = ({ placeholder, defaultValue, options, onChange }) => (
  <Select
    style={{
      width: "80%",
      borderRadius: "10px",
      color: "teal",
      marginLeft: "12px",
      marginTop: "1%",
    }}
    placeholder={placeholder}
    onChange={onChange}
    options={options}
    defaultValue={defaultValue}
  />
);
