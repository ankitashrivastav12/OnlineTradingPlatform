import React from "react";

function Pricing() {
  return (
    <div className="container my-5">
      <div className="row align-items-start">

        {/* LEFT CONTENT */}
        <div className="col-lg-5 mb-4">
          <h1 className="fs-4 mb-3">Unbeatable pricing</h1>

          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a href="#" style={{ textDecoration: "none" }}>
            See pricing <i className="fa fa-long-arrow-right p-2"></i>
          </a>
        </div>

        {/* RIGHT ICON BLOCKS */}
        <div className="col-lg-7">
          <div className="row text-center">

            {/* ITEM 1 */}
            <div className="col-12 col-md-4 mb-4">
              <img
                src="images/pricing-eq.svg"
                alt="pricing"
                style={{ width: "110px" }}
              />
              <p className="mt-2 small">
                Free account opening
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="col-12 col-md-4 mb-4">
              <img
                src="images/pricing-eq.svg"
                alt="pricing"
                style={{ width: "110px" }}
              />
              <p className="mt-2 small">
                Free equity delivery and direct mutual funds
              </p>
            </div>

            {/* ITEM 3 */}
            <div className="col-12 col-md-4 mb-4">
              <img
                src="images/other-trades.svg"
                alt="pricing"
                style={{ width: "110px" }}
              />
              <p className="mt-2 small">
                Intraday and F&amp;O
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
