import Input from "../../components/Input";

const Location = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title ">Location</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="location" />
          <span className="checkmark all"></span>
          All Location
        </label>

        <Input
          handleChange={handleChange}
          value="Bangalore"
          title="Bangalore"
          name="location"
        />

        <Input
          handleChange={handleChange}
          value="Chennai"
          title="Chennai"
          name="location"
        />

        <Input
          handleChange={handleChange}
          value="Coimbatore"
          title="Coimbatore"
          name="location"
        />

        <Input
          handleChange={handleChange}
          value="Delhi"
          title="Delhi"
          name="location"
        />

        <Input
          handleChange={handleChange}
          value="Hyderabad"
          title="Hyderabad"
          name="location"
        />
        </div>
    </>
  );
};

export default Location;
