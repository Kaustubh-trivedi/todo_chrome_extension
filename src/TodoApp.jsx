import React, { useState, useEffect } from 'react';
import { FaCheck, FaEdit, FaTrash, FaUndo } from 'react-icons/fa';
import './App.css';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    chrome.storage.local.get('todos', (result) => {
      if (result.todos) {
        setTodos(result.todos);
      }
    });
  }, []);

  const addTodo = () => {
    if (!task.trim()) return;
    const newTodo = { task, description, completed: false };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    chrome.storage.local.set({ todos: updatedTodos });
    setTask('');
    setDescription('');
  };

  const toggleCompletion = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
    chrome.storage.local.set({ todos: updatedTodos });
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    chrome.storage.local.set({ todos: updatedTodos });
  };

  const editTodo = (index) => {
    const todo = todos[index];
    setTask(todo.task);
    setDescription(todo.description);
    deleteTodo(index);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Todo Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="add-button" onClick={addTodo}>Add</button>

      <div className="task-section">
        <h3>Pending Tasks</h3>
        {todos.filter(todo => !todo.completed).map((todo, index) => (
          <div className="task-card" key={index}>
            <div className="task-details">
              <p className="task-title">{todo.task}</p>
              <p className="task-desc">{todo.description}</p>
            </div>
            <div className="task-buttons">
              <button onClick={() => toggleCompletion(index)} title="Complete">
                <FaCheck color="green" />
              </button>
              <button onClick={() => editTodo(index)} title="Edit">
                <FaEdit color="#007bff" />
              </button>
              <button onClick={() => deleteTodo(index)} title="Delete">
                <FaTrash color="red" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="task-section">
        <h3>Completed Tasks</h3>
        {todos.filter(todo => todo.completed).map((todo, index) => (
          <div className="task-card" key={index}>
            <div className="task-details">
              <p className="task-title">{todo.task}</p>
              <p className="task-desc">{todo.description}</p>
            </div>
            <div className="task-buttons">
              <button onClick={() => toggleCompletion(index)} title="Mark as Pending">
                <FaUndo color="orange" />
              </button>
              <button onClick={() => editTodo(index)} title="Edit">
                <FaEdit color="#007bff" />
              </button>
              <button onClick={() => deleteTodo(index)} title="Delete">
                <FaTrash color="red" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
