import React from "react";

function Education() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">

        {/* IMAGE */}
        <div className="col-lg-6 text-center mb-4 mb-lg-0">
          <img
            src="images/education.svg"
            alt="education"
            className="img-fluid"
            style={{ maxWidth: "420px" }}
          />
        </div>

        {/* CONTENT */}
        <div className="col-lg-6">
          <h1 className="fs-3 mb-4">
            Free and open market education
          </h1>

          <p className="fs-6 text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a
            href="https://zerodha.com/varsity/"
            style={{ textDecoration: "none", fontSize: "16px" }}
          >
            Varsity <i className="fa fa-long-arrow-right p-2"></i>
          </a>

          <p className="fs-6 text-muted mt-4">
            TradingQ&amp;A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a
            href="https://tradingqna.com/"
            style={{ textDecoration: "none", fontSize: "16px" }}
          >
            TradingQ&amp;A <i className="fa fa-long-arrow-right p-2"></i>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Education;
