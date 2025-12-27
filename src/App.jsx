import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CentralHub from './pages/CentralHub';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Tools from './pages/Tools';
import LocationIndicator from './components/LocationIndicator';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const COORDS = {
  "/": [0, 0],
  "/about": [0, 1],       // UP
  "/contact": [0, 2],     // Further UP
  "/experience": [0, -1], // DOWN
  "/education": [0, -2],  // DOWN from Experience
  "/tools": [-1, 0],      // LEFT
  "/projects": [1, 0]     // RIGHT
};

function getCoords(pathname) {
  if (COORDS[pathname]) return COORDS[pathname];
  if (pathname.startsWith("/projects/")) return [2, 0]; // Further RIGHT
  return [0, 0]; // Default to center
}

const variants = {
  initial: (direction) => {
    const [dx, dy] = direction;
    return {
      x: dx > 0 ? '100vw' : dx < 0 ? '-100vw' : 0,
      y: dy > 0 ? '-100vh' : dy < 0 ? '100vh' : 0, // Note: Y axis in CSS: -100% is TOP. +100% is BOTTOM.
      // If going UP (dy=1, Hub->About): Enter from TOP (-100vh).
      // If going DOWN (dy=-1, Hub->Exp): Enter from BOTTOM (100vh).
      opacity: 0,
      scale: 0.8,
    };
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.5
    }
  },
  exit: (direction) => {
    const [dx, dy] = direction;
    return {
      x: dx > 0 ? '-100vw' : dx < 0 ? '100vw' : 0,
      // If direction was RIGHT (dx=1), we entered from Right. Old page should exit to LEFT (-100vw).
      // If direction was LEFT (dx=-1), we entered from Left. Old page should exit to RIGHT (100vw).

      y: dy > 0 ? '100vh' : dy < 0 ? '-100vh' : 0,
      // If direction was UP (dy=1), we entered from Top. Old page should exit to BOTTOM (100vh).
      // If direction was DOWN (dy=-1), we entered from Bottom. Old page should exit to TOP (-100vh).

      opacity: 0,
      scale: 0.8,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5
      }
    };
  }
};

function AnimatedRoutes() {
  const location = useLocation();
  const prevPath = useRef(location.pathname);

  const currentCoords = getCoords(location.pathname);
  const prevCoords = getCoords(prevPath.current);

  const dx = currentCoords[0] - prevCoords[0]; // eslint-disable-line  
  const dy = currentCoords[1] - prevCoords[1]; // eslint-disable-line

  useEffect(() => {
    prevPath.current = location.pathname;
  }, [location.pathname]);

  return (
    <AnimatePresence mode="popLayout" custom={[dx, dy]}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper direction={[dx, dy]}><CentralHub /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper direction={[dx, dy]}><AboutMe /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper direction={[dx, dy]}><Contact /></PageWrapper>} />
        <Route path="/education" element={<PageWrapper direction={[dx, dy]}><Education /></PageWrapper>} />
        <Route path="/experience" element={<PageWrapper direction={[dx, dy]}><Experience /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper direction={[dx, dy]}><Projects /></PageWrapper>} />
        <Route path="/projects/:id" element={<PageWrapper direction={[dx, dy]}><ProjectDetails /></PageWrapper>} />
        <Route path="/tools" element={<PageWrapper direction={[dx, dy]}><Tools /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children, direction }) {
  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-full absolute inset-0 overflow-auto" // Ensure it takes full space mainly for transitions
    >
      {children}
    </motion.div>
  );
}



function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-background-dark min-h-screen w-screen overflow-hidden relative">
        <LocationIndicator />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
