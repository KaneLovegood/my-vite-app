import React, { useState } from "react";
import { Apple, EnvelopeAt, Facebook, Google, X } from "react-bootstrap-icons";
import loginImage from "../assets/Image 72.png";
import "../css/LoginDialog.css";

const LoginDialog = ({ isOpen, onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    // Giả lập đăng nhập
    setTimeout(() => {
      onLoginSuccess({ email: email });
      setLoading(false);
    }, 1000);
  };

  const handleSocialLogin = (provider) => {
    setLoading(true);
    // Giả lập đăng nhập mạng xã hội
    setTimeout(() => {
      const userData = {
        name: `User ${provider}`,
        email: `user@${provider.toLowerCase()}.com`,
        provider: provider,
      };
      onLoginSuccess(userData);
      setLoading(false);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="login-dialog">
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="login-content">
          <div className="login-left">
            <h2>"Embrace the art of cooking, where flavors come alive!"</h2>
            <div className="login-image">
              <img src={loginImage} alt="Delicious food" />
            </div>
          </div>

          <div className="login-right">
            <h2>Login</h2>
            <p>Enter your email to log in.</p>

            <div className="login-form">
              <form onSubmit={handleEmailLogin}>
                <div className="input-group">
                  <EnvelopeAt className="input-icon" size={20} />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="email-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="continue-button"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Continue with Email"}
                </button>
              </form>

              <div className="divider">
                <span>OR</span>
              </div>

              <div className="social-buttons">
                <button
                  className="social-button google-button"
                  onClick={() => handleSocialLogin("Google")}
                  disabled={loading}
                >
                  <Google />
                  <span>Continue with Google</span>
                </button>

                <button
                  className="social-button facebook-button"
                  onClick={() => handleSocialLogin("Facebook")}
                  disabled={loading}
                >
                  <Facebook />
                  <span>Continue with Facebook</span>
                </button>

                <button
                  className="social-button apple-button"
                  onClick={() => handleSocialLogin("Apple")}
                  disabled={loading}
                >
                  <Apple />
                  <span>Continue with Apple</span>
                </button>
              </div>
            </div>

            <div className="terms">
              <p>
                By continuing, you agree to the updated{" "}
                <a href="#">Terms of Sale</a>, <a href="#">Terms of Service</a>,
                and <a href="#">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginDialog;
