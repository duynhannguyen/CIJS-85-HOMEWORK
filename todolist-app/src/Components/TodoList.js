import TodoItem from "./TodoItem";
const TodolList = (props) => {
    const { data = []} = props
    let TaskList = data && data.map((todo) => <TodoItem {...todo} />)

    return (
        <div className = "todolist">
            {TaskList}
        </div>
    )
}
export default TodolList; 