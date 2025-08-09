import { CardProvider } from "./CardContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./navBar";
import Home from "./Home";
import CoursesList from "./CoursesList"; 
import About from "./About";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "./Footer";
import Login from "./Login";
import Checkout from "./Checkout";
import './App.css';

function App() {
  return (
    <CardProvider>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <NavBar />
                <Login />
                <Footer />
              </>
            }
          />
<Route path="/Checkout" element={
  <>
  <NavBar />
  <Checkout />
  <Footer />
  </>
}
/>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Home />
               
                <About />
                <Testimonial />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/courses"
            element={
              <>
                <NavBar />
                <CoursesList />
                <About />
                <Testimonial />
                <Contact />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </CardProvider>
  );
}

export default App;
