function Contact() {
    return (
      <div className="container my-5 pt-5">
        <h2 className="text-center text-primary fw-bold mb-4">Contact Us</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form>
              <div className="mb-3">
                <label className="form-label fw-bold" style={{color: "#00BFFF",}}>Your Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold" style={{color: "#00BFFF",}}>Email address</label>
                <input type="email" className="form-control" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold" style={{color: "#00BFFF",}}>Message</label>
                <textarea className="form-control" rows="4" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary mt-2">Send</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  export default Contact;