import './App.css';
import {  Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Signup" element={<Signup />} />
    <Route path="/Signin" element={<Signin />} />    
    </Routes>
  );
}

export default App;
