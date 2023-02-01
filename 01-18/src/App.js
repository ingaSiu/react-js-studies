import Examples from './pages/Examples';
import { Routes, Route } from 'react-router-dom';
import JoinPage from './task/JoinPage';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/examples" element={<Examples />} />
        <Route path="/task" element={<JoinPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;

