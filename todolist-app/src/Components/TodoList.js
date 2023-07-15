import TodoItem from "./TodoItem";
const TodolList = (props) => {
  const { data = [], DeleteId, EditId, onChecked } = props;
  let TaskList =
    data &&
    data.map((todo) => (
      <TodoItem
        {...todo}
        DeleteId={DeleteId}
        EditId={EditId}
        onChecked={onChecked}
      />
    ));

  return <div className="todolist">{TaskList}</div>;
};
export default TodolList;
