import { useState } from "react";

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
        <div className="check-wrapper">
          <input
            className="check-box"
            type="checkbox"
            checked={isCompleted}
            onClick={() => onChecked(id)}
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
