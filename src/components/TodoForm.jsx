import { useState } from 'react';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('1');
  
  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim() === '') return;
    addTodo(text, priority);
    setText('');
  }

  return (
    <div className="panel panel-default">
      <div className="panel-heading">Add New Todo</div>
    <form onSubmit={handleSubmit}>
      <div className="panel-body">
        <div className="form-group">
          <label htmlFor="create-todo-text">I want to..</label>
          <textarea
            id="create-todo-text"
            data-testid="create-todo-text"
            className="form-control"
            rows="3"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="create-todo-priority">How much of a priority is this?</label>
          <select
            id="create-todo-priority"
            data-testid="create-todo-priority"
            className="form-control"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="1">High Priority</option>
            <option value="2">Medium Priority</option>
            <option value="3">Low Priority</option>
          </select>
        </div>
      </div>
      <div className="panel-footer">
        <button type="submit" data-testid="create-todo" className="btn btn-success btn-block">
          Add
        </button>
      </div>
    </form>
  </div>
  );
}

export default TodoForm;
