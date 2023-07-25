//import Typography from '@material-ui/core/Typography'
import { Badge, Space, Typography, Avatar, Menu, Drawer, Image } from "antd";
import { BellFilled, DeleteTwoTone } from "@ant-design/icons";
import { VscSignOut } from "react-icons/vsc";
import { useState } from "react";
import img from "../../assets/images/few.webp";
import authService from "../../../../../services/auth";
import { useNavigate } from "react-router-dom";
import "./index.css";
function AppHeader() {
  const [userName] = useState("admin");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const notifications = [
    {
      image: img,
      status: false,
      message: "Notification 1",
      dateTime: "29 July 2020 - 02:26 PM",
    },
    {
      image: img,
      status: false,
      message: "Notification 2",
      dateTime: "29 July 2020 - 02:26 PM",
    },
    {
      image: img,
      status: false,
      message: "Notification 3",
      dateTime: "29 July 2020 - 02:26 PM",
    },
    {
      image: img,
      status: false,
      message: "Notification 4",
      dateTime: "29 July 2020 - 02:26 PM",
    },
  ];
  const items = [
    {
      icon: (
        <Avatar
          style={{
            backgroundColor: "orange",
            verticalAlign: "middle",
            marginLeft: "10px",
          }}
          size="medium"
          gap={5}
        >
          {" "}
          {userName}
        </Avatar>
      ),
      children: [
        {
          label: "Logout",
          icon: <VscSignOut />,
          key: "/Logout",
          onClick: () => {
            authService.logout();
            navigate("/");
          },
        },
      ],
    },
  ];
  const notificationStyle = {
    cursor: "pointer",
    position: "relative",
    backgroundColor: "#bfbfff",
    padding: "5px",
    borderRadius: "5px",
    marginBottom: "10px",
    display: "flex",
    flexDirection: "row",
    gap: "15px",
    alignItems: "center",
  };
  return (
    <div className="AppHeader">
      <Image
        width={110}
        src="https://i.postimg.cc/3r0pdVjy/Logo-4.png"
        alt="Logo"
        className="image-on-top"
      />

      <Typography.Title
        style={{ margin: 0, marginLeft: "250px", color: "white" }}
      >
        Admin Dashboard
      </Typography.Title>
      <Space>
        <Badge count={20}>
          <BellFilled style={{ fontSize: 30 }} onClick={showDrawer} />
        </Badge>
        <Menu
          mode="horizontal"
          items={items}
          selectedKeys={""}
          style={{ padding: 0, background: "none" }}
        />
      </Space>
      <Drawer
        title="Notifications"
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        key="right"
      >
        {notifications.map((value, index) => {
          return (
            <div key={index} style={notificationStyle}>
              <Avatar
                style={{
                  backgroundColor: "orange",
                  verticalAlign: "middle",
                  marginLeft: "10px",
                }}
                size="medium"
                icon={value.image}
                gap={3}
              />
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <h4 style={{ margin: "0" }}>{value.message}</h4>
                <p style={{ fontSize: "10px", margin: "5px" }}>
                  {value.dateTime}
                </p>
              </div>
              <DeleteTwoTone
                size={"large"}
                style={{
                  fontSize: "16px",
                  position: "absolute",
                  right: "10px",
                  cursor: "pointer",
                }}
              />
            </div>
          );
        })}
      </Drawer>
    </div>
  );
}
export default AppHeader;
