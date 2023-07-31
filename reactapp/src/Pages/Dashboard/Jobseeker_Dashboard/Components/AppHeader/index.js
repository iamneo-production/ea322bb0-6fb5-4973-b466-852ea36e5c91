import { UserOutlined, PoweroffOutlined } from "@ant-design/icons";
import { Image, Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.css";
import authService from "../../../../../services/auth";
import { useState } from "react";
import JobSeekerProfile from "../../../../JobSeeker/Components/JobSeekerProfile";

function AppHeader({ toast, setJobSeekerName, jobSeekerName }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModifyState, setViewModifyState] = useState("VIEW");
  const [jsId, setJsId] = useState();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setViewModifyState("VIEW");
    setIsModalOpen(false);
  };
  return (
    <div className="AppHeader1">
      <Image
        width={110}
        src="https://i.postimg.cc/3r0pdVjy/Logo-4.png"
        alt="Logo"
        className="image-on-top"
      />

      <div style={{ display: "flex", alignItems: "center", columnGap: "40px" }}>
        <Button
          type="primary"
          style={{ display: "flex", alignItems: "center", fontSize: "15px" }}
          onClick={() => {
            setJsId(localStorage.getItem("jobSeekerId"));
            showModal();
          }}
        >
          <UserOutlined style={{ marginRight: "5px" }} />
          {jobSeekerName}
        </Button>
        <Button
          type="primary"
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => {
            authService.logout();
            navigate("/");
          }}
        >
          <PoweroffOutlined style={{ marginRight: "5px" }} />
          Log Out
        </Button>
      </div>
      {isModalOpen && jsId !== null && (
        <Modal
          style={{ padding: "0" }}
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
        >
          <JobSeekerProfile
            setJobSeekerName={setJobSeekerName}
            type={viewModifyState}
            setViewModifyState={setViewModifyState}
            jsId={jsId}
            toast={toast}
            modalClose={handleCancel}
            title={"Job Seeker Profile"}
          />
        </Modal>
      )}
    </div>
  );
}

export default AppHeader;
