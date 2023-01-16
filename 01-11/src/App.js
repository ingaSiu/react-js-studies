import './App.css';
import ShoppingListApp from './ShoppingListApp';
import TodoApp from './TodoApp';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import { Routes, Route } from 'react-router-dom';
import CarDetailsPage from './pages/CarDetailsPage';
const App = () => {
  return (
    <div className="todo-app">
      <Routes>
        <Route path="/shopping" element={<ShoppingListApp />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/" element={<HomePage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="/cars/:id" element={<CarDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
