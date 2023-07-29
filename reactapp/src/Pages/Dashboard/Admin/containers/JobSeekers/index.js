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
  /**
   * The defaultTitle function returns the title "List of Job Seekers" for the table heading.
   */
  const defaultTitle = () => "List of Job Seekers";
  /* This state variable is used to determine whether there is data available or not. */
  const [hasData, setHasData] = useState(true);

  /* These lines of code are defining state variables and a ref variable for handling search
  functionality in the JobSeekers component table in each columns. */
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  /*  This state variable is
  used to determine the current state of the JobSeekerProfile component, whether it is in "VIEW"
  mode or "MODIFY" mode. It can be updated using the `setViewModifyState` function. */
  const [viewModifyState, setViewModifyState] = useState("VIEW");

  /*  This state variable is used to determine whether
 the modal component is open or closed. The `setIsModalOpen` function can be used to update the
 value of `isModalOpen` and trigger re-rendering of the component. */
  const [isModalOpen, setIsModalOpen] = useState(false);

  /*  This state variable is used to store the ID of the selected job seeker when the
 "View Profile" button is clicked. The `setJsId` function can be used to update the value of `jsId`
 and trigger re-rendering of the component. */
  const [jsId, setJsId] = useState();

  /* This state variable is used to store the data for the JobSeekers component, which will be
  displayed in the table. The `setData` function can be used to update the value of `data` and
  trigger re-rendering of the component. */
  const [data, setData] = useState([]);

  /**
   * The function `showModal` sets the `isModalOpen` state to true, while the function `handleCancel`
   * sets it to false.
   */
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  /**
   * The above function handles search and reset functionality for a table.
   * @param selectedKeys - selectedKeys is an array that contains the selected filter values for a
   * specific column in a table.
   * @param confirm - The `confirm` parameter is a function that is used to confirm the selected search
   * filters. It is typically called after the search filters have been applied.
   * @param dataIndex - The dataIndex parameter represents the key or index of the column being
   * searched. It is used to identify the specific column in the table or data structure.
   */
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  /**
   * The handleReset function clears filters and resets the search text.
   * @param clearFilters - A function that clears any applied filters.
   */
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  /* The `useEffect` hook is used to perform side effects in a functional component. In this case, the
`useEffect` hook is used to load data when the component mounts or when the `hasData` or
`isModalOpen` state variables change. */
  useEffect(() => {
    loadData();
  }, [hasData, isModalOpen]);

  /**
   * The function `loadData` is an asynchronous function that calls a service to retrieve all job
   * seekers and sets the data using the `setData` function, and then sets the `hasData` state to true.
   */
  const loadData = async () => {
    jobSeekerService.getAllJobSeekers(setData);
    setHasData(true);
  };

  /**
   * The function `getColumnSearchProps` returns an object with properties and methods that can be used
   * to implement a search filter for a specific column in a table.
   * @param dataIndex - The `dataIndex` parameter is the key or index of the column in the data source
   * that you want to apply the search functionality to. It is used to identify the specific column in
   * the table.
   */
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

  /* The `columns` constant is an array of objects that define the columns for the table in the
  JobSeekers component. Each object represents a column and has properties such as `title`,
  `dataIndex`, and `render`. */
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

  /* The `headerStyle` constant is an object that defines the CSS styles for the header of the
 JobSeekers component. */
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
        {/* The code `{isModalOpen && jsId !== null && (...)}` is a conditional rendering statement in
        JSX. It checks if the `isModalOpen` state variable is true and the `jsId` variable is not
        null. If both conditions are true, it renders the Job Seeker Profile. */}
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
          {/* The code `{hasData && (...)}` is a conditional rendering statement in JSX. It checks if
          the `hasData` state variable is true. If it is true, it renders the Table. */}
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
