import React from "react";

const List = (props) => {
  const col = props.col ? `c-list--${props.col}` : "";
  let children = [];
  // console.log;
  if (props.children.length === undefined) {
    children = [props.children];
  } else {
    children = props.children;
  }

  return (
    <div className={`c-list ${col}`}>
      {children.map((item, index) => (
        <div key={index} className="c-list__item">
          {item.props.children}
        </div>
      ))}
    </div>
  );
};

export default List;
