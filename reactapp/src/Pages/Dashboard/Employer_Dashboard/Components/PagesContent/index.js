import ApplicationsReceived from "../../Pages/Applications/index";
import PostedJobs from "../../Pages/PostedJobs";
import Dashboard from "../../Pages/Dashboard";
import { useEffect } from "react";

function PageContent({ content, setContent, toast, employerName }) {
  const pageContents = {
    Dashboard: <Dashboard setContent={setContent} toast={toast} />,
    PostedJobs: <PostedJobs setContent={setContent} toast={toast} />,
    applicationsReceived: <ApplicationsReceived toast={toast} />,
  };
  useEffect(() => {}, [employerName]);
  return (
    <div
      style={{
        marginTop: "3%",
        minWidth: "950px",
        width: "1450px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="PageContent"
    >
      {pageContents[content]}
    </div>
  );
}

export default PageContent;
