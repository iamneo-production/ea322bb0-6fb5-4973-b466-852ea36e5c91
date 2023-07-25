import CompanyProfile from "../../containers/CompanyProfile";
import Dashboard from "../../containers/Dashboard";
import JobSeekers from "../../containers/JobSeekers";
import Reports from "../../containers/Reports";

function PageContent({ content, setContent, toast }) {
  const pageContents = {
    Dashboard: <Dashboard setContent={setContent} toast={toast} />,
    CompanyProfile: <CompanyProfile toast={toast} />,
    JobSeekers: <JobSeekers toast={toast} />,
    Reports: <Reports toast={toast} />,
  };
  return <div className="PageContent">{pageContents[content]}</div>;
}
export default PageContent;
