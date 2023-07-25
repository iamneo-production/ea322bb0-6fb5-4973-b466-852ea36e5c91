import Typography from "antd/es/typography/Typography";
import { Table, Modal, Space } from "antd";
import { useEffect, useState } from "react";
import "./index.css";
import employerService from "../../../../../services/employerService";
import JobApplication from "../../../../PostJobAndEditJob/JobApplication/JobApplication";

function ApplicationsReceived({ setContent, toast }) {
  const [dataSource, setDataSource] = useState();
  const employerId = localStorage.getItem("employerId");
  const [hasData, setHasData] = useState(false);
  const [jobApplicationData, setJobApplicationData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    loadData();
  }, [hasData]);
  const loadData = async () => {
    employerService.getAllCandidates(employerId, setDataSource);
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
      title: "Job Seeker Name",
      dataIndex: "jobSeeker-name",
      align: "center",
    },
    {
      key: "3",
      title: "Job Title",
      dataIndex: "job-title",
      align: "center",
    },
    {
      key: "4",
      title: "Requirements",
      dataIndex: "job-requirements",
      align: "center",
    },
    {
      key: "5",
      title: "Location",
      dataIndex: "job-location",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      width: "15%",
      render: (item) => (
        <Space size="middle">
          <p
            className="view-profile"
            onClick={() => {
              setJobApplicationData(item);
              showModal();
            }}
          >
            View
          </p>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "5px 0px 0px 50px" }} className="AppliedJob">
      <Space className="Applied_job_topic" direction="horizontal">
        <Typography.Title
          level={4}
          style={{ marginTop: "10px", marginLeft: "20px", color: "white" }}
        >
          Applications Received
        </Typography.Title>
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
      {isModalOpen && (
        <Modal
          style={{ padding: "0", maxHeight: "800px", overflow: "scroll" }}
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
        >
          <JobApplication
            toast={toast}
            modalClose={handleCancel}
            title={"Job Details"}
            jobApplicationData={jobApplicationData}
          />
        </Modal>
      )}
    </div>
  );
}

export default ApplicationsReceived;
