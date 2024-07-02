
import './App.css';
import LandingPage from './Components/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home.js";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>

  );
}

export default App;
