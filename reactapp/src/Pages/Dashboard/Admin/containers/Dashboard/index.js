import { FaRegIdCard, FaListAlt, FaUsers } from "react-icons/fa";
import { FcOrganization } from "react-icons/fc";
import { Statistic, Typography, Card, Space } from "antd";
import "./index.css";
import InterviewPrepImage from "../../assets/images/interviewprep.png";
import { useEffect, useState } from "react";
import adminService from "../../../../../services/adminService";
/**
 * The Dashboard component is a JavaScript function that renders a dashboard with statistics and cards
 * displaying information.
 * @returns The Dashboard component is being returned.
 */
function Dashboard() {
  /*  This state variable is used to
  store the statistics data that will be fetched from the server. The `setStatistics` function is
  used to update the value of the `statistics` state variable. */
  const [statistics, setStatistics] = useState({});

  /**
   * The function `loadStatistics` is an asynchronous function that calls the `getStatistics` method
   * from the `adminService` and passes the `setStatistics` function as a callback.
   */
  const loadStatistics = async () => {
    adminService.getStatistics(setStatistics);
  };

  /* The `useEffect` hook is used to perform side effects in a functional component. In this case, it is
used to call the `loadStatistics` function when the `statistics` state variable changes. */
  useEffect(() => {
    loadStatistics();
  }, [statistics]);

  return (
    <div>
      <Card
        style={{ width: "100%", height: "200px" }}
        cover={
          <div
            style={{
              width: "100%",
              backgroundColor: "#8282f2",
              height: "200px",
              position: "absolute",
              opacity: 0.5,
              borderRadius: "100% 0% 0% 0%",
            }}
          ></div>
        }
      >
        <Typography.Title level={4}>
          {" "}
          {`Welcome Admin (${localStorage.getItem("username")})`}
        </Typography.Title>
        <p className="welcome-message">Today's Reports</p>
        <img
          src={InterviewPrepImage}
          alt="Interview Preparation"
          height="200px"
          className="cover-image"
        />
      </Card>
      <Space
        direction="horizontal"
        style={{ columngap: "35px", width: "100%", margin: "10px 0" }}
      >
        {/* The `<DashboardCard>` component is being used to display a statistic on the dashboard. It
        takes in three props: `icon`, `title`, and `value`. */}
        <DashboardCard
          icon={
            <FaRegIdCard
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 40,
                fontSize: 60,
                padding: 10,
              }}
            />
          }
          title={"Jobs Posted"}
          value={statistics?.["job-posted"]}
        />
        <DashboardCard
          icon={
            <FaListAlt
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 40,
                fontSize: 60,
                padding: 10,
              }}
            />
          }
          title={"Applications"}
          value={statistics?.["job-application"]}
        />
        <DashboardCard
          icon={
            <FcOrganization
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 40,
                fontSize: 60,
                padding: 10,
              }}
            />
          }
          title={"Employers"}
          value={statistics?.employer}
        />
        <DashboardCard
          icon={
            <FaUsers
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 40,
                fontSize: 60,
                padding: 10,
              }}
            />
          }
          title={"Job Seekers"}
          value={statistics?.["job-seeker"]}
        />
      </Space>
    </div>
  );
}
function DashboardCard({ title, value, icon }) {
  return (
    <>
      <Card>
        <Space direction="horizontal">
          {icon}
          <Statistic title={title} value={value} />
        </Space>
      </Card>
    </>
  );
}
export default Dashboard;
