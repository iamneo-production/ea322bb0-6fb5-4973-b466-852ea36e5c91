import { DashboardOutlined, FileAddOutlined, /* SolutionOutlined */ } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import './index.css'

function SideMenu() {
  const navigate = useNavigate();

  const menuItems = [
    {
      label: "Dashboard",
      key: "/",
      icon: <DashboardOutlined style={{ fontSize: "23px", color: "red" }} />,
      
    },
    {
      label: "Applied Jobs",
      key: "/appliedJobs",
      icon: <FileAddOutlined style={{ fontSize: "23px", color: "green" }} />,
      
    },
  /*   {
      label: "Resume",
      key: "/resume",
      icon: <SolutionOutlined style={{ fontSize: "23px", color: "blue" }} />,
      
    }, */
  ];

  const handleMenuItemClick = (item) => {
    navigate(item.key);
  };

  return (
    <Menu className="SideMenu" onClick={handleMenuItemClick}>
      {menuItems.map((item) => (
        <Menu.Item key={item.key} icon={item.icon} className="menu-item">
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );
}

export default SideMenu;
