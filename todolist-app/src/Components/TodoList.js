import TodoItem from "./TodoItem";
const TodolList = (props) => {
  const { data = [], DeleteId , EditId } = props;
  let TaskList =
    data && data.map((todo) => <TodoItem {...todo} DeleteId={DeleteId} EditId = {EditId} />);

  return <div className="todolist">{TaskList}</div>;
};
export default TodolList;
