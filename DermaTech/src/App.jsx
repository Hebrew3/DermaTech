import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Schedule from './Schedule';
import Home from './Home'; // dummy component

function App() {
  return (
    <BrowserRouter>
    tgtytg
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;