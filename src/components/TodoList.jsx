import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, togleTodo } from "../store/todoSlice/todoSlice";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField, styled } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 200,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 10,
  p: 4,
};

export const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [editingTodo, setEditingTodo] = React.useState(null);
  const [editedText, setEditedText] = React.useState("");

  const handleOpen = (todo) => {
    setEditingTodo(todo);
    setEditedText(todo.text);
    setOpen(true);
  };

  const handleClose = () => {
    setEditingTodo(null);
    setEditedText("");
    setOpen(false);
  };

  const handleToggle = (id) => {
    dispatch(togleTodo(id));
  };

  const handleSaveEdit = () => {
    if (editingTodo && editedText.trim()) {
      dispatch(deleteTodo(editingTodo.id));
      dispatch(addTodo(editedText));
      handleClose();
    }
  };

  return (
    <ul>
      {todos.map((todo) => (
        <ol key={todo.id}>
          <Container>
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <Button variant="contained" onClick={() => handleOpen(todo)}>
                Edit
              </Button>
              <Button
                variant="contained"
                onClick={() => dispatch(deleteTodo(todo.id))}
              >
                Delete
              </Button>
            </div>
          </Container>
        </ol>
      ))}

      <Modal keepMounted open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2" sx={{ color: "#4c4c4c" }}>
            {editingTodo ? "Edit Todo" : "Add Todo"}
          </Typography>
          <ModalContainer>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleSaveEdit}>
              Save
            </Button>
          </ModalContainer>
        </Box>
      </Modal>
    </ul>
  );
};
const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 18rem;
    height: 4rem;
    border-radius: 1rem;
    margin-right: 4rem;
    margin-top: 1rem;
    background-color: aqua;
  }
`;

const ModalContainer = styled("div")`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
