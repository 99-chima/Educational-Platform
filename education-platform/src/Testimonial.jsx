import firstphoto from "./images/team-1.jpeg";
import secondphoto from "./images/team-2.jpeg";
import thirdphoto from "./images/team-3.jpeg";
function Testimonial (){
    return (
        <div className="container-fluid testimonial-bg">
            <div className="row mt-5">
            <div className="col-md-12">
            <div className="carousel slide" id="slides-with-indicators" data-bs-ride= "carousel" data-bs-interval="2000">
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex justify-content-center mt-5 pt-4">
                        <img className="d-block testi" src={firstphoto} alt="" />
                        </div>
                        <h2 className="text-white fw-bold text-center mt-3">Raul Edward</h2>
                        <h5 className="text-primary fw-bold text-center mt-3">Ceo & Founder</h5>
                        <p className="text-white mt-3 text-center">Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies <br /> eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</p>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex justify-content-center mt-5 pt-4">
                        <img className="d-block testi" src={secondphoto} alt="" />
                        </div>
                        <h2 className="text-white fw-bold text-center mt-3">Sarah Jhonson</h2>
                        <h5 className="text-primary fw-bold text-center mt-3">Courses Coordinator</h5>
                    <p className="text-white mt-3 text-center">Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies <br /> eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</p>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex justify-content-center mt-5 pt-4">
                        <img className="d-block testi" src={thirdphoto} alt="" />
                        </div>
                        <h2 className="text-white fw-bold text-center mt-3">Michael Pop</h2>
                        <h5 className="text-primary fw-bold text-center mt-3">Social Media Manager</h5>
                        <p className="text-white mt-3 text-center">Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies <br /> eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</p>
                    </div>
                    </div>
                    <div className="carousel-indicators">
                         <button type="button" data-bs-target="#slides-with-indicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#slides-with-indicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                       <button type="button" data-bs-target="#slides-with-indicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
                </div>
            </div>
            </div>
        </div>
    );
};
export default Testimonial;
