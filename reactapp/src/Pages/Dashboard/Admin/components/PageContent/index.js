import Applications from "../../containers/Applications";
import CompanyProfile from "../../containers/CompanyProfile";
import Dashboard from "../../containers/Dashboard";
import JobSeekers from "../../containers/JobSeekers";
import Reports from "../../containers/Reports";

function PageContent({ content, setContent }) {
  const pageContents = {
    Dashboard: <Dashboard setContent={setContent} />,
    CompanyProfile: <CompanyProfile />,
    JobSeekers: <JobSeekers />,
    Applications: <Applications />,
    Reports: <Reports />,
  };
  return <div className="PageContent">{pageContents[content]}</div>;
}
export default PageContent;
