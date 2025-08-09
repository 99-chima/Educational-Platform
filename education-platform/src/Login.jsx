import React, { useState } from 'react';
function Login() {
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (activeTab === 'login') {
      //  login check
      if (email === 'user@example.com' && password === 'Test@1234') {
        alert('Login successful');
      } else {
        alert('Invalid login');
      }
    } else {
      // Sign up logic (mocked)
      alert('Account created successfully!');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5" style={{ minHeight: '100vh' }}>
      <div className="w-50 bg-light p-5 rounded shadow">
        {/* Tab Buttons */}
        <div className="d-flex justify-content-center mb-4">
          <button
            className={`btn ${activeTab === 'login' ? 'btn-primary' : 'btn-outline-primary'} me-2`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`btn ${activeTab === 'signup' ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </button>
        </div>

        {/* Form Title */}
        <h4 className="text-center mb-3"  style={{color: "#00BFFF",}}>{activeTab === 'login' ? 'Welcome Back' : 'Create Account'}</h4>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold mt-2 fs-5" style={{color: "#00BFFF",}}>Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold fs-5" style={{color: "#00BFFF",}}>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              required
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$"
              title="Must include uppercase, lowercase, number, and special character, min 8 chars"
            />
           
          </div>

          {/* Forgot Password (only on login tab) */}
          {activeTab === 'login' && (
            <div className="mb-3 text-end">
             <button
  type="button"
  className="btn btn-link p-0 text-decoration-none"
  onClick={() => alert("Reset link sent!")}
>
  Forgot Password?
</button>
            </div>
          )}

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            {activeTab === 'login' ? 'Login' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
