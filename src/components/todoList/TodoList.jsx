import "./TodoList.css";
import {useState} from "react";
export default function TodoList() {
    let [todos, setTodos] = useState([{task: "sample task", key: 1}])
    let [newTodo, SetNewTodo] = useState("");

    let addTask = (event) => {
        SetNewTodo(event.target.value);
    }
    return(
        <>
            <input type="text" placeholder="enter task" onChange={addTask}/>
            <br />
            <button>Add Task</button>
        </>
    );
}