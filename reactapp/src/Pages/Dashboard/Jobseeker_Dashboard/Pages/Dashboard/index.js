import { DotChartOutlined, FormOutlined, } from "@ant-design/icons";
import { Space } from "antd";
import Typography from "antd/es/typography/Typography";
import './index.css';
import DashboardCard from "./Component/DashboardCard";
import JobCard from "./Component/JobCard";
import { useEffect, useState } from "react";
import axios from "axios";


function Dashboard() {
    const [statistics, setStatistics] = useState({});
    const [jobsData, setJobsData] = useState();

    useEffect(() => {
        loadStatistics();
        loadJobs();
    }, []);

    const loadStatistics = async () => {
        // const result = await axios.get(`http://localhost:8081/job-seeker/statistics`);
        // setStatistics(result?.data);
        setStatistics({
            appliedJobs: 5,
            totalJobs: 10
        })
    }
    const loadJobs = async () => {
        // const result = await axios.get(`http://localhost:8081/jobs`);
        // setJobsData(result?.data);
        setJobsData([{
            title: "Job Title 1",
            employerName: "Employer Name 1",
            id: "Job ID 1",
            location: "Job Location 1"
        },{
            title: "Job Title 2",
            employerName: "Employer Name 2",
            id: "Job ID 2",
            location: "Job Location 2"
        },{
            title: "Job Title 3",
            employerName: "Employer Name 3",
            id: "Job ID 3",
            location: "Job Location 3"
        },{
            title: "Job Title 4",
            employerName: "Employer Name 4",
            id: "Job ID 4",
            location: "Job Location 4"
        }]);

    }
    return (
        <div style={{ padding: "5px 0px 0px 50px" }}>
            <Typography.Title level={3}>Welcome User!</Typography.Title>
            <div>
                <Space direction="horizontal" style={{ columnGap: "50px" }}>
                    <DashboardCard icon={<DotChartOutlined style={{ color: "green", fontSize: "60px" }} />} title={<Typography.Title level={4}>Total Jobs</Typography.Title>} value={statistics?.totalJobs} />
                    <DashboardCard icon={<FormOutlined style={{ color: "red", fontSize: "60px" }} />} title={<Typography.Title level={4}>Applied Jobs</Typography.Title>} value={statistics?.appliedJobs} />
                </Space>
            </div >
            <br />
            <Typography.Title level={3}>Jobs List</Typography.Title>
            <div >

                <Space direction="horizontal" style={{ columnGap: "18px", maxWidth: '100%', display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
                    {
                        
                        jobsData?.map((value, index) => 
                            <JobCard key={index} jobDetail={value}/>
                        )
                    }
                </Space>
                <br />
                <br />


            </div>
        </div>
    );
}

export default Dashboard;  
