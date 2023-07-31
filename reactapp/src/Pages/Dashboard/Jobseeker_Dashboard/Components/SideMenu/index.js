import {
  DashboardOutlined,
  FileAddOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.css";

function SideMenu({ setContent }) {
  const navigate = useNavigate();

  const menuItems = [
    {
      label: "Dashboard",
      key: "Dashboard",
      icon: <DashboardOutlined style={{ fontSize: "23px", color: "red" }} />,
    },
    {
      label: "Applied Jobs",
      key: "AppliedJobs",
      icon: <FileAddOutlined style={{ fontSize: "23px", color: "green" }} />,
    },
    {
      label: "Apply for Jobs",
      key: "applyForJobs",
      icon: <FormOutlined style={{ fontSize: "23px", color: "green" }} />,
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
