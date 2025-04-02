import { useState } from "react";
import "./Todo.css";

function ToDo() {
  const [task, setTask] = useState(""); // Stores input value
  const [todos, setTodos] = useState([]); // Stores tasks

  // Add new task on form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    if (task.trim() === "") return; // Prevent empty task
    setTodos([...todos, { id: Date.now(), text: task }]);
    setTask(""); // Clear input field
  };

  // Delete a task
  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>

      {/* Form to handle task input */}
      <form onSubmit={handleSubmit} className="input-container">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <div>
              <button onClick={() => deleteTask(todo.id)} className="done-btn">
                ✅
              </button>
              <button
                onClick={() => deleteTask(todo.id)}
                className="delete-btn"
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
