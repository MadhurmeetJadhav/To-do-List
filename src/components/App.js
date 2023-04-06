import React, { useState, useEffect } from "react";
import { v4 } from 'uuid';
import "./App.css";
import Header from "./Header";
import AddList from "./AddList";
import List from "./List";
function App() {
  const LOCAL_STROAGE_KEY = "ListItem";
  const [ListItems, SetListItems] = useState(
    !localStorage.getItem(LOCAL_STROAGE_KEY)
      ? []
      : JSON.parse(localStorage.getItem(LOCAL_STROAGE_KEY))
  );
  const addListHandler = (ListItem) => {
    SetListItems((pre) => [...pre,{id:v4(), ...ListItem} ]);
  };

  const remListHandler=(id)=>{
    const newList=ListItems.filter(el=>{
      return el.id !== id;
    })
    SetListItems(newList)
  }

  useEffect(() => {
    const retriveList = JSON.parse(localStorage.getItem(LOCAL_STROAGE_KEY));
    if (retriveList) SetListItems(retriveList);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STROAGE_KEY, JSON.stringify(ListItems));
  }, [ListItems]);
  return (
    <div className="App">
      <Header />
      <AddList addListHandler={addListHandler} />
      <List ListItems={ListItems} getListId={remListHandler}/>
    </div>
  );
}

export default App;
