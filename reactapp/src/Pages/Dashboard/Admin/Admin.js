import { Layout } from "antd";
import AppHeader from "./components/AppHeader";
import SideMenu from "./components/SideMenu";
import PageContent from "./components/PageContent";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
/* The `<ToastContainer />` component is used to display toast notifications in the
application. It is part of the `react-toastify` library, which provides an easy way to show
notifications to the user. The `<ToastContainer />` component is typically placed at the top
level of the application and handles the rendering and positioning of the toast
notifications. */
const { Sider, Content } = Layout;

/**
 * The Admin function is a React component that renders a layout with a header, sidebar, content area,
 * and toast container.
 * @returns The Admin component is returning a JSX code that represents the layout of an admin
 * dashboard. It includes a header, a sidebar, a content area, and a toast container. The content area
 * is dynamically rendered based on the value of the `content` state variable.
 */
function Admin() {
  /* The `contentStyle` and `siderStyle` variables are defining styles for the content and sider
components in the Admin component. */
  const contentStyle = {
    minHeight: 120,
  };
  const siderStyle = {
    backgroundColor: "white",
    color: "pink",
    width: "30%",
  };
  /* `const [content, setContent] = useState("Dashboard");` is a line of code using the `useState` hook
  in React which is used to handle the page changes */
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
            <PageContent
              content={content}
              toast={toast}
              setContent={setContent}
            />
          </Content>
        </Layout>

        <ToastContainer />
      </Layout>
    </>
  );
}
export default Admin;
