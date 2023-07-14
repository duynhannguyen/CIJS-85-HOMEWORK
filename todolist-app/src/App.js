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
  const GetTaskTitle = JSON.parse(localStorage.getItem("TaskTitle"));
  const [todoList, setTodoList] = useState(GetTaskTitle ?? []);

  const onAddNewTaskHandler = (NewTask) => {
    const SaveNewTask = [...todoList, NewTask];
    const StrSaveNewTask = JSON.stringify(SaveNewTask);
    localStorage.setItem("TaskTitle", StrSaveNewTask);
    setTodoList(SaveNewTask);
  };
  const DeleteEle = (id) => {
    const filterdTaskList = todoList.filter((task) => task.id !== id);
    setTodoList(filterdTaskList);
    const StrDeleteTaskList = JSON.stringify(filterdTaskList);
    localStorage.setItem("TaskTitle", StrDeleteTaskList);
  };
  const [EditTaskEle, setEditTaskEle] = useState("");
  const EditEle = (id) => {
    const filterEditTaskList = todoList.find((editTask) => editTask.id === id);
    setEditTaskEle(filterEditTaskList);
    console.log(EditTaskEle);
    // const AfterDetele = filterEditTaskList;
    // setTodoList(filterEditTaskList);
    // const a = localStorage.getItem('id')
    // console.log(a);
  };
  return (
    <div className="App">
      <div className="wrapper">
        <SearchInput
          onAddNewTask={onAddNewTaskHandler}
          EditTaskEle={EditTaskEle}
        />
        <TodolList data={todoList} DeleteId={DeleteEle} EditId={EditEle} />
        {/* <DeleteAllTask Delete = {onDeleteTaskHandler}/> */}
        {/* <button className="delete-btn" onClick={onDeleteTaskHandler}>Delete All </button> */}
      </div>
    </div>
  );
}

export default App;
