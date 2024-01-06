import { styled } from "@mui/material";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { Modal } from "./UI/modal/Modal";

function App() {
  return (
    <Container>
      <h1>Todo app</h1>
      <AddTodo />
      <TodoList />
      <Modal />
    </Container>
  );
}

export default App;
const Container = styled("div")`
  h1 {
    color: #4c4c4c;
  }
`;
