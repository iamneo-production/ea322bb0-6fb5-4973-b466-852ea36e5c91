import { Menu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import { FaUser, FaRocketchat, FaUserTie } from "react-icons/fa";
import "./index.css";

/**
 * The SideMenu component is a JavaScript function that renders a side menu with different options and
 * icons, and allows the user to set the content based on the selected option.
 * @returns The SideMenu component is returning a div element with the className "SideMenu" and a style.
 *  The Menu component renders a list of menu
 * items with labels, icons, and keys.
 */
function SideMenu({ setContent }) {
  return (
    <div className="SideMenu" style={{ width: "240px", height: "100%" }}>
      {/* The `Menu` component is rendering a list of menu items with labels, icons, and keys. It is used
     in the `SideMenu` component to display a side menu with different options. */}
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
