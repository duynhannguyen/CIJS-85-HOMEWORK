import { useState } from "react";
import TodolList from "./TodoList";
const TodoItem = (props) => {
  const { id, TaskTitle, isCompleted, DeleteId, EditId, onChecked } = props;
  // const [DeleteTodo, setDeleteTodoEle] = useState("");
  // const onDeleteHandler = (id) => {
  //   setDeleteTodoEle(id);
  //   DeleteId(id);
  // };

  return (
    <div id={id} className="todoitem">
      {TaskTitle}
      <p className="tool">
        <div className={`${isCompleted === false ? "check-wrapper" : "check-wrapper-complete"}`}>
          <input
            className="check-box"
            type="checkbox"
            checked={isCompleted}
            onChange={() => onChecked(id)}
          ></input>
        </div>
        <div className="trash-can-wrapper">
          <i
            id="trash-can"
            className="fa-solid fa-trash-can"
            onClick={() => DeleteId(id)}
            // onDeleteHandler(id)
          ></i>
        </div>
        <div className="edit-wrapper">
          <i
            id="edit"
            className="fa-solid fa-pen-to-square"
            onClick={() => EditId(id)}
          ></i>
        </div>
      </p>
    </div>
  );
};
export default TodoItem;
