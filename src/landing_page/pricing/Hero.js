import React from "react";

function Hero() {
  return (
    <div className="container mt-5 pt-4">
      {/* Heading */}
      <div className="row text-center mb-5">
        <h1 className="fs-3">Charges</h1>
        <p className="fs-5 text-muted">List of all charges and taxes</p>
      </div>

      {/* Pricing cards */}
      <div className="row text-center g-4">
        <div className="col-12 col-md-4">
          <img
            src="images/pricing-eq.svg"
            alt="Free equity delivery pricing"
            className="img-fluid mb-3"
            style={{ maxWidth: "200px" }}
          />
          <h3 className="mt-3">Free equity delivery</h3>
          <p className="mt-3 text-muted">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
          </p>
        </div>

        <div className="col-12 col-md-4">
          <img
            src="images/other-trades.svg"
            alt="Intraday and F&O pricing"
            className="img-fluid mb-3"
            style={{ maxWidth: "200px" }}
          />
          <h3 className="mt-3">Intraday and F&O trades</h3>
          <p className="mt-3 text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades.
          </p>
        </div>

        <div className="col-12 col-md-4">
          <img
            src="images/pricing-eq.svg"
            alt="Free direct mutual fund pricing"
            className="img-fluid mb-3"
            style={{ maxWidth: "200px" }}
          />
          <h3 className="mt-3">Free direct MF</h3>
          <p className="mt-3 text-muted">
            All direct mutual fund investments are absolutely free — ₹0 commissions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
