import { useEffect } from "react";
import JobSearchPage from "../../../../JobSearch/JobSearchPage";
import Appliedjobs from "../../Pages/AppliedJobs";
import Dashboard from "../../Pages/Dashboard";

function PageContent({ content, setContent, toast, jobSeekerName }) {
  const pageContents = {
    Dashboard: <Dashboard setContent={setContent} toast={toast} />,
    AppliedJobs: <Appliedjobs setContent={setContent} toast={toast} />,
    applyForJobs: <JobSearchPage toast={toast} />,
  };
  useEffect(() => {}, [jobSeekerName]);
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
