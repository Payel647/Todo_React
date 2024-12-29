import { useState } from "react";

export default function TodoList(){
    let [todos,setTodos]=useState(["Sample Task"])
    let [newTodo,setNewTodo]=useState("");
    let addNewTask=()=>{
        setTodos([...todos,newTodo])
        setNewTodo("");
    }
    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    }
    return(
        <div>
            <h1><u>TODO APP</u><b></b></h1>
            <input placeholder="Add a Task" onChange={updateTodoValue} value={newTodo}></input>
            <br></br>
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>

            <hr></hr>
            <h3><u>TASKS TODO</u><b></b></h3>
            <ul>
                {todos.map((todo)=>(
                    <li>{todo}</li>
                ))}
            </ul>
        </div>
    );
}