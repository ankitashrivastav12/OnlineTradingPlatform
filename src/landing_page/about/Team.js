import React from "react";

function Team() {
  return (
    <div className="container team-section">
      <div className="row py-5">
        <h1 className="text-center fs-3">People</h1>
      </div>

      <div className="row align-items-center team-content">
        {/* Image + Name */}
        <div className="col-lg-5 col-md-12 text-center team-left">
          <img
            src="images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="team-img"
          />
          <h4 className="mt-4">Nithin Kamath</h4>
          <h6 className="text-muted">Founder, CEO</h6>
        </div>

        {/* Text */}
        <div className="col-lg-7 col-md-12 team-right">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <a href="https://nithinkamath.me/">Homepage</a> /{" "}
            <a href="https://tradingqna.com/u/nithin/summary">TradingQnA</a> /{" "}
            <a href="https://x.com/Nithin0dha">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
