import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, togleTodo } from "../store/todoSlice/todoSlice";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";

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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>

          <Button onClick={handleOpen}>Delete</Button>
          <Modal keepMounted open={open} onClose={handleClose}>
            <Box sx={style}>
              <Typography variant="h6" component="h2" sx={{ color: "#4c4c4c" }}>
                ты точно хочешь это удалить
              </Typography>
              <Container>
                <Button variant="contained" onClick={handleClose}>
                  НЕТ
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    dispatch(deleteTodo(todo.id));
                    handleClose();
                  }}
                >
                  ДА
                </Button>
              </Container>
            </Box>
          </Modal>
        </ol>
      ))}
    </ul>
  );
};
const Container = styled("div")`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
