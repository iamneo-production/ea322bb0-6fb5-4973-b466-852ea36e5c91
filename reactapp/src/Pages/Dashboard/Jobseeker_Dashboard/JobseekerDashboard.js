import AppHeader from "./Components/AppHeader";
import SideMenu from "./Components/SideMenu";
import PageContent from "./Components/PagesContent";
import { Layout, Space } from "antd";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function JobseekerDashboard() {
  const [content, setContent] = useState("Dashboard");
  const [jobSeekerName, setJobSeekerName] = useState(
    localStorage.getItem("jobSeekerName")
  );
  return (
    <div>
      <Layout>
        <AppHeader
          toast={toast}
          setJobSeekerName={setJobSeekerName}
          jobSeekerName={jobSeekerName}
        ></AppHeader>
        <Space className="SideMenuAndPagesContent">
          <SideMenu setContent={setContent}></SideMenu>
          <PageContent
            jobSeekerName={jobSeekerName}
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

export default JobseekerDashboard;
