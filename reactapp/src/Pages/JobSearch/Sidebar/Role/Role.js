import "./Role.css";
import Input from "../../components/Input";

function Role({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Job Role</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="role" />
          <span className="checkmark "></span>All Roles
        </label>
        <Input
          handleChange={handleChange}
          value="Developer"
          title="Developer"
          name="role"
        />
        <Input
          handleChange={handleChange}
          value="IT-Support"
          title="IT-Support"
          name="role"
        />
        <Input
          handleChange={handleChange}
          value="Tester"
          title="Tester"
          name="role"
        />
        <Input
          handleChange={handleChange}
          value="Analyst"
          title="Analyst"
          name="role"
        />
      </div>
    </div>
  );
}

export default Role;
