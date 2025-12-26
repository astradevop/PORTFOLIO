import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import CentralHub from './pages/CentralHub';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Tools from './pages/Tools';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="page-transition">
        <Routes>
          <Route path="/" element={<CentralHub />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
