import TeamWork from "./images/team.jpg";
import { BsCheckCircleFill } from "react-icons/bs";
function About() {
    return (
      <div className="container my-5 pt-5">
        <h2 className="text-center text-primary fw-bold mb-4">About Us</h2>
        <div className="row align-items-center">
        <div className="col-md-6">
            <h4 style={{color: "#00BFFF",}} className="mt-2 fw-bold">Our Vision</h4>
            <p className="text-muted mt-2">We provide free, high-quality education to anyone eager to learn and build a better future.</p>
            <h4 style={{color: "#00BFFF",}} className="mt-2 fw-bold">Our Mission</h4>
            <p className="text-muted mt-2">To empower learners in the Arab world to acquire modern skills and grow their potential.</p>
            <h4 style={{color: "#00BFFF",}} className="mt-2 fw-bold">Our Values</h4>
            <ul className="list-unstyled lh-lg">
              <li> <BsCheckCircleFill style={{color: "#1DB954"}} /> Education for all</li>
              <li> <BsCheckCircleFill style={{color: "#1DB954"}} /> Quality and trust</li>
              <li> <BsCheckCircleFill style={{color: "#1DB954"}} /> Continuous development</li>
            </ul>
          </div>
          <div className="col-md-6">
            <img src={TeamWork} alt="Our Team" className="img-fluid" />
          </div>
        </div>
      </div>
    );
  }
  export default About;