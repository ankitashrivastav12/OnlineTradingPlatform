import React, { useState } from "react";

function Signup() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [showOtp, setShowOtp] = useState(false);
  const [verified, setVerified] = useState(false);

  const handleGetOtp = () => {
    if (mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    const otpValue = Math.floor(1000 + Math.random() * 9000);
    setGeneratedOtp(otpValue);
    setShowOtp(true);
    alert(`OTP: ${otpValue}`); // demo only
  };

  const handleVerifyOtp = () => {
    if (otp === generatedOtp?.toString()) {
      setVerified(true);
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="container p-5 mb-5">
      <div
        style={{
          maxWidth: "1200px",
          margin: "80px auto",
          padding: "0 20px",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen',
        }}
      >
        {/* Heading */}
        <div className="text-center">
          <h1 style={{ fontSize: "36px", fontWeight: "500" }}>
            Open a free demat and trading account online
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "#666",
              marginBottom: "40px",
            }}
          >
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </p>
        </div>

        {/* MAIN SECTION */}
        <div className="signup-wrapper">
          {/* LEFT */}
          <div className="signup-left">
            <img
              src="/images/account_open.svg"
              alt="account"
              className="signup-image"
            />
          </div>

          {/* RIGHT */}
          <div className="signup-right">
            <h3>Signup now</h3>
            <p style={{ color: "#666" }}>
              Or track your existing application
            </p>

            {/* Mobile input */}
            <div className="mobile-input">
              <div className="country-code">IN +91</div>
              <input
                type="text"
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            {!showOtp && (
              <button className="primary-btn" onClick={handleGetOtp}>
                Get OTP
              </button>
            )}

            {showOtp && !verified && (
              <>
                <input
                  className="otp-input"
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />

                <button className="primary-btn" onClick={handleVerifyOtp}>
                  Verify OTP
                </button>
              </>
            )}

            {verified && (
              <p style={{ color: "green", marginTop: "16px" }}>
                Mobile number verified successfully!
              </p>
            )}

            <p className="terms-text">
              By proceeding, you agree to the Zerodha{" "}
              <a href="https://zerodha.com/terms-and-conditions">terms</a> &{" "}
              <a href="https://zerodha.com/privacy-policy">privacy policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
