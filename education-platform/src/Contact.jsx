import { useState} from "react";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Auto-hide alert after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="container my-5 pt-5">
      <h2 className="text-center text-primary fw-bold mb-4">Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">

          {/* ✅ Alert appears after submit and auto-hides */}
          {submitted && (
            <div className="alert alert-success text-center" role="alert">
              ✅ Your message has been sent successfully!
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-bold" style={{color: "#00BFFF",}}>Your Name</label>
              <input
                type="text"
                name="name"
                className="form-control mt-1"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold" style={{color: "#00BFFF",}}>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control mt-1"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold" style={{color: "#00BFFF",}}>Message</label>
              <textarea
                name="message"
                className="form-control mt-1"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
