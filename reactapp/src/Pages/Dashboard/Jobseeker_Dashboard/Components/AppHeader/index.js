import {
  UserOutlined,
  PoweroffOutlined,
  DownCircleFilled,
  SearchOutlined,
} from "@ant-design/icons";
import { Avatar, Image, Button, Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import "./index.css";

function AppHeader() {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/profile">View Profile</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to="/edit-profile">Edit Profile</Link>
      </Menu.Item>
      <Menu.Divider />
    </Menu>
  );

  return (
    <div
      className="AppHeader1"
    >
      <Image
        width={110}
        src="https://i.postimg.cc/3r0pdVjy/Logo-4.png"
        alt="Logo"
        className="image-on-top"
      />

      <div style={{ display: "flex", alignItems: "center", columnGap: "40px" }}>
        <Link to="">
          <Button
            type="primary"
            icon={<SearchOutlined className="searchicon" />}
            className="white-button"
          >
            Search for more Jobs
          </Button>
        </Link>

        <Dropdown overlay={menu}>
          <div
            style={{ display: "flex", alignItems: "center", color: "white" }}
          >
            <Avatar
              size={50}
              icon={<UserOutlined />}
              style={{ marginRight: "10px" }}
            />
            <span style={{ marginRight: "10px" }}>Profile Name</span>
            <DownCircleFilled style={{ color: "white" }} />
          </div>
        </Dropdown>

        <Link to="">
          <Button
            type="primary"
            style={{ display: "flex", alignItems: "center" }}
          >
            <PoweroffOutlined style={{ marginRight: "5px" }} />
            Log Out
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default AppHeader;
