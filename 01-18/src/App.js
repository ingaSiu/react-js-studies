import Examples from './pages/Examples';
import { Routes, Route } from 'react-router-dom';
import JoinPage from './task/JoinPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/examples" element={<Examples />} />
        <Route path="/task" element={<JoinPage />} />
      </Routes>
    </div>
  );
};

export default App;
