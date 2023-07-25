import { DotChartOutlined, FormOutlined } from "@ant-design/icons";
import { Space } from "antd";
import Typography from "antd/es/typography/Typography";
import "./index.css";
import DashboardCard from "./Component/DashboardCard";
import { useEffect, useState } from "react";
import employerService from "../../../../../services/employerService";
function Dashboard() {
  const [statistics, setStatistics] = useState({});
  const userName = localStorage.getItem("employerName");
  const employerId = localStorage.getItem("employerId");
  useEffect(() => {
    loadStatistics();
  }, []);
  const loadStatistics = async () => {
    employerService.getEmployerStatistics(employerId, setStatistics);
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
            title={<Typography.Title level={4}>Jobs Posted</Typography.Title>}
            value={statistics?.jobsPosted}
          />
          <DashboardCard
            icon={<FormOutlined style={{ color: "red", fontSize: "60px" }} />}
            title={
              <Typography.Title level={4}>Total Applicants</Typography.Title>
            }
            value={statistics?.applicants}
          />
        </Space>
      </div>
      <br />
    </div>
  );
}

export default Dashboard;
