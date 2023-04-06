import React from "react";
import "./List.css";
import ListCard from "./ListCard";

function List(props) {
  const remListId = (id) => {
    props.getListId(id);
  };
  const TodoLists = props.ListItems.map((lists) => {
    return <ListCard lists={lists} clickHandler={remListId} key={lists.id} />;
  });
  return <div className="List">{TodoLists}</div>;
}

export default List;
