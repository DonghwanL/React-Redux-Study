import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteToDo } from "../store";

const ToDo = ({ text, id }) => {
  const dispatch = useDispatch();
  const onClickDelete = () => dispatch(deleteToDo(id));

  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={onClickDelete}>❌</button>
      </Link>
    </li>
  );
};

export default ToDo;
