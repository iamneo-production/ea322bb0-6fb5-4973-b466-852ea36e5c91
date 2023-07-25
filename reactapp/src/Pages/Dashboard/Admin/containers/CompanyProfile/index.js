import { Space, Layout, Button, Input, Modal } from "antd";
import MyTable from "../../components/Table";
import { useState, useRef, useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import employerService from "../../../../../services/employerService";
import EmployerProfile from "../../../../Employer/Components/EmployerProfile";
const { Header, Content } = Layout;
function CompanyProfile({ toast }) {
  const defaultTitle = () => "List of Employers";
  const [hasData, setHasData] = useState(true); // state is required
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const [viewModifyState, setViewModifyState] = useState("VIEW");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [empId, setEmpId] = useState();

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
    employerService.getAllEmployers(setData);
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
      title: "Description",
      dataIndex: "description",

      ...getColumnSearchProps("description"),
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
              setEmpId(id.id);
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
        <Header style={headerStyle}>Employers</Header>
        {isModalOpen && empId !== null && (
          <Modal
            style={{ padding: "0" }}
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
          >
            <EmployerProfile
              type={viewModifyState}
              setViewModifyState={setViewModifyState}
              empId={empId}
              toast={toast}
              modalClose={handleCancel}
              title={"Employer Profile"}
            />
          </Modal>
        )}
        <Content>
          {hasData && (
            <MyTable
              rowKey={(tableColumns) => tableColumns.id}
              defaultTitle={defaultTitle}
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
export default CompanyProfile;
