import React from "react";

function Hero() {
  return (
    <div className="container about-hero">
      {/* Heading */}
      <div className="row py-5 my-5">
        <h1 className="fs-4 text-center">
          We pioneered the discount broking model in India
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      {/* Content */}
      <div className="row border-top about-content">
        <div className="col-lg-6 col-md-12 about-text">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company Zerodha,
            a combination of Zero and "Rodha", the Sanskrit word for barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>

        <div className="col-lg-6 col-md-12 about-text">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="https://rainmatter.com/">Rainmatter</a>, our fintech fund and
            incubator, has invested in several fintech startups with the goal of
            growing the Indian capital markets.
          </p>
          <p>
            Catch up on our <a href="https://zerodha.com/z-connect/">blog</a>, see
            what the media is{" "}
            <a href="https://zerodha.com/media">saying about us</a>, or learn more
            about our product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
