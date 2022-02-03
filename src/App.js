import React from 'react';
import './App.css';
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blog />} />
        
      </Routes>
    </Router>
  );
}

export default App;