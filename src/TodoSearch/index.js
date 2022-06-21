import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

import './TodoSearch.css'
function TodoSearch(){
  const{searchValue, setSearchValue} =React.useContext(TodoContext);

  const onSerchValueChange = (event) =>{
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  return[
    <input 
    onChange={onSerchValueChange} 
    value={searchValue}
    placeholder="Cebolla" 
    className="TodoSearch" 
    />,

  ];
    
}

export {TodoSearch};