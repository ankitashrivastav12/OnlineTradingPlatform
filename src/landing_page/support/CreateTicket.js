import React from "react";

function CreateTicket() {
  return (
    <div className="container support-container">
      {/* Heading */}
      <div className="row my-5">
        <h1 className="fs-3 fw-normal">Support Portal</h1>
      </div>

      <div className="row support-content">
        {/* LEFT – QUICK LINKS */}
        <div className="col-lg-8 col-md-12">
          <h3 className="mb-4">Quick links</h3>

          <div className="support-links">
            <a href="#" className="d-block mb-2">
              Track account opening
            </a>
            <a
              href="https://kite.zerodha.com/connect/login?api_key=console"
              className="d-block mb-2"
            >
              Track segment activation
            </a>
            <a
              href="https://zerodha.com/marketintel/bulletin/249809/latest-intraday-leverages-mis-bo-co"
              className="d-block mb-2"
            >
              Intraday margins
            </a>
            <a
              href="https://kite.trade/docs/kite/"
              className="d-block"
            >
              Kite user manual
            </a>
          </div>
        </div>

        {/* RIGHT – FEATURED */}
        <div className="col-lg-4 col-md-12 mt-lg-0 mt-4">
          <div className="featured-box">
            <h6 className="mb-3">Featured</h6>
            <ol className="ps-3 mb-0">
              <li>
                <a href="https://zerodha.com/marketintel/bulletin/438494/current-takeovers-and-delisting-january-2026">
                  Current Takeovers and Delisting – January 2026
                </a>
              </li>
              <li>
                <a href="https://zerodha.com/marketintel/bulletin/438678/surveillance-measure-on-scrips-january-2026">
                  Surveillance measure on scrips – January 2026
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
