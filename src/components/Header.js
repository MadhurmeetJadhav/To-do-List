import React from "react";
import "./Header.css";
import CheckIcon from '@mui/icons-material/Check';

function Header() {
  return <div className="header">
    <div className="hed">

    <h1 className="heading">Todo List</h1>
    <CheckIcon style={{height:'100px'}}/>
    </div>

  </div>;
}

export default Header;
