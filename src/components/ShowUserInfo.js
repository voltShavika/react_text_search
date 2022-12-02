import React , {useContext} from 'react'
import {Link} from 'react-router-dom'
import MyContext from '../context/MyContext';

export default function ShowUserInfo() {

    const {users, setUsers} = useContext(MyContext);
    const handleClick = (i) => {
        let oldUsers = [...users];
        oldUsers.splice(i,1);
        setUsers(oldUsers);

    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Number</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.number}
                                    </td>
                                    <td>
                                        <button onClick={()=>handleClick(i)}>Delete</button>
                                    </td>

                                </tr>
                            )

                        })
                    }
                </tbody>
            </table>
            <Link to="/">Go to Home</Link>
        </>
    
  )
}
