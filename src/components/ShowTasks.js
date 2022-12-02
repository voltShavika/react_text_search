import React, { useState } from 'react'


export default function ShowTasks(props) {
    
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <td>
                        title

                    </td>
                    <td>
                        author
                    </td>
                    <td>
                        action
                    </td>
                </tr>
            </thead>
            <tbody>
            {
                props.tasks.map((task,i)=>{
                    return(
                        <tr key={i}>
                            <td>{task.title}</td>
                            <td>{task.author}</td>
                            <td>
                                <button onClick={()=> props.handleDeleteTask(i)}>Delete</button>
                            </td>
                        </tr>
                    )
                })
        
            }

            </tbody>
        </table>
        

    </div>
  )
}
