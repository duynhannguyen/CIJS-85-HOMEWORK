const TodoItem = (props) => {
    const {id , TaskTitle, isCompleted} = props
    return(
        <div id = {id} className = "todoitem">
            {TaskTitle}
            <p className = "tool">
            <div className = "check-wrapper"><input className = "check-box" type = "checkbox" checked={isCompleted} ></input></div>
            <div className = "trash-can-wrapper"><i  id = "trash-can" className="fa-solid fa-trash-can"></i></div>
            <div className = "edit-wrapper"><i  id = "edit" className="fa-solid fa-pen-to-square"></i></div>
            </p>
        </div>
    )
}
export default TodoItem ;