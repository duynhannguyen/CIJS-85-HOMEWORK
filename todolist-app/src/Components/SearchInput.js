import { useState } from "react"

const SearchInput = (props) => {
    const [NewTaskTitle, setNewTask ] = useState('');
    const onSubmitHandler = (e) => {
        e.preventDefault()
        const NewTask = {
            TaskTitle: NewTaskTitle,
            isCompleted: false,
            
        };
        console.log(NewTask)
        props.onAddNewTask(NewTask);
        setNewTask('');
    }
    const onChangeHandler = (e) => {
        setNewTask(e.target.value);
        
    }
    return (
        <form className = "search-input" onSubmit={onSubmitHandler}> 
            <input id = "search-input" type = "text" placeholder = "New task" size = "70" value={NewTaskTitle} onChange = {onChangeHandler}></input>
            <button type="submit" className = "btn-add"> Add </button>
        </form>
    )
}
export default SearchInput ;