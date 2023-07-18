import Applications from "../../containers/Applications";
import CompanyProfile from "../../containers/CompanyProfile";
import Dashboard from "../../containers/Dashboard";
import JobSeekers from "../../containers/JobSeekers";

function PageContent({ content, setContent }) {
  const pageContents = {
    Dashboard: <Dashboard setContent={setContent} />,
    CompanyProfile: <CompanyProfile />,
    JobSeekers: <JobSeekers />,
    Applications: <Applications />
  };
  return <div className="PageContent">{pageContents[content]}</div>;
}
export default PageContent;
