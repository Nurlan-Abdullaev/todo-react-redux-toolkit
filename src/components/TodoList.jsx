import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, togleTodo } from "../store/todoSlice/todoSlice";
import { Button } from "@mui/material";
import { DeleteIkon } from "../assets";
import styled from "@emotion/styled";
import { Modal } from "../UI/modal/Modal";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleToggle = (id) => {
    dispatch(togleTodo(id));
    setOpen(false);
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

          {open && (
            <ModalStyle
              open={open}
              handleClose={() => setOpen(false)}
              width="519px"
              height="368px"
              borderRadius="20px"
            >
              <div className="closeIconContainer">
                <DeleteIkon onClick={() => setOpen(false)} />
              </div>
              <div className="deleteText">
                <div>
                  <div className="doYouWantDelete">Do you want delete? </div>
                  <div>You can not restore this file </div>
                </div>
              </div>
              <div className="buttonBlock">
                <Button
                  variant="outlined"
                  hoverStyle="#3A10E5E5"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>

                <Button
                  hoverStyle="#3A10E5E5"
                  onClick={() => dispatch(deleteTodo(todo.id))}
                >
                  Delete
                </Button>
              </div>
            </ModalStyle>
          )}
        </ol>
      ))}
    </ul>
  );
};
const ModalStyle = styled(Modal)`
  overflow: hidden;
  & .closeIconContainer {
    width: 100%;
    display: flex;
    justify-content: end;
    padding: 22px 22px 16px 0;
    & :first-child {
      cursor: pointer;
    }
  }
  & .deleteText {
    width: 100%;
    text-align: center;
    & > :first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      background-color: #fbeaea;
      width: 66px;
      height: 66px;
      border-radius: 50px;
      margin-bottom: 50px;
    }
    & .doYouWantDelete {
      color: var(--Dark-grey-font-color, #4c4859);
      font-size: 20px;
      font-style: normal;
      font-weight: 800;
    }
    & .doYouWantDelete + div {
      color: var(--Dark-grey-font-color, #4c4859);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
    }
  }
  & .buttonBlock {
    background-color: #f0f1f1;
    height: 94px;
    margin-top: 46px;
    border-radius: 0 0 20px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 16px;
  }
`;
