import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../redux/store";

const ToDo = ({ text, id }) => {
  const dispatch = useDispatch();
  const onClickDelete = () => dispatch(remove(id));

  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onClickDelete}>❌</button>
    </li>
  );
};

export default ToDo;
