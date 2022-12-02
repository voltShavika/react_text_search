import { useState, useContext, createContext, useMemo } from "react";
import AddTask from "./components/AddTask";
import ShowTasks from "./components/ShowTasks";
import AddUser from "./components/AddUser";
import ShowUserInfo from "./components/ShowUserInfo";

import MyContext from "./context/MyContext";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'



function App() {
  const [tasks, setTasks] = useState([]);
  const handleAddTask = (title, author)=>{
      const task={
        title: title,
        author: author
      }
      setTasks([...tasks, task])

    }
    const handleDeleteTask =(i)=>{
      const oldTasks = [...tasks];
      oldTasks.splice(i, 1);
      setTasks(oldTasks);
    }
  return (
    <div>
      <AddTask handleAddTask={handleAddTask}/>
      <ShowTasks tasks={tasks} handleDeleteTask={handleDeleteTask}/>
    </div>
    
  );
}


function App2() {
  const [users,setUsers] = useState([]);
  const handleUserAdd =  (name,email,number, next)=>{
    setTimeout(()=>{
      const user = {
        name:name,
        email: email,
        number:number
      }
      console.log("API CALLED with value", user)
      setUsers([...users,user])
      next();
    }, 3000)
  }

  const value = useMemo(()=>({users, setUsers, handleUserAdd}), [users]);
  return (
    <MyContext.Provider value={value}>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<AddUser />} />
            <Route exact path="/users" element={<ShowUserInfo />} />
          </Routes>
        </Router>
      </div>
    </MyContext.Provider>
  )
}


export default App2;
