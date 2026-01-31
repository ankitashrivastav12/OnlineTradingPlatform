import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container my-4 my-md-5">
      <div className="row text-center justify-content-center">

        {/* Hero Image */}
        <div className="col-12 mb-3 mb-md-5">
          <img
            src="images/landing.svg"
            alt="Hero"
            className="img-fluid"
            style={{ maxWidth: "500px", width: "100%" }}
          />
        </div>

        {/* Hero Content */}
        <div className="col-12 col-md-10">
          <h1 className="fw-semibold mb-2">
            Invest in everything
          </h1>

          <p className="text-muted fs-6 fs-md-5 mb-3">
            Online platform to invest in stocks, derivatives, mutual funds, ETFs,
            bonds, and more.
          </p>

          <Link to="/signup">
            <button className="btn btn-primary px-4 py-2">
              Sign up for free
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Hero;
