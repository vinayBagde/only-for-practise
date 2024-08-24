import "./TodoList.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let addNewTask = () => {
    setTodos((previousTodo) => {
      return [...previousTodo, { task: newTodo, id: uuidv4() }];
    });

    setNewTodo("");
  };

  let deleteTodo = (id) => {
    setTodos((previousTodo) => {
      return previousTodo.filter((todo) => todo.id != id);
    });
  };

  let updateAllTask = () => {
    setTodos((previousTodo) => {
        return previousTodo.map((todo) => {
            return {...todo, task: todo.task.toUpperCase()}
        })
    })
  };
  return (
    <>
      <input
        type="text"
        placeholder="enter task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <button onClick={addNewTask}>Add task</button>
      <br /> <br />
      <hr />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{ marginRight: "10px" }}>{todo.task}</span>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <hr />
      <button onClick={updateAllTask}>Update All Task</button>
    </>
  );
}
