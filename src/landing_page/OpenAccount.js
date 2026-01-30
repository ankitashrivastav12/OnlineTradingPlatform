import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 fs-3">Open a Zerodha account</h1>

        <p className="fs-6 mt-3">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>

        <div className="d-flex justify-content-center mt-4">
          <Link to="/signup"
           className="w-100 w-sm-auto">
            <button
              className="btn btn-primary fs-5 px-4 py-2"
              style={{ maxWidth: "280px", width: "100%" }}
            >
              Sign up for free
            </button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
