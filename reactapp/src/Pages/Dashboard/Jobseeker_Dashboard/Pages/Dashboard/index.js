import { DotChartOutlined, FormOutlined } from "@ant-design/icons";
import { Space } from "antd";
import Typography from "antd/es/typography/Typography";
import "./index.css";
import DashboardCard from "./Component/DashboardCard";
import { useEffect, useState } from "react";
import jobSeekerService from "../../../../../services/jobSeekerService";

function Dashboard() {
  const [statistics, setStatistics] = useState({});
  const userName = localStorage.getItem("jobSeekerName");
  const jobSeekerId = localStorage.getItem("jobSeekerId");
  useEffect(() => {
    loadStatistics();
  }, []);

  const loadStatistics = async () => {
    jobSeekerService.getJobSeekerStatistics(jobSeekerId, setStatistics);
  };

  return (
    <div style={{ padding: "5px 0px 0px 50px" }}>
      <Typography.Title level={3}>Welcome {userName}</Typography.Title>
      <div>
        <Space direction="horizontal" style={{ columnGap: "50px" }}>
          <DashboardCard
            icon={
              <DotChartOutlined style={{ color: "green", fontSize: "60px" }} />
            }
            title={<Typography.Title level={4}>Total Jobs</Typography.Title>}
            value={statistics?.totalJobs}
          />
          <DashboardCard
            icon={<FormOutlined style={{ color: "red", fontSize: "60px" }} />}
            title={<Typography.Title level={4}>Applied Jobs</Typography.Title>}
            value={statistics?.jobsApplied}
          />
        </Space>
      </div>
      <br />
    </div>
  );
}

export default Dashboard;
