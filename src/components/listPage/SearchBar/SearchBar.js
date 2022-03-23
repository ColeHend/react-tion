import React from "react";
import "./SearchBar.css";

const SearchBar = ({
  searchValue,
  setSearchValue,
  searchItems,
  setListItems,
}) => {
  const filterItems = searchItems.filter((product) => {
    return product.includes(searchValue);
  });
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    setListItems(filterItems);
  };
  const shouldDisplayButton = searchValue.length > 0;
  const handleClearClick = () => {
    setSearchValue("");
  };

  return (
    <div>
      <input
        placeholder="search..."
        type="text"
        value={searchValue}
        onChange={handleInputChange}
      />
      {shouldDisplayButton && <button onClick={handleClearClick}>X</button>}
    </div>
  );
};

export default SearchBar;
