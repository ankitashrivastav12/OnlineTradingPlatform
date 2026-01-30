import React from "react";
import { Link } from "react-router-dom";

function Stats() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* LEFT CONTENT */}
        <div className="col-lg-6 col-12 mb-4">
          <h1 className="fs-3 mb-4">Trust with confidence</h1>

          <h2 className="fs-5">Customer-first always</h2>
          <p className="text-muted fs-6 mb-4">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of
            equity investments, making us India’s largest broker; contributing
            to 15% of daily retail exchange volumes in India.
          </p>

          <h2 className="fs-5">No spam or gimmicks</h2>
          <p className="text-muted fs-6 mb-4">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.{" "}
      
          </p>

          <h2 className="fs-5">The Zerodha universe</h2>
          <p className="text-muted fs-6 mb-4">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech
            startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-5">Do better with money</h2>
          <p className="text-muted fs-6">
            With initiatives like{" "}
            <a href="https://zerodha.com/nudge">Nudge</a> and{" "}
            <a href="https://zerodha.com/killswitch">Kill Switch</a>, we don't
            just facilitate transactions, but actively help you do better with
            your money.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="col-lg-6 col-12 text-center mb-4">
          <img
            src="images/ecosystem.png"
            alt="Zerodha ecosystem"
            className="img-fluid"
            style={{ maxWidth: "100%" }}
          />

          <div className="d-flex justify-content-center gap-4 mt-4 flex-wrap">
            <Link to="/product" style={{ textDecoration: "none" }}>
              Explore our products <i className="fa fa-long-arrow-right ps-2"></i>
            </Link>

            <a
              href="https://online-trading-platformdashboard-an.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Try Demo <i className="fa fa-long-arrow-right ps-2"></i>
            </a>

          </div>
        </div>
      </div>

      {/* PRESS LOGOS */}
      <div className="text-center mt-5">
        <img
          src="images/pressLogos.png"
          alt="Press logos"
          className="img-fluid"
          style={{ maxWidth: "90%" }}
        />
      </div>
    </div>
  );
}

export default Stats;
