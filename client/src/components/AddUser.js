import React,{useRef, useState, useContext} from 'react'

import {Link, useNavigate} from 'react-router-dom'
import MyContext from '../context/MyContext';

export default function AddUser(props) {

    const {handleUserAdd} = useContext(MyContext);

    const [msg,setMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const nameRef = useRef();
    const emailRef = useRef();
    const numRef = useRef();

    const navigate = useNavigate();

    const handleclick = ()=> {
        setLoading(true);
        handleUserAdd(nameRef.current.value,emailRef.current.value,numRef.current.value, ()=>{
            setMsg("User Added Successfully");
            nameRef.current.value = "";
            emailRef.current.value = "";
            numRef.current.value = "";
            setLoading(false);

            navigate("/users");
        });
        
    }

  return (
    <div>
        <input ref={nameRef} type="text" placeholder='Name'/>
        <input ref={emailRef} type="text" placeholder='Email'/>
        <input ref={numRef} type="number" placeholder='Number'/>
        <button onClick={handleclick}>Submit</button>
        {
            loading && <p>Loading.....</p>
        }
        <p>{msg}</p>
        <Link to="/users">Go to Users</Link>
    </div>
  )
}
