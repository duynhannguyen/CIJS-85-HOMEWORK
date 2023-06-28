import TodoItem from "./TodoItem";
const TodolList = (props) => {
  const { data = [], DeleteId } = props;
  let TaskList =
    data && data.map((todo) => <TodoItem {...todo} data={DeleteId} />);

  return <div className="todolist">{TaskList}</div>;
};
export default TodolList;
