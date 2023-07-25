import React, { useEffect } from "react";
import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Products from "./Products/Products";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import jobService from "../../services/jobService";
import { Modal } from "antd";
import Job from "../PostJobAndEditJob/jobs/Job";
function JobSearchPage({ toast }) {
  
  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");
  const [products, setData] = useState({});
  const [hasData, setHasData] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewModifyState, setViewModifyState] = useState("VIEW");
  const [alreadyApplied, setAlreadyApplied] = useState(false);
  const [jobId, setJobId] = useState();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    loadData();
  }, [hasData, isModalOpen]);

  const loadData = async () => {
    await jobService.getAllJobs(setData);
    setHasData(true);
  };
  const handleInputChange = (event) => {
    setQuery(event?.target?.value);
  };

  // ------------ Button Filtering -----------
  const [newQuery, setNewQuery] = useState({ role: "", location: "" });
  const handleChange = (event) => {
    setNewQuery({ ...newQuery, [event?.target?.name]: event?.target?.value });
  };

  function filteredData(products) {
    const filteredItems = products?.filter(
      (product) =>
        product?.employer?.name?.toLowerCase()?.indexOf(query?.toLowerCase()) !==
        -1
    );
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (newQuery?.role?.length > 0) {
      filteredProducts = filteredProducts?.filter(
        ({ role }) => role === newQuery?.role
      );
    }

    if (newQuery?.location?.length > 0) {
      filteredProducts = filteredProducts?.filter(
        ({ location }) => location === newQuery?.location
      );
    }
    return filteredProducts?.map(
      ({ id, employer, title, location, requirements, viewjob }) => (
        <Card
          id={id}
          employer={employer?.name}
          role={title}
          location={location}
          requirements={requirements}
          viewjob={viewjob}
          showModal={showModal}
          setJobId={setJobId}
          setAlreadyApplied={setAlreadyApplied}
        />
      )
    );
  }
  return (
    <>
      <div style={{ marginTop: "-44px" }}>
        <SearchBar query={query} handleInputChange={handleInputChange} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            height: "450px",
          }}
        >
          <Sidebar handleChange={handleChange} />

          {hasData && <Products result={filteredData(products)} />}
        </div>
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
            alreadyApplied={alreadyApplied}
          />
        </Modal>
      </div>
    </>
  );
}

export default JobSearchPage;
