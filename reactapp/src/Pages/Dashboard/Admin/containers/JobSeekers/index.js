import { Space, Layout, Button, Input, Modal } from "antd";
import MyTable from "../../components/Table";
import { useState, useRef, useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import jobSeekerService from "../../../../../services/jobSeekerService";
import JobSeekerProfile from "../../../../JobSeeker/Components/JobSeekerProfile";
import "./index.css";
const { Header, Content } = Layout;
function JobSeekers({ toast }) {
  const defaultTitle = () => "List of Job Seekers";
  const [hasData, setHasData] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const [viewModifyState, setViewModifyState] = useState("VIEW");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jsId, setJsId] = useState();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    loadData();
  }, [hasData, isModalOpen]);
  const loadData = async () => {
    jobSeekerService.getAllJobSeekers(setData);
    setHasData(true);
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>

          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "S.No",
      dataIndex: "id",

      render: (text, object, index) => index + 1,
      width: "6%",
    },
    {
      title: "Name",
      dataIndex: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Email ID",
      dataIndex: "emailId",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Skills",
      dataIndex: "skills",
      ...getColumnSearchProps("skills"),
    },
    {
      title: "Experience",
      dataIndex: "experience",
      ...getColumnSearchProps("experience"),
    },

    {
      title: "Location",
      dataIndex: "location",
      ...getColumnSearchProps("location"),
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
              setJsId(id.id);
              showModal();
            }}
          >
            View Profile
          </p>
        </Space>
      ),
    },
  ];
  const tableColumns = columns.map((item, key) => ({
    ...item,
    ...{ key: key },
    ellipsis: true,
  }));
  const headerStyle = {
    textAlign: "center",
    color: "#000",
    fontSize: "25px",
    fontWeight: "bold",
    letterSpacing: "2px",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#8282f296",
    position: "sticky",
  };
  return (
    <div>
      <Layout>
        {isModalOpen && jsId !== null && (
          <Modal
            style={{ padding: "0" }}
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
          >
            <JobSeekerProfile
              type={viewModifyState}
              setViewModifyState={setViewModifyState}
              jsId={jsId}
              toast={toast}
              modalClose={handleCancel}
              title={"Job Seeker Profile"}
            />
          </Modal>
        )}
        <Header style={headerStyle}>Job Seekers</Header>

        <Content>
          {hasData && (
            <MyTable
              defaultTitle={defaultTitle}
              rowKey={(tableColumns) => tableColumns.id}
              columns={tableColumns}
              data={data}
              hasData={hasData}
              setHasData={setHasData}
            />
          )}
        </Content>
      </Layout>
    </div>
  );
}
export default JobSeekers;
