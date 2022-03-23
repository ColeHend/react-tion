import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import TheList from "./list/list";
const database = ["pen", "pencil", "eraser", "white board", "black board"];

export default function ListPage() {
  const [listItems, setListItem] = React.useState(database);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    if (searchValue.length === 0) {
      setListItem(database);
    }
  }, [searchValue]);

  return (
    <>
      <div>
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchItems={listItems}
          setListItems={setListItem}
        />
        <TheList itemList={listItems} />
      </div>
    </>
  );
}
