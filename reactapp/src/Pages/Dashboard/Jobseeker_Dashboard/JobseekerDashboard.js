import AppHeader from "./Components/AppHeader"
import AppFooter from "./Components/AppFooter"
import SideMenu from "./Components/SideMenu"
import PageContent from "./Components/PagesContent"
import { Layout, Space } from "antd";

function JobseekerDashboard() {
    return (
      <div >
     <Layout>
      <AppHeader></AppHeader>
      <Space className="SideMenuAndPagesContent">
      <SideMenu></SideMenu> 
      <PageContent></PageContent> 
      </Space>
      <AppFooter/> 
      </Layout> 
     </div>
    );
  }


  export default JobseekerDashboard;