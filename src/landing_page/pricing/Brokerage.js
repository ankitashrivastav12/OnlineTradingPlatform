import React from 'react';
function Brokerage() {
    return ( 
    <div className="container mt-5">

      {/* Tabs */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#equity">
            Equity
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" data-bs-toggle="tab" data-bs-target="#currency">
            Currency
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" data-bs-toggle="tab" data-bs-target="#commodity">
            Commodity
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content p-5">

        {/* ================= EQUITY ================= */}
        <div className="tab-pane fade show active" id="equity">
          <table className="table table-bordered pricing-table">

            <thead>
              <tr>
                <th></th>
                <th>Equity delivery</th>
                <th>Equity intraday</th>
                <th>F&O - Futures</th>
                <th>F&O - Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>Zero Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>0.03% or ₹20 / order</td>
                <td>Flat Rs. 20 per executed order</td>
              </tr>
              <tr>
                <td>STT / CTT</td>
                <td>0.1% on buy & sell</td>
                <td>0.025% on sell side</td>
                <td>0.02% on sell side</td>
                <td>
                  <ul>
                    <li>
                      0.125% of the intrinsic value on options that are bought and exercised.
                    </li>
                    <li>
                      0.1% on sell side (on premium).
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Transaction charges</td>
                <td>
                  <tr>
                    NSE: 0.00297% 
                  </tr>
                  <tr>
                    BSE:0
                  </tr>
                </td>
                <td>
                  <tr>
                     NSE: 0.00297%
                  </tr>
                  <tr>
                    BSE:0.00375%
                  </tr>
                </td>  
                <td>
                  <tr>
                    NSE: 0.00173%
                  </tr>
                  <tr>
                    BSE:0
                  </tr>
                </td>
                <td>
                  <tr>
                    NSE: 0.03503%(on premium)
                  </tr>
                  <tr>
                    BSE:0.0325%(on premium)
                  </tr>
                
                </td>
              </tr>
              <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <td>SEBI charges</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td>Stamp charges</td>
                <td>0.015% or ₹1500 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
                <td>0.002% or ₹200 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ================= CURRENCY ================= */}
        <div className="tab-pane fade" id="currency">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th></th>
                <th>Currency futures</th>
                <th>Currency options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>0.03% or ₹ 20/executed order whichever is lower</td>
                <td>₹ 20/executed order</td>
              </tr>
              <tr>
                <td>STT / CTT</td>
                <td>No STT</td>
                <td>No STT</td>
              </tr>
              <tr>
                <td>Transaction charges</td>
                <td>
                  <tr>
                    NSE: 0.00035%
                  </tr>
                  <tr>
                    BSE:0.00045%
                  </tr>
                </td>
                <td>
                  <tr>
                    NSE: 0.0311%
                    
                  </tr>
                  <tr>
                    BSE:0.001%
                  </tr>
                </td>
              </tr>
              <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <td>SEBI charges</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td>Stamp charges</td>
                <td>0.0001% or ₹10 / crore on buy side</td>
                <td>0.0001% or ₹10 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ================= COMMODITY ================= */}
        <div className="tab-pane fade" id="commodity">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th></th>
                <th>Commodity futures</th>
                <th>Commodity options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>₹ 20/executed order</td>
              </tr>
              <tr>
                <td>STT / CTT</td>
                <td>0.01% on sell side (Non-Agri)</td>
                <td>0.05% on sell side</td>
              </tr>
              <tr>
                <td>Transaction charges</td>
                <td>MCX: 0.0021%</td>
                <td>MCX: 0.0418%</td>
              </tr>
              <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <td>SEBI charges</td>
                <td>
                  <tr>Agri:</tr>
                  <tr>₹1 / crore</tr>
                  <tr>Non-agri:</tr>
                  <tr>₹10 / crore</tr>
                </td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td>Stamp charges</td>
                <td>0.002% or ₹200 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

      {/* Calculator link */}
      <div className="text-center mt-5">
        <p className="fs-5 text-muted">
          <a href="https://zerodha.com/brokerage-calculator#tab-equities" >Calculate your costs upfront</a> using our brokerage calculator
        </p> 
      </div>
      <h4 className='mx-5 mt-5'>Charges for account opening</h4>
      <div className="tab-content">
          <div className="tab-pane fade show active p-5">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Type of account</th>
                  <th>Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Online account</td>
                  <td>FREE</td>
                </tr>
                <tr>
                  <td>Offline account</td>
                  <td>FREE</td>
                </tr>
                <tr>
                  <td>NRI account (offline only)</td>
                  <td>₹ 500</td>
                </tr>
                <tr>
                  <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                  <td>₹ 500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <h4 className='mx-5'>Demat AMC (Annual Maintenance Charge)</h4>
        <div className="tab-content">
          <div className="tab-pane fade show active p-5">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Value of holdings</th>
                  <th>AMC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Up to ₹4 lakh</td>
                  <td>FREE</td>
                </tr>
                <tr>
                  <td>₹4 lakh - ₹10 lakh</td>
                  <td>₹ 100 per year, charged quarterly*</td>
                </tr>
                <tr>
                  <td>Above ₹10 lakh</td>
                  <td>₹ 300 per year, charged quarterly</td>
                </tr>
              </tbody>
            </table>
            <p style={{fontSize:"12px"}}>* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA, click here.</p>
          </div>
        </div>
        <h4 className='mx-5'>Charges for optional value added services</h4>
        <div className="tab-content">
            <div className="tab-pane fade show active p-5">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Billing Frquency</th>
                    <th>Charges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tickertape</td>
                    <td>Monthly / Annual</td>
                    <td>Free: 0 | Pro: 249/2399</td>
                  </tr>
                  <tr>
                    <td>Smallcase</td>
                    <td>Per transaction</td>
                    <td>Buy & Invest More: 100 | SIP: 10</td>
                  </tr>
                  <tr>
                    <td>Kite Connect</td>
                    <td>Monthly</td>
                    <td>Connect: 500 | Personal: Free</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <h4 className="mx-5">Charges explained</h4>
          <div className='row mx-4'>
            <div className='col-6 p-4'>
              <p style={{fontsize:"15px"}}>Securities/Commodities transaction tax</p>

              <p className='para'> Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>

              <p className='para'>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>

              <p style={{fontsize:"25px"}}>Transaction/Turnover Charges</p>

              <p className='para'>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>

              <p className='para'>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>

              <p className='para'>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>

              <p className='para'>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>

              <p className='para'>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>

              <p style={{fontsize:"15px"}}>Call & trade</p>

              <p className='para'>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>

              <p style={{fontsize:"15px"}}>Stamp charges</p>

              <p className='para'>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>

              <p style={{fontsize:"15px"}}>NRI brokerage charges</p>

              <p className='para'>
                <ul>
                <li>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).</li>
                <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                </ul>
              </p>
              
              <p style={{fontsize:"15px"}}>Account with debit balance</p>

              <p className='para'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>

              <p style={{fontsize:"15px"}}>Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>

              <p className='para'>
                <ul>
                  <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                  <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                  <li> Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                </ul>
             </p>
              
              <p style={{fontsize:"15px"}}>Margin Trading Facility (MTF)</p>

              <p className='para'>
                <ul>
                  <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                  <li>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</li>
                  <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
                </ul>
              </p> 
            </div>
            <div className='col-6 p-4 mt-2'>
               <p>GST</p>
                <p className='para'>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
                <p>SEBI Charges</p>
                <p className='para'>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
                <p>DP (Depository participant) charges</p>
                <p className='para'>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                <p className='para'>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>

                <p className='para'>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>

               <p>Pledging charges</p>

              <p className='para'>₹30 + GST per pledge request per ISIN.</p>

              <p>AMC (Account maintenance charges)</p>

              <p className='para'>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here</p>

              <p className='para'>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, Click here</p>

              <p>Corporate action order charges</p>
              <p className='para'>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>

              <p>Off-market transfer charges</p>

              <p className='para'>₹25 per transaction.</p>

              <p>Physical CMR request</p>

              <p className='para'>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>

              <p>Payment gateway charges</p>

              <p className='para'>₹9 + GST (Not levied on transfers done via UPI)</p>

              <p>Delayed Payment Charges</p>

              <p className='para'>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. Learn more.</p>

              <p>Trading using 3-in-1 account with block functionality</p>
              <p className='para'>
              <ul>
                <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
                <li>Intraday Brokerage: 0.05% per executed order.</li>
              </ul> 
              </p>
            </div>
          </div>

          <p className='mx-5 mt-3'>Disclaimer</p>
          <p className='mx-5 para'>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
      </div>

  );
}

export default Brokerage;