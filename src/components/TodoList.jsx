import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, togleTodo } from "../store/todoSlice/todoSlice";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(togleTodo(id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <ol key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggle(todo.id)}
          />
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </span>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </ol>
      ))}
    </ul>
  );
};
