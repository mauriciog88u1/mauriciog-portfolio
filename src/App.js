import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import EducationPage from "./pages/Education";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import AboutMe from "./pages/AboutMe";
import PlayRandomMoveEngine from "./pages/Chess";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
          <Route path ="/education" element={<EducationPage/>} />
          <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/chess" element={<PlayRandomMoveEngine />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
