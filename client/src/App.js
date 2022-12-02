import { useState, useContext, createContext, useMemo } from "react";

import MyContext from "./context/MyContext";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import SearchBar from "./components/SearchBar";


function App(){
  return (
    <div className="container">
      <h2>React Text Search</h2>
      <SearchBar />

    </div>
  )
}


export default App;
