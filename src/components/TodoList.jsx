import { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedTask = task.trim();
    if (!trimmedTask) return;

    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text: trimmedTask, completed: false },
    ]);
    setTask('');
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const completeCount = todos.filter((todo) => todo.completed).length;

  return (
    <section className="todo-card">
      <h2>Todo List</h2>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="Add a new todo"
          aria-label="New todo"
        />
        <button type="submit">Add</button>
      </form>

      <div className="todo-summary">
        <span>Items: {todos.length}</span>
        <span>Completed: {completeCount}</span>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <button
              type="button"
              className="todo-toggle"
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.completed ? 'Undo' : 'Done'}
            </button>
            <span>{todo.text}</span>
            <button
              type="button"
              className="todo-remove"
              onClick={() => removeTodo(todo.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
