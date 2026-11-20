import TodoItem from './TodoItem';

function TodoList({ todos, updateTodo, deleteTodo }) {
  if (todos.length === 0) {
    return (
      <div className="panel-body">
        <div className="alert alert-info">
          <strong> Welcome to Very Simple ToDo App!</strong>
          <p>Get started now by adding a new todo on the left.</p>
        </div>
      </div>
    );
  }

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
