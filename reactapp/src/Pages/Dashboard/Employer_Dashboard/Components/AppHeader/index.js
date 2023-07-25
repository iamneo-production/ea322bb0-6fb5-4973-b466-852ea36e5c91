import { UserOutlined, PoweroffOutlined } from "@ant-design/icons";
import { Image, Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.css";
import authService from "../../../../../services/auth";
import { useState } from "react";
import EmployerProfile from "../../../../Employer/Components/EmployerProfile";
function AppHeader({ toast, setEmployerName, employerName }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModifyState, setViewModifyState] = useState("VIEW");
  const [empId, setEmpId] = useState();
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
            setEmpId(localStorage.getItem("employerId"));
            showModal();
          }}
        >
          <UserOutlined style={{ marginRight: "5px" }} />
          {employerName}
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
      {isModalOpen && empId !== null && (
        <Modal
          style={{ padding: "0" }}
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
        >
          <EmployerProfile
            setEmployerName={setEmployerName}
            type={viewModifyState}
            setViewModifyState={setViewModifyState}
            empId={empId}
            toast={toast}
            modalClose={handleCancel}
            title={`${employerName} Profile`}
          />
        </Modal>
      )}
    </div>
  );
}

export default AppHeader;
