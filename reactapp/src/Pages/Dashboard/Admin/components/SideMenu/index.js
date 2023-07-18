import { Menu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import { FaUser, FaListAlt, FaUserTie } from "react-icons/fa";
import "./index.css";

function SideMenu({ setContent }) {
  return (
    <div className="SideMenu" style={{ width: "240px", height: "100%" }}>
      <Menu
        className="SideMenu"
        onClick={(item) => {
          console.log("set key  ", item.key);
          setContent(item.key);
        }}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreOutlined />,
            key: "Dashboard",
          },

          {
            label: "Company Profile",
            icon: <FaUser />,
            key: "CompanyProfile",
          },
          {
            label: "Job Seekers",
            icon: <FaUserTie />,
            key: "JobSeekers",
          },
          {
            label: "Applications",
            icon: <FaListAlt />,
            key: "Applications",
          }
        ]}
        style={{
          width: "100%",
          fontSize: "20px",
          display: "flex",
          flexDirection: "column",
          item: { height: "50px" },
          gap: "10px",
        }}
      ></Menu>
    </div>
  );
}
export default SideMenu;
