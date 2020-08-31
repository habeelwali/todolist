import React, {useState} from 'react';
import './App.css';
import ToDoList from './ToDoList';
function App() {
const [inputlist , setinputlist]= useState("");
const [Item , setItem] = useState([]);
const itemEvent =(event) =>{
 setinputlist(event.target.value);
};
const listOfItem = () =>{
    setItem((oldItem) => {
       return [...oldItem, inputlist]
    });
    setinputlist("");
};

const deleteIteam = (id) => {
  console.log("deleted");
  setItem((oldItem)=>{
    return oldItem.filter((arrElem , index)=>{
     return index !==id;
    })
  })
};

  return (
    <div className="App">
     <div className="center_div">
       <br />
       <h1>ToDo list</h1>
       <br/>
       <input
         type="text"
         placeholder="add iteam"
         value ={inputlist}
         onChange={itemEvent}
       />
       <button
       onClick={listOfItem}
       
       > add</button>
       <ol>
  
         {Item.map((value, index) => {
       return  <ToDoList 
       key={index}
       id={index}
       text={value}
       onSelect={deleteIteam}
       />

  } 
  )}
       </ol>
     </div>
    </div>
  );
}

export default App;
