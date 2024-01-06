import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice/todoSlice";
import { Button, TextField } from "@mui/material";

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
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        type="text"
        value={text}
        onChange={(e) => steText(e.target.value)}
      />
      <Button variant="contained" type="submit">
        add
      </Button>
    </form>
  );
};
