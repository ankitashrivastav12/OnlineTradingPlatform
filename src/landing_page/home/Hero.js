import React from "react";

function Hero() {
  return (
    <div className="container my-5">
      <div className="row text-center justify-content-center">
        
        <div className="col-12">
          <img
            src="images/landing.svg"
            alt="Hero"
            className="img-fluid mb-5"
            style={{ maxWidth: "600px" }}
          />
        </div>

        <div className="col-12">
          <h1 className="fs-3">Invest in everything</h1>
          <p className="fs-5 text-muted mt-2">
            Online platform to invest in stocks, derivatives, mutual funds, ETFs,
            bonds, and more.
          </p>

          <a href="http://localhost:3000/signup">
            <button className="btn btn-primary fs-5 px-4 py-2 mt-4">
              Sign up for free
            </button>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Hero;
