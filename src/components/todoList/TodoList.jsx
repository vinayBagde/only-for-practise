import "./TodoList.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);

  let [newTodo, setNewTodo] = useState("");

  let updateNewTodo = (event) => {
    setNewTodo(event.target.value);
  };

  let updateTodo = () => {
    setTodos(() => {
      return [...todos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let upperAll = () => {
    setTodos(() => {
      return todos.map((el) => {
        return { ...el, task: el.task.toUpperCase() };
      });
    });
  };

  let upperOne = (id) => {
    setTodos(() => {
      return todos.map((el) => {
        if (el.id === id) {
          return { ...el, task: el.task.toUpperCase() };
        } else {
          return el;
        }
      });
    });
  };

  let deleteTask = (id) => {
    setTodos(() => {
      return todos.filter((el) => el.id !== id);
    });
  };

  let markAllDone = () => {
    setTodos(() => {
      return todos.map((el) => {
        return { ...el, isDone: true };
      });
    });
  };

  let markOne = (id) => {
    setTodos(() => {
      return todos.map((el) => {
        if (el.id === id) {
          return { ...el, isDone: true };
        } else {
          return el;
        }
      });
    });
  };
  return (
    <>
      <div id="todo-box">
        <input
          type="text"
          placeholder="add a task"
          value={newTodo}
          onChange={updateNewTodo}
          id="inp"
        />
        <br />
        <button onClick={updateTodo} id="addBtn">
          Add Task
        </button>
        <hr />
        {todos.map((el) => {
          return (
            <li
              key={el.id}
              style={el.isDone ? { textDecoration: "line-through" } : {}}
              id="tasks"
            >
              <span id="task">{el.task}</span>
              <button onClick={() => upperOne(el.id)}>Upper One Case</button>
              <button onClick={() => deleteTask(el.id)}>Delete</button>
              <button onClick={() => markOne(el.id)}>Mark One</button>
            </li>
          );
        })}
        <hr />
        <div id="allBtn">
          <button onClick={upperAll}>Upper All Case</button>
          <button onClick={markAllDone}>Mark All Done</button>
        </div>
      </div>
    </>
  );
}
