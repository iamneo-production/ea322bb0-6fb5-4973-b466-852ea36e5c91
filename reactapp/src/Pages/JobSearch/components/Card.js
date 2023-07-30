const Card = ({
  showModal,
  setJobId,
  id,
  employer,
  role,
  location,
  requirements,
  setAlreadyApplied,
}) => {
  return (
    <>
      <section className="jobcard">
        <div className="company">
          <b>Employer: </b>
          {employer}
        </div>
        <div className="role">
          <b>Role: </b>
          {role}
        </div>
        <div className="location">
          <b>Location: </b>
          {location}
        </div>
        <div
          className="requirements"
          style={{ height: "50px", textOverflow: "ellipsis" }}
        >
          <b>Requirements </b>
          {requirements}
        </div>
        <div className="viewjob">
          <p
            className="viewJobDetails"
            onClick={() => {
              setAlreadyApplied(
                localStorage.getItem("jobsApplied")?.includes(String(id))
              );
              setJobId(id);
              showModal();
            }}
          >
            View Job
          </p>
        </div>
      </section>
    </>
  );
};

export default Card;
