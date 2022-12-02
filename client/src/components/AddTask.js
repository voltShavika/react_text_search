import React,{useRef} from 'react'

export default function (props) {
    const titleRef = useRef();
    const authorRef = useRef(); 

    const handleClick = () => {
        props.handleAddTask(titleRef.current.value, authorRef.current.value);
    }
  return (
    <div>
        <input ref={titleRef} type="text" placeholder='Title'/>
        <input ref={authorRef} type="text" placeholder='Author'/>
        <button onClick={handleClick}>Submit</button>
    </div>
  )
}
