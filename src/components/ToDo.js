import React from "react";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../store";

const ToDo = ({ text, id }) => {
  const dispatch = useDispatch();
  const onClickDelete = () => dispatch(deleteToDo(id));

  return (
    <li>
      {text} <button onClick={onClickDelete}>❌</button>
    </li>
  );
};

export default ToDo;
