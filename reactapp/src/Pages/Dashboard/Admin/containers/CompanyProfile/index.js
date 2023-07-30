import { Space, Layout, Button, Input, Modal } from "antd";
import MyTable from "../../components/Table";
import { useState, useRef, useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import employerService from "../../../../../services/employerService";
import EmployerProfile from "../../../../Employer/Components/EmployerProfile";
/* In this code, `const { Header, Content } = Layout;` is using object destructuring to extract the
`Header` and `Content` components from the `Layout` module. . */
const { Header, Content } = Layout;

/**
 * The `CompanyProfile` function is a React component that displays a table of employers and allows
 * users to search and view individual employer profiles.
 * @returns The CompanyProfile component is returning a JSX element, which represents the structure and
 * content of the component's UI.
 */
function CompanyProfile({ toast }) {
  /**
   * The defaultTitle function returns the string "List of Employers" which is the title for the table.
   */
  const defaultTitle = () => "List of Employers";
  /* The line `const [hasData, setHasData] = useState(false);` is declaring a state variable `hasData`
  and a corresponding setter function `setHasData` using the `useState` hook. The initial value of
  `hasData` is set to `false`. This state variable is used to track whether the data has been loaded
  or not. */
  const [hasData, setHasData] = useState(false);

  /* The code `const [searchText, setSearchText] = useState("");` and `const [searchedColumn,
  setSearchedColumn] = useState("");` are using the `useState` hook to declare state variables
  `searchText` and `searchedColumn` and their corresponding setter functions `setSearchText` and
  `setSearchedColumn`. */
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  /*  This state variable is
 used to track the current state of the view or modify mode in the component. It can be updated
 using the `setViewModifyState` function. */
  const [viewModifyState, setViewModifyState] = useState("VIEW");

  /* This state variable is used to track whether the
 modal is open or not. */
  const [isModalOpen, setIsModalOpen] = useState(false);
  /* This state variable is used to track the ID of the employer for which the
  profile is being viewed. It can be updated using the `setEmpId` function. */
  const [empId, setEmpId] = useState();

  /* This state variable is used to store the data for the table of
  employers. The `setData` function can be used to update the value of `data` in the component. */
  const [data, setData] = useState([]);

  /**
   * The function `showModal` sets the `isModalOpen` state to `true`, while the function `handleCancel`
   * sets it to `false`.
   */
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  /**
   * The function handles search and reset functionality for a table.
   * @param selectedKeys - selectedKeys is an array that contains the selected filter values for a
   * specific column in a table.
   * @param confirm - The `confirm` parameter is a function that is used to confirm the selected search
   * filters. It is typically called after the search filters have been applied.
   * @param dataIndex - The `dataIndex` parameter represents the key or index of the column being
   * searched. It is used to identify the column in the table or data structure where the search is being
   * performed.
   */
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  /**
   * The handleReset function clears the filters and resets the search text.
   * @param clearFilters - The clearFilters parameter is a function that is used to clear any applied
   * filters in a search functionality.
   */
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  /* The `useEffect` hook is used to perform side effects in a functional component. In this case, the
  `useEffect` hook is being used to load data when the component mounts or when the `hasData` or
  `isModalOpen` state variables change. */
  useEffect(() => {
    loadData();
  }, [hasData, isModalOpen]);

  /**
   * The function `loadData` is an asynchronous function that calls the `getAllEmployers` method from
   * the `employerService` and sets the data using the `setData` function, then sets the `hasData` state
   * to true.
   */
  const loadData = async () => {
    employerService.getAllEmployers(setData);
    setHasData(true);
  };

  /**
   * The function `getColumnSearchProps` returns an object with properties and methods that can be used
   * to implement a search filter for a specific column in a table. This is actually a feature provided by antd package itself
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

  /* The `const columns` is an array of objects that defines the columns for the table in the
  `CompanyProfile` component. Each object represents a column and has properties such as `title`,
  `dataIndex`, `render`, `width`, and `...getColumnSearchProps`. */
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
      // ...getColumnSearchProps("name"),
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
  /* The `headerStyle` constant is an object that defines the CSS styles for the header component.
   */
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
        {/* The code `{isModalOpen && empId !== null && (...)}` is a conditional rendering statement. It
        checks if the `isModalOpen` state variable is `true` and the `empId` is not `null`. If both
  conditions are `true`, it renders the Employer Profile inside the parentheses. */}
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
          {/* The code `{hasData && (...)}` is a conditional rendering statement. It checks if the
          `hasData` state variable is `true`. If it is `true`, it renders the Table. */}
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
