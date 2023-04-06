import React from "react";
import "./ListCard.css";
import DeleteIcon from "@mui/icons-material/Delete";

function ListCard(props) {
    const {id,todo}=props.lists
  return (
    <div className="todo">
      <div className="todo-work">{todo}</div>
      <DeleteIcon style={{ fill: "red" }} onClick={()=>props.clickHandler(id)}/>
    </div>
  );
}

export default ListCard;
