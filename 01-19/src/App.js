import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HealthLog from './pages/HealthLog';
import PetList from './pages/PetList';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<PetList />} />
        <Route path="/healthlog" element={<HealthLog />} />
      </Routes>
    </div>
  );
};

export default App;

