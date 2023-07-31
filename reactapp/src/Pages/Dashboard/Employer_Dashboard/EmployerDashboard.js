import AppHeader from "./Components/AppHeader";
import SideMenu from "./Components/SideMenu";
import PageContent from "./Components/PagesContent";
import { Layout, Space } from "antd";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function EmployerDashboard() {
  const [content, setContent] = useState("Dashboard");
  const [employerName, setEmployerName] = useState(
    localStorage.getItem("employerName")
  );
  return (
    <div>
      <Layout>
        <AppHeader
          toast={toast}
          setEmployerName={setEmployerName}
          employerName={employerName}
        ></AppHeader>
        <Space className="SideMenuAndPagesContent">
          <SideMenu setContent={setContent}></SideMenu>
          <PageContent
            employerName={employerName}
            content={content}
            setContent={setContent}
            toast={toast}
          ></PageContent>
        </Space>
        <ToastContainer />
      </Layout>
    </div>
  );
}

export default EmployerDashboard;
