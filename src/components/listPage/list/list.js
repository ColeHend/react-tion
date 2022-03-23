import React from "react";

const TheList = (props) => {
  return (
    <ul>
      {props.itemList.map((item) => {
        return React.createElement("li", { key: item }, item);
      })}
    </ul>
  );
};

export default TheList;
