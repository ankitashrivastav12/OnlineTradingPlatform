import React from "react";

function Education() {
  return (
    <div className="container my-4 my-md-5">
      <div className="row align-items-center text-center text-lg-start">

        {/* IMAGE */}
        <div className="col-lg-6 mb-3 mb-lg-0">
          <img
            src="images/education.svg"
            alt="education"
            className="img-fluid"
            style={{ maxWidth: "380px", width: "100%" }}
          />
        </div>

        {/* CONTENT */}
        <div className="col-lg-6 px-3 px-lg-0">
          <h2 className="fs-4 fs-md-3 mb-3">
            Free and open market education
          </h2>

          <p className="fs-6 text-muted mb-2">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a
            href="https://zerodha.com/varsity/"
            className="d-inline-block mb-3"
            style={{ textDecoration: "none", fontSize: "15px", fontWeight: "500" }}
          >
            Varsity <i className="fa fa-long-arrow-right ms-1"></i>
          </a>

          <p className="fs-6 text-muted mb-2">
            TradingQ&amp;A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a
            href="https://tradingqna.com/"
            style={{ textDecoration: "none", fontSize: "15px", fontWeight: "500" }}
          >
            TradingQ&amp;A <i className="fa fa-long-arrow-right ms-1"></i>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Education;
