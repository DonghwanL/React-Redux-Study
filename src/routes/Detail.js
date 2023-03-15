import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const toDos = useSelector((state) => state);
  const toDoDetail = toDos.find((toDo) => toDo.id === parseInt(id));

  return (
    <>
      <h1>{toDoDetail.text}</h1>
      <h5>Created at: {toDoDetail?.id}</h5>
    </>
  );
};

export default Detail;
