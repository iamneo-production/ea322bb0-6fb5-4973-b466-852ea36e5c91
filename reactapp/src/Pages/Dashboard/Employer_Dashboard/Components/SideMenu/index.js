import {
  DashboardOutlined,
  FileAddOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import "./index.css";

function SideMenu({ setContent }) {

  const menuItems = [
    {
      label: "Dashboard",
      key: "Dashboard",
      icon: <DashboardOutlined style={{ fontSize: "23px", color: "red" }} />,
    },
    {
      label: "Posted Jobs",
      key: "PostedJobs",
      icon: <FormOutlined style={{ fontSize: "23px", color: "green" }} />,
    },
    {
      label: "Applications Received",
      key: "applicationsReceived",
      icon: <FileAddOutlined style={{ fontSize: "23px", color: "green" }} />,
    },
  ];

  const handleMenuItemClick = (item) => {
    setContent(item.key);
  };

  return (
    <Menu
      className="SideMenu"
      onClick={handleMenuItemClick}
      items={menuItems}
    ></Menu>
  );
}

export default SideMenu;
