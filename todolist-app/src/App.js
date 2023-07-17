import { useState } from "react";
import "./App.css";
import SearchInput from "./Components/SearchInput";
import TodolList from "./Components/TodoList";
import DeleteAllTask from "./Components/DeleteAllTask";
import TaskFilter from "./Components/TaskFilter";
import { FILTER_TASK_OPTION } from "./Constant/Constant";
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
  const [EditTaskEle, setEditTaskEle] = useState("");
  const [filterOption, setFilterOption] = useState(FILTER_TASK_OPTION.ALL);
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
  const EditEle = (id) => {
    const filterEditTaskList = todoList.find((editTask) => editTask.id === id);
    setEditTaskEle(filterEditTaskList);
    // console.log(EditTaskEle);
  };
  const onChecked = (id) => {
    const updatingChecked = todoList.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTodoList(updatingChecked);
  };
  const sortOption = () => {
    setFilterOption(filterOption);
  };
  const sortTaskHandler = (filterOption, todoList) => {
    let sortList = [...todoList];
    switch (+filterOption) {
      case FILTER_TASK_OPTION.COMPLETE:
        sortList = sortList.sort(
          (task) => (task.isCompleted = !task.isCompleted)
        );
        // console.log(sortList);
        return sortList;
      case FILTER_TASK_OPTION.ALL:
        sortList = sortList.sort(
          (task) => (task.isCompleted = task.isCompleted)
        );
        // console.log(sortList);
        return sortList;
    }
  };
  const updatingFilter = sortTaskHandler(filterOption, todoList);
  console.log(updatingFilter);
  return (
    <div className="App">
      <div className="wrapper">
        <SearchInput
          onAddNewTask={onAddNewTaskHandler}
          EditTaskEle={EditTaskEle}
        />
        <TaskFilter sortOption={sortOption} />
        <TodolList
          data={todoList}
          DeleteId={DeleteEle}
          EditId={EditEle}
          onChecked={onChecked}
        />
        {/* <DeleteAllTask Delete = {onDeleteTaskHandler}/> */}
        {/* <button className="delete-btn" onClick={onDeleteTaskHandler}>Delete All </button> */}
      </div>
    </div>
  );
}

export default App;
