import CompanyProfile from "../../containers/CompanyProfile";
import Dashboard from "../../containers/Dashboard";
import JobSeekers from "../../containers/JobSeekers";
import Reports from "../../containers/Reports";

/**
 * The PageContent function returns a div element containing the content based on the value of the
 * "content" prop.
 * @returns The PageContent component is returning a div with the className "PageContent" and the value
 * of the pageContents object based on the content prop. The value of the pageContents object is a JSX
 * element corresponding to the content prop.
 */
function PageContent({ content, setContent, toast }) {
  /* The `pageContents` constant is an object that maps different content names to JSX elements. Each
 key in the object represents a content name, and the corresponding value is a JSX element that
 corresponds to that content. */
  const pageContents = {
    Dashboard: <Dashboard setContent={setContent} toast={toast} />,
    CompanyProfile: <CompanyProfile toast={toast} />,
    JobSeekers: <JobSeekers toast={toast} />,
    Reports: <Reports toast={toast} />,
  };
  return <div className="PageContent">{pageContents[content]}</div>;
}
export default PageContent;
