import React from "react";

function Footer() {
  return (
    <footer className="footer border-top py-5" style={{ background: "#f8f9fa" }}>
      <div className="container">

        {/* ===== TOP: ZERODHA SECTION ===== */}
        <div className="row mb-4">
          <div className="col-12 text-center text-md-start">
            <img src="images/logo.svg" alt="Zerodha" width="140" />

            <p className="text-muted mt-3 mb-1" style={{ fontSize: "14px" }}>
              © 2010 - 2025, Zerodha Broking Ltd.
            </p>
            <p className="text-muted" style={{ fontSize: "14px" }}>
              All rights reserved.
            </p>

            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3 footer-icons">
              <a href="https://www.facebook.com/zerodha.social"><i className="fa fa-facebook-official"></i></a>
              <a href="https://www.instagram.com/zerodhaonline/"><i className="fa fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/zerodha/"><i className="fa fa-linkedin"></i></a>
              <a href="https://www.youtube.com/@zerodhaonline"><i className="fa fa-youtube-play"></i></a>
              <a href="https://www.whatsapp.com/channel/0029Va8tzF0EquiIIb9j791g"><i className="fa fa-whatsapp"></i></a>
              <a href="https://t.me/zerodhain"><i className="fa fa-telegram"></i></a>
            </div>
          </div>
        </div>

        {/* ===== BOTTOM: LINKS GRID ===== */}
        <div className="row gy-4">

          {/* ACCOUNT */}
          <div className="col-6 col-md-3">
            <h6>Account</h6>
            <a href="https://zerodha.com/open-account/">Open demat account</a><br />
            <a href="https://zerodha.com/open-account/minor/">Minor demat account</a><br />
            <a href="https://zerodha.com/open-account/nri/">NRI demat account</a><br />
            <a href="https://zerodha.com/commodities/">Commodity</a><br />
            <a href="https://zerodha.com/dematerialise/">Dematerialisation</a><br />
            <a href="https://zerodha.com/fund-transfer/#tab-deposit_funds">Fund transfer</a><br />
            <a href="https://zerodha.com/mtf/">MTF</a><br />
            <a href="https://zerodha.com/refer/">Referral program</a>
          </div>

          {/* SUPPORT */}
          <div className="col-6 col-md-3">
            <h6>Support</h6>
            <a href="https://zerodha.com/contact/">Contact us</a><br />
            <a href="https://support.zerodha.com/">Support portal</a><br />
            <a href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/how-do-i-create-a-ticket-at-zerodha">How to file a complaint?</a><br />
            <a href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/track-complaints-or-tickets">Status of your complaints</a><br />
            <a href="https://zerodha.com/marketintel/bulletin/">Bulletin</a><br />
            <a href="https://zerodha.com/marketintel/circulars/">Circular</a><br />
            <a href="https://zerodha.com/z-connect/">Z-Connect blog</a><br />
            <a href="https://zerodha.com/resources/">Downloads</a>
          </div>

          {/* COMPANY */}
          <div className="col-6 col-md-3">
            <h6>Company</h6>
            <a href="https://zerodha.com/about/">About</a><br />
            <a href="https://zerodha.com/about/philosophy/">Philosophy</a><br />
            <a href="https://zerodha.com/media/">Press & media</a><br />
            <a href="https://careers.zerodha.com/">Careers</a><br />
            <a href="https://zerodha.com/cares/">Zerodha Cares (CSR)</a><br />
            <a href="https://zerodha.tech/">Zerodha.tech</a><br />
            <a href="https://zerodha.com/open-source/">Open source</a>
          </div>

          {/* QUICK LINKS */}
          <div className="col-6 col-md-3">
            <h6>Quick links</h6>
            <a href="https://zerodha.com/ipo/">Upcoming IPOs</a><br />
            <a href="https://zerodha.com/charges/#tab-equities">Brokerage charges</a><br />
            <a href="https://zerodha.com/marketintel/holiday-calendar/">Market holidays</a><br />
            <a href="https://zerodha.com/markets/calendar/">Economic calendar</a><br />
            <a href="https://zerodha.com/calculators/">Calculators</a><br />
            <a href="https://zerodha.com/markets/stocks/">Markets</a><br />
            <a href="https://zerodha.com/markets/sector/">Sectors</a>
          </div>

        </div>

        {/* BASE LINKS */}
        <div className="text-center text-muted mt-5 footer-base">
          <a href="https://www.nseindia.com/">NSE</a>
          <a href="https://www.bseindia.com/">BSE</a>
          <a href="https://www.mcxindia.com/">MCX</a>
          <a href="https://zerodha.com/terms-and-conditions/">Terms</a>
          <a href="https://zerodha.com/policies-and-procedures/">Policies</a>
          <a href="https://zerodha.com/privacy-policy/">Privacy</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
