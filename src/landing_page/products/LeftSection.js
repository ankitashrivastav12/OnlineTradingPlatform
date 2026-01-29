import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  tryDemoText = "Try Demo",
  learnMoreText = "Learn More",
  googlePlay,
  appStore,
}) {
  return (
    <div className="container my-5">
      <div className="row border-top align-items-center py-5">

        {/* IMAGE SECTION */}
        <div className="col-lg-6 col-12 text-center mb-4 mb-lg-0">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

        {/* TEXT SECTION */}
        <div className="col-lg-6 col-12">
          <h1 className="fs-3 text-muted mb-3">{productName}</h1>

          <p className="text-muted" style={{ maxWidth: "520px" }}>
            {productDescription}
          </p>

          {/* LINKS */}
          <div className="mt-2">
            {tryDemo && (
              <a href={tryDemo} className="me-4">
                {tryDemoText}
                <i className="fa fa-long-arrow-right p-2"></i>
              </a>
            )}

            {learnMore && (
              <a href={learnMore}>
                {learnMoreText}
                <i className="fa fa-long-arrow-right p-2"></i>
              </a>
            )}
          </div>

          {/* STORE BADGES */}
          <div className="mt-4">
            {googlePlay && (
              <a href={googlePlay} className="me-4">
                <img
                  src="images/googlePlayBadge.svg"
                  alt="Google Play"
                  style={{ height: "40px" }}
                />
              </a>
            )}

            {appStore && (
              <a href={appStore}>
                <img
                  src="images/appstoreBadge.svg"
                  alt="App Store"
                  style={{ height: "40px" }}
                />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;
