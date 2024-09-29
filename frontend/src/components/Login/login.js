import React from 'react';
import './login.css'; // Import the CSS for styling

function Login() {
    return (
        <div className="login-container">
            {/* Left side with the logo */}
            <div className="logo-section">
                <img
                    src="/marison-square-logo-white-1.png"
                    alt="Marison Hotel Logo"
                    className="hotel-logo"
                />
            </div>

            {/* Right side with the login form */}
            <div className="login-form-section">
                <form className="login-form">
                    <h2>Sign In</h2>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" />

                    <button type="submit" className="sign-in-btn">Sign In</button>

                    <a href="#" className="forgot-password">Forgot password?</a>
                </form>
            </div>
        </div>
    );
}

export default Login;
