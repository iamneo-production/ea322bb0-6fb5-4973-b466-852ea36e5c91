import Link from "antd/es/typography/Link";

const Card = ({ company, role, location, posteddate, viewjob }) => {
  return (
    <>
      <section className="card">
        <div className="company">
          <b>Company: </b>
          {company}
        </div>
        <div className="role">
          <b>Role: </b>
          {role}
        </div>
        <div className="location">
          <b>Location: </b>
          {location}
        </div>
        <div className="posteddate">
          <b>Posted On: </b>
          {posteddate}
        </div>
        <div className="viewjob">
          <Link href={viewjob}>View Job</Link>
        </div>
      </section>
    </>
  );
};

export default Card;
