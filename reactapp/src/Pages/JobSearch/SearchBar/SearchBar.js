import "./SearchBar.css";

const SearchBar = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          style={{ width: "200px" }}
          className="search-bar"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Search by Employer"
        />
      </div>
    </nav>
  );
};

export default SearchBar;
