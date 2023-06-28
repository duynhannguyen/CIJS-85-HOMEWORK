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
  const DeleteEle = (id) => {
    const filterdTaskList = todoList.filter((task) => task.id !== id);
    setTodoList(filterdTaskList);
  };

  const EditEle = (id) => {
    console.log(id);
    const filterEditTaskList = todoList.filter((editTask) => editTask.id === id);
    setTodoList(filterEditTaskList);
    
    
  };
  return (
    <div className="App">
      <div className="wrapper">
        <SearchInput onAddNewTask={onAddNewTaskHandler} EditTask = {todoList} />
        <TodolList data={todoList} DeleteId={DeleteEle} EditId = {EditEle} />
        {/* <DeleteAllTask Delete = {onDeleteTaskHandler}/> */}
        {/* <button className="delete-btn" onClick={onDeleteTaskHandler}>Delete All </button> */}
      </div>
    </div>
  );
}

export default App;
