import Role from "./Role/Role";
import Location from "./Location/Location";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <Role handleChange={handleChange} />
        <Location handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
