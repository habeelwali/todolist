import React from "react";
const ToDoList=(props) => {
   
    return (
        <div>
            
    <li> {props.text} <button onClick={()=>{
        props.onSelect(props.id);
    }}>X</button></li>
    </div>
    )
}
export default ToDoList;