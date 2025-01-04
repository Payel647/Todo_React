import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
    let [todos,setTodos]=useState([{task: "sample-task", id: uuidv4(), isDone:false}]);
    let [newTodo,setNewTodo]=useState("");
    let addNewTask=()=>{
        setTodos((prevTodos)=>{
            return[...todos,{ task: newTodo, id: uuidv4(), isDone:false}];
        });
        setNewTodo("");
    }
    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    }
    let deleteTodo=(id)=>{
        setTodos((prevTodos)=>todos.filter((todo)=>todo.id!=id));
    }
    let markAllDone=()=>{
    setTodos((prevTodos)=>
        prevTodos.map((todo)=>{
            return{
                ...todo,isDone:true,
            };
        })
    );
    };
    let markAsDone=(id)=>{
        setTodos((prevTasks)=>
            prevTasks.map((todo)=>{
                if(todo.id===id){
                return{
                    ...todo,isDone: true,
                };
            }else{
                return todo;
            }
            })
        );
        };
        
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
                    <li key={todo.id}>
                        <span style={todo.isDone ? {textDecoration:"line-through"}:{}}>{todo.task}</span>
                         &nbsp;&nbsp;&nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={()=>markAsDone(todo.id)}>Mark As Done</button>
                        <hr></hr>
                        </li>
                   
                ))}
            </ul>
            <button onClick={markAllDone}>Mark All as Done</button>
        </div>
    );
}
