import { FaRegIdCard, FaListAlt, FaUsers } from "react-icons/fa";
import { FcOrganization } from "react-icons/fc";
import { TbCategory } from "react-icons/tb";
import { Statistic, Typography, Card, Space, Button } from "antd";
import "./index.css";
import InterviewPrepImage from "../../assets/images/interviewprep.png";
import MultiCarousel from "../../components/Carousel";
import { useEffect, useState } from "react";
import axios from "axios";
function Dashboard({ setContent }) {
  const [companies, setCompanies] = useState([]);
  const [statistics, setStatistics] = useState({});
  useEffect(() => {
    loadStatistics();
  }, [statistics]);

  const loadStatistics = async () => {
    const result = await axios.get("http://localhost:4000/admin/statistics");
    setStatistics(result?.data);
  };

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
        <Typography.Title level={4}> Welcome Admin</Typography.Title>
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
          value={statistics.jobsPosted}
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
          value={statistics?.applications}
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
          title={"Companies"}
          value={statistics?.companies}
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
          value={statistics?.jobSeekers}
        />
      </Space>

      <div className="top-category-carousel">
        <div
          className="top-category-head"
          style={{
            margin: "10px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 className="top-category-heading">All Companies</h2>
          <Button
            type="primary"
            icon={<TbCategory />}
            size={"large"}
            onClick={() => setContent("CompanyProfile")}
          >
            View All Companies
          </Button>
        </div>
        <MultiCarousel slides={companies} slidesToShow={4} />
      </div>
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
