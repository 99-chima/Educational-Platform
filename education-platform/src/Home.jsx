import learning from "./images/blended-learning.jpeg";
import CoursesList from './CoursesList';
import course from './courses';
function Home (){
    return (
        <>
        {/* intro */}
        <div className="container-fluid mt-3">
            <div className="row intro-bg pb-5">
                <div className="col-md-6">
                    <div className="ps-5 py-5 ms-4 mt-3">
                        <h2 className="Academia mt-5 text-primary fw-bold">Welcome to Academia Platform</h2>
                        <h4 className="mt-3 fw-bold" style={{color: "#00BFFF",}}>Learn Without any Limit</h4>
                        <h6 className="lh-lg mt-3 text-muted">
                            As we believe at academia as learning is a right for all of us. And as Aristo says
                            “Education is an ornament in prosperity and a refuge in adversity.”
                            we are as academia wants to help you to get Aristo feelings and encourage your CV with new experiences.
                        </h6>
                        <button className="btn btn-primary mt-4 rounded-pill px-3 py-2">Join for Free</button>
                    </div>
                </div>
                <div className="col-md-6 mt-5">
                    <img className="ms-1 img-fluid mt-5" style={{height: "300px",}} src={learning} alt="" />
                </div>
            </div>
        </div>

        {/* course cards section */}
        <div className="container mt-5">
                <h3 className="mb-4 text-primary text-center fw-bold" style={{fontSize: "50px",}}>Our Courses</h3>
            <CoursesList course={course} />
        </div>
        </>
    );
}

export default Home;