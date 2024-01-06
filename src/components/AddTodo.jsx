import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice/todoSlice";

export const AddTodo = () => {
  const [text, steText] = useState("");
  const dispatch = useDispatch();

  const handlerAdd = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      steText("");
    }
  };

  return (
    <form onSubmit={handlerAdd}>
      <input
        type="text"
        value={text}
        onChange={(e) => steText(e.target.value)}
      />
      <button type="submit">add</button>
    </form>
  );
};
