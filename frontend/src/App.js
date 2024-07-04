
import './App.css';
import LandingPage from './Components/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home.js";
import BasicVariable from './Components/BasicVariable/BasicVariable.js';


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/header" element={<Header />} /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/basic-variable" element={<BasicVariable />} />
        {/* <Route path="/" element={<LandingPage />} /> */}
      </Routes>
    </Router>

  );
}

export default App;
