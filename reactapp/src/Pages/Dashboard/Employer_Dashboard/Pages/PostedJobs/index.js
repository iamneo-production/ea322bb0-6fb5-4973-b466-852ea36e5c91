import Typography from "antd/es/typography/Typography";
import { Button, Table, Modal, Space } from "antd";
import { useEffect, useState } from "react";
import "./index.css";
import jobService from "../../../../../services/jobService";
import Job from "../../../../PostJobAndEditJob/jobs/Job";
function PostedJobs({ setContent, toast }) {
  const [dataSource, setDataSource] = useState();
  const employerId = localStorage.getItem("employerId");
  const [hasData, setHasData] = useState(false);
  const [jobId, setJobId] = useState();
  const [viewModifyState, setViewModifyState] = useState("VIEW");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [toBeDeletedJob, setToBeDeletedJob] = useState(null);
  const showDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };
  const handleDeleteOk = () => {
    deleteJobById(toBeDeletedJob);
    setIsDeleteModalOpen(false);
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSuccess = (status) => {
    if (status >= 200 && status < 300) {
      toast.success("Job Deleted Successfully");
    } else {
      toast.error("Job Deletion Failed");
    }
  };
  useEffect(() => {
    loadData();
  }, [hasData, isModalOpen, onSuccess]);
  const loadData = async () => {
    jobService.getAllJobsPostedByEmployer(employerId, setDataSource);
    setHasData(true);
  };

  const deleteJobById = (id) => {
    jobService.deleteJobById(id, onSuccess);
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
      title: "Description",
      dataIndex: "description",
      align: "center",
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
    {
      title: "Action",
      key: "action",
      width: "15%",
      render: (id) => (
        <Space size="middle">
          <p
            className="view-profile"
            onClick={() => {
              setJobId(id.id);
              showModal();
            }}
          >
            View
          </p>
          <p
            className="view-profile"
            onClick={() => {
              setToBeDeletedJob(id.id);
              showDeleteModal();
            }}
          >
            Delete
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
          style={{
            marginTop: "10px",
            color: "white",
            width: "150px",
          }}
        >
          Jobs Posted
        </Typography.Title>
        <Button
          type="primary"
          style={{ marginLeft: "38rem" }}
          onClick={() => {
            setViewModifyState("ADD");
            showModal();
          }}
        >
          Post a New Job
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
      {isModalOpen && jobId !== null && (
        <Modal
          style={{ padding: "0" }}
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
        >
          <Job
            type={viewModifyState}
            setViewModifyState={setViewModifyState}
            jobId={jobId}
            toast={toast}
            modalClose={handleCancel}
            title={"Job Details"}
          />
        </Modal>
      )}
      {showDeleteModal && (
        <Modal
          title="Delete Job"
          open={isDeleteModalOpen}
          onOk={handleDeleteOk}
          onCancel={handleDeleteCancel}
        >
          <p>Are you sure to delete the job?</p>
        </Modal>
      )}
    </div>
  );
}

export default PostedJobs;
