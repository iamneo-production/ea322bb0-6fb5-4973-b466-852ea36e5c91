import { Layout } from "antd";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import SideMenu from "./components/SideMenu";
import PageContent from "./components/PageContent";
import { useState } from "react";

const { Sider, Content } = Layout;

function Admin() {
  const contentStyle = {
    minHeight: 120,
  };
  const siderStyle = {
    backgroundColor: "white",
    color: "pink",
    width: "30%",
  };
  const [content, setContent] = useState("Dashboard");
  return (
    <>
      <Layout>
        <AppHeader />
        <Layout hasSider>
          <Sider style={siderStyle}>
            <SideMenu setContent={setContent} />
          </Sider>
          <Content style={contentStyle}>
            <PageContent content={content} setContent={setContent} />
          </Content>
        </Layout>
        <AppFooter />
      </Layout>
    </>
  );
}
export default Admin;
