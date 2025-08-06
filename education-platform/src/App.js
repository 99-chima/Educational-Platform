import { CardProvider } from "./CardContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./navBar";
import Home from "./Home";
import CoursesList from "./CoursesList"; 
import About from "./About";
import Contact from "./Contact";
import './App.css';
function App() {
  return (
    <CardProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesList />} />
        </Routes>
      </Router>
      <About />
      <Contact />
    </CardProvider>
  );
}

export default App;