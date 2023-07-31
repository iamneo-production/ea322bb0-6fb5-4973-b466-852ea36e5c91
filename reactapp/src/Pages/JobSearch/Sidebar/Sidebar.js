import Role from "./Role/Role";
import Location from "./Location/Location";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="filter-options-menu">
          <Role handleChange={handleChange} />
          <Location handleChange={handleChange} />
        </div>
      </section>
    </>
  );
};

export default Sidebar;
