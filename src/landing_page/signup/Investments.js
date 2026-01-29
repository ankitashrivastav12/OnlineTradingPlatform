import React from "react";

const Investments = () => {
  return (
    <div className="container text-center my-5">
      {/* Heading */}
      <h2 className="mb-5" style={styles.heading}>
        Investment options with Zerodha demat account
      </h2>

      {/* ROW 1 */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-5 mb-4">
          <div style={styles.card}>
            <img src="images/stocks-acop.svg" alt="Stocks" style={styles.icon} />
            <h3 className="mt-3">Stocks</h3>
            <p>Invest in all exchange-listed securities</p>
          </div>
        </div>

        <div className="col-md-5 mb-4">
          <div style={styles.card}>
            <img src="images/mf-acop.svg" alt="Mutual Funds" style={styles.icon} />
            <h3 className="mt-3">Mutual funds</h3>
            <p>Invest in commission-free direct mutual funds</p>
          </div>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-5 mb-4">
          <div style={styles.card}>
            <img src="images/ipo-acop.svg" alt="IPO" style={styles.icon} />
            <h3 className="mt-3">IPO</h3>
            <p>Apply to the latest IPOs instantly via UPI</p>
          </div>
        </div>

        <div className="col-md-5 mb-4">
          <div style={styles.card}>
            <img src="images/fo-acop.svg" alt="F&O" style={styles.icon} />
            <h3 className="mt-3">Futures & options</h3>
            <p>
              Hedge and mitigate market risk through simplified F&O trading
            </p>
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <a href="https://zerodha.com/investments/">
        <button className="btn btn-primary fs-5 px-4 py-2 mt-4">
          Explore Investments
        </button>
      </a>
    </div>
  );
};

const styles = {
  heading: {
    fontSize: "28px",
    color: "#333",
  },
  card: {
    textAlign: "center",
    padding: "20px",
  },
  icon: {
    width: "80px",
    marginBottom: "10px",
  },
};

export default Investments;
