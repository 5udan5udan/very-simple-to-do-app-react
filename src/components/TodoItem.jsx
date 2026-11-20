import { useState } from 'react';


function TodoItem({ todo, updateTodo, deleteTodo }) {
  const[isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editPriority, setEditPriority] = useState(String(todo.priority));

  const priorityNames = { 1: 'high', 2: 'medium', 3: 'low' };
  const colorClasses = {
    1: 'list-group-item-danger',
    2: 'list-group-item-warning',
    3: 'list-group-item-success',
  };
  const itemClasses = `list-group-item ${colorClasses[todo.priority]} priority-${priorityNames[todo.priority]}`;

  function handleEditClick(e) {
    e.preventDefault();
    setEditText(todo.text);
    setEditPriority(String(todo.priority));
    setIsEditing(true);
  }

  function handleDeleteClick(e) {
    e.preventDefault();
    deleteTodo(todo.id);
  }

  function handleSave(e) {
    e.preventDefault();
    if (editText.trim() === '') return;
    updateTodo(todo.id, { text: editText, priority: Number(editPriority) });
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <li data-testid="todo-item" className={itemClasses}>
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label>Description</label>
            <textarea
              data-testid="update-todo-text"
              className="form-control"
              rows="3"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Priority</label>
            <select
              data-testid="update-todo-priority"
              className="form-control"
              value={editPriority}
              onChange={(e) => setEditPriority(e.target.value)}
            >
              <option value="1">High Priority</option>
              <option value="2">Medium Priority</option>
              <option value="3">Low Priority</option>
            </select>
          </div>
          <div className="text-right">
            <button type="submit" data-testid="update-todo" className="btn btn-success">
              Save
            </button>
          </div>
        </form>
      </li>
    );
  }

  return (
    <li data-testid="todo-item" className={itemClasses}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => updateTodo(todo.id, { completed: !todo.completed })}
      />
      <span className={todo.completed ? 'completed' : ''}> {todo.text}</span>
      <span className="pull-right">
        <a href="#" data-testid="edit-todo" className="edit-todo" aria-label="Edit" onClick={handleEditClick}>
          <span className="glyphicon glyphicon-edit"></span>
        </a>
        <a href="#" data-testid="delete-todo" className="delete-todo" aria-label="Delete" onClick={handleDeleteClick}>
          <span className="glyphicon glyphicon-trash"></span>
        </a>
      </span>
    </li>
  );
}


export default TodoItem;
