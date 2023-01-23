import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HealthLog from './pages/HealthLog';
import PetList from './pages/PetList';
import Meds from './pages/Meds';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<PetList />} />
        <Route path="/healthlog" element={<HealthLog />} />
        <Route path="/meds" element={<Meds />} />
      </Routes>
    </div>
  );
};

export default App;

