import academiaLogo from "./images/logo.jpeg";
import socialMedia from "./images/social.jpeg";
function Footer (){
    return (
        <>
        <div className="footer-bg mt-5 pb-5">
      <div className="container">
        <div className="row">
            <div className="col-md-3 mt-5">
                <h4 className="text-white fw-bold text-uppercase footer-item">About Us</h4>
                <p className="text-white mt-2 lh-lg">Heaven fruitful doesn't over lesser <br /> days appear creeping seasons so <br /> behold bearing days open</p>
                <img src={academiaLogo} className="img-fluid w-50 h-25 mt-4" alt="Academia Logo" />
            </div>
            <div className="col-md-3 mt-5">
                <h4 className="text-white fw-bold text-uppercase footer-item">contact info</h4>
                <p className="text-white lh-lg">A108 Adam Street <br /> New York, NY 535022</p>
                <p className="text-white mt-2">Phone: +1 5589 55488 55</p>
                <p className="text-white mt-3">academia@gmail.com</p>
                <img src={socialMedia} className="img-fluid mt-4" alt="" />
            </div>
            <div className="col-md-3 mt-5">
                <h4 className="text-white fw-bold footer-item">IMPORTANT LINK</h4>
                <ul className="list-unstyled text-white mt-3 lh-lg">
                    <li>Home</li>
                    <li>Courses</li>
                    <li>Cart</li>
                    <li>LogIn</li>
                </ul>
            </div>
            <div className="col-md-3 mt-5">
                <h4 className="text-white fw-bold text-uppercase footer-item">NEWSLETTER</h4>
                <p className="text-white mt-3 lh-lg">Heaven fruitful doesn't over lesser in days. Appear creeping seasons</p>
                <input type="email" placeholder="Enter your Email" className="form-control w-75"/>
                <button className="btn form-btn" type="submit">OK</button>
            </div>
        </div>
      </div>
      <div className='line'></div>
      <div className="footer-end">
        <p className="mt-5 text-white text-center fw-bold">© Copyright <span className="fw-bold ms-1 me-1" style={{color: "#00BFFF",}}>Academia</span> All Rights Reserved</p>
      </div>
      </div>
      </>
    )
};
export default Footer;
