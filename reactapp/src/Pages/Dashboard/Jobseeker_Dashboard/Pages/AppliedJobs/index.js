import Typography from "antd/es/typography/Typography";
import { Button, Table, Space } from "antd";
import { useEffect, useState } from "react";
import "./index.css";
import jobSeekerService from "../../../../../services/jobSeekerService";

function Appliedjobs({ setContent, toast }) {
  const [dataSource, setDataSource] = useState();
  const jobSeekerId = localStorage.getItem("jobSeekerId");
  const [hasData, setHasData] = useState(false);
  useEffect(() => {
    loadData();
  }, [hasData]);
  const loadData = async () => {
    jobSeekerService.getAllAppliedJobs(jobSeekerId, setDataSource);
    setHasData(true);
  };
  const columns = [
    {
      key: "1",
      title: "S.No",
      dataIndex: "id",
      align: "center",
      render: (text, object, index) => index + 1,
    },
    {
      key: "2",
      title: "Job Title",
      dataIndex: "title",
      align: "center",
    },
    {
      key: "3",
      title: "Employer",
      dataIndex: "employer",
      align: "center",
      render: (item) => item?.name,
    },
    {
      key: "4",
      title: "Requirements",
      dataIndex: "requirements",
      align: "center",
    },
    {
      key: "4",
      title: "Location",
      dataIndex: "location",
      align: "center",
    },
  ];

  return (
    <div style={{ padding: "5px 0px 0px 50px" }} className="AppliedJob">
      <Typography.Title level={3}>Applied Jobs</Typography.Title>

      <Space className="Applied_job_topic" direction="horizontal">
        <Typography.Title
          level={4}
          style={{ marginTop: "10px", marginLeft: "20px", color: "white" }}
        >
          Jobs Applied Table
        </Typography.Title>

        <Button
          type="primary"
          style={{ marginLeft: "38rem" }}
          onClick={() => setContent("applyForJobs")}
        >
          Apply for Jobs
        </Button>
      </Space>

      <header>
        <br />
        {hasData && (
          <Table
            rowKey={(dataSource) => dataSource.id}
            columns={columns}
            dataSource={dataSource}
            className="Applied_job_table"
            style={{ width: "950px" }}
          ></Table>
        )}
      </header>
    </div>
  );
}

export default Appliedjobs;
