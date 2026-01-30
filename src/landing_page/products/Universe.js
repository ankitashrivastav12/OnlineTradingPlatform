import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container my-5">

      {/* Top text */}
      <div className="text-center mb-5">
        <h5 className="fw-normal">
          Want to know more about our technology stack? Check out the{" "}
          <a href="https://zerodha.tech/">Zerodha.tech</a> blog.
        </h5>

        <h1 className="fs-3 mt-5 fw-normal">
          The Zerodha Universe
        </h1>

        <h3 className="mt-3 fs-5 fw-normal text-muted">
          Extend your trading and investment experience even further with our partner platforms
        </h3>
      </div>

      {/* GRID */}
      <div className="row text-center justify-content-center">

        {/* ITEM */}
        <div className="col-lg-4 col-md-6 mb-5">
          <a href="https://www.zerodhafundhouse.com/" className="text-decoration-none text-dark">
            <img src="images/zerodhaFundHouse.png" alt="Zerodha Fund House" className="img-fluid mb-3" style={{ maxHeight: "70px" }} />
            <p className="universe-text">
              Our asset management venture that is creating simple and transparent index funds.
            </p>
          </a>
        </div>

        <div className="col-lg-4 col-md-6 mb-5">
          <a href="https://sensibull.com/" className="text-decoration-none text-dark">
            <img src="images/sensibullLogo.svg" alt="Sensibull" className="img-fluid mb-3" style={{ maxHeight: "70px" }} />
            <p className="universe-text">
              Options trading platform to create strategies and analyze positions.
            </p>
          </a>
        </div>

        <div className="col-lg-4 col-md-6 mb-5">
          <a href="https://www.tijorifinance.com/dashboard/" className="text-decoration-none text-dark">
            <img src="images/tijori.svg" alt="Tijori" className="img-fluid mb-3" style={{ maxHeight: "70px" }} />
            <p className="universe-text">
              Investment research platform with deep insights on stocks and sectors.
            </p>
          </a>
        </div>

        <div className="col-lg-4 col-md-6 mb-5">
          <a href="https://www.streak.tech/home" className="text-decoration-none text-dark">
            <img src="images/streakLogo.png" alt="Streak" className="img-fluid mb-3" style={{ maxHeight: "70px" }} />
            <p className="universe-text">
              Systematic trading platform to create and backtest strategies without coding.
            </p>
          </a>
        </div>

        <div className="col-lg-4 col-md-6 mb-5">
          <a href="https://smallcase.zerodha.com/" className="text-decoration-none text-dark">
            <img src="images/smallcaseLogo.png" alt="Smallcase" className="img-fluid mb-3" style={{ maxHeight: "70px" }} />
            <p className="universe-text">
              Thematic investing platform to invest in baskets of stocks and ETFs.
            </p>
          </a>
        </div>

        <div className="col-lg-4 col-md-6 mb-5">
          <a href="https://joinditto.in/" className="text-decoration-none text-dark">
            <img src="images/dittoLogo.png" alt="Ditto" className="img-fluid mb-3" style={{ maxHeight: "70px" }} />
            <p className="universe-text">
              Personalised advice on life and health insurance. No spam.
            </p>
          </a>
        </div>
      </div>

      {/* BUTTON */}
      <div className="text-center mt-4">
        <Link to="/signup">
          <button className="btn btn-primary fs-5 px-4 py-2">
            Sign up for free
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Universe;
