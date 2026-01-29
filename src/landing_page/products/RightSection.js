import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
  linkText = "Learn More",
}) {
  return (
    <div className="container">
      <div className="row align-items-center border-top py-5 flex-column-reverse flex-lg-row">

        {/* CONTENT */}
        <div className="col-lg-6 px-lg-5 text-center text-lg-start">
          <h2 className="fs-3 text-muted">{productName}</h2>
          <p className="mt-3">{productDescription}</p>

          {learnMore && (
            <a href={learnMore}>
              {linkText}
              <i className="fa fa-long-arrow-right ps-2"></i>
            </a>
          )}
        </div>

        {/* IMAGE */}
        <div className="col-lg-6 text-center mb-4 mb-lg-0">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
