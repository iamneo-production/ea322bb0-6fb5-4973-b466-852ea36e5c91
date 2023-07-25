import { Menu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import { FaUser, FaRocketchat, FaListAlt, FaUserTie } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./index.css";

function SideMenu({ setContent }) {
  const navigate = useNavigate();
  return (
    <div className="SideMenu" style={{ width: "240px", height: "100%" }}>
      <Menu
        className="SideMenu"
        onClick={(item) => {
          setContent(item.key);
        }}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreOutlined />,
            key: "Dashboard",
          },
          {
            label: "Employers",
            icon: <FaUser />,
            key: "CompanyProfile",
          },
          {
            label: "Job Seekers",
            icon: <FaUserTie />,
            key: "JobSeekers",
          },
          {
            label: "Reports",
            icon: <FaRocketchat />,
            key: "Reports",
          },
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
