import './App.css';
import { useState } from 'react';
const mockTodos = [
  {
    id: 1,
    title: 'Learn how to delete',
  },
  {
    id: 2,
    title: 'Learn how to use inputs',
  },
];

// spread operator example:
// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const c = [...a, ...b]; // [1,2,3,4,5,6]

// const q = { name: "Rokas" };
// const w = { surname: "Andreikenas" };
// const z = { ...q, ...w }; // {name: "Rokas", surname: "Andreikenas"}

function TodoApp() {
  const [todos, setTodos] = useState(mockTodos);
  const [todoText, setTodoText] = useState('');

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  //advanced kodas labiau - pataisyti
  // setTodos((prevTodos) => prevTodos.filter((todo) => todo !== id));

  const handleChange = (event) => {
    // event.target.value - input text
    const value = event.target.value;
    setTodoText(value);
    console.log(event.target.value);
  };
  //some - grazina ar nors vienas is array elementui atitinka lygybe
  const handleAddTodo = () => {
    const title = todoText.trim();
    const alreadyExists = todos.some((todo) => todo.title === title);

    if (todoText && !alreadyExists) {
      const newTodo = { id: Date.now(), title };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      // ...prevTodos => spread operator, galimas ant arrays ir object
      setTodoText('');
    }
  };
  return (
    <div className="todo-app">
      <h1 className="todo-title">Todo list</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <strong className="delete-btn" onClick={() => handleDeleteTodo(todo.id)}>
              X
            </strong>
          </li>
        ))}
      </ul>

      <input type="text" value={todoText} onChange={handleChange} />
      <button onClick={handleAddTodo}>Add</button>
      <p>{todoText}</p>
    </div>
  );
}

export default TodoApp;
