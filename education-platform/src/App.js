import { CardProvider } from "./CardContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./navBar";
import Home from "./Home";
import CoursesList from "./CoursesList"; 
import About from "./About";
import Testimonial from "./Testimonial";
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
  <Testimonial />
      <Contact />
    </CardProvider>
  );
}

export default App;
