import { useState } from "react";
import "./App.css";
import SearchInput from "./Components/SearchInput";
import TodolList from "./Components/TodoList";
import DeleteAllTask from "./Components/DeleteAllTask";
function App() {
  const TaskData = [
    // {
    //   id: 1,
    //   TaskTitle: "Learn to type fast",
    //   color: "green",
    //   isCompleted: false,
    // },
    // {
    //   id: 2,
    //   TaskTitle: "Learn GitHub",
    //   color: "green",
    //   isCompleted: true,
    // },
    // {
    //   id: 3,
    //   TaskTitle: "Learn Tailwind",
    //   color: "green",
    //   isCompleted: false,
    // },
    // {
    //   id: 4,
    //   TaskTitle: "Learn vite",
    //   color: "green",
    //   isCompleted: true,
    // },
  ];
  const [todoList, setTodoList] = useState(TaskData);
  const onAddNewTaskHandler = (NewTask) => {
    setTodoList([...todoList, NewTask]);
  };
  const DeleteEle = (DeleteTodo) => {
    todoList.filter((id) => todoList.id !== DeleteTodo);
    setTodoList(todoList);
  };
  return (
    <div className="App">
      <div className="wrapper">
        <SearchInput onAddNewTask={onAddNewTaskHandler} />
        <TodolList data={todoList} DeleteId={DeleteEle} />
        {/* <DeleteAllTask Delete = {onDeleteTaskHandler}/> */}
        {/* <button className="delete-btn" onClick={onDeleteTaskHandler}>Delete All </button> */}
      </div>
    </div>
  );
}

export default App;
