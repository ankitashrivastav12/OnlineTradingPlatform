import React from 'react';
function Hero() {
    return ( 
        <div className="container">
            <div className='row text-center'style={{marginTop:"100px"}}>
                <h1 className='fs-3'>Charges</h1>
                <p className='fs-5 text-muted'>List of all charges and taxes</p>
            </div> 
            <div className="row text-center" style={{padding:"50px 120px",marginTop:"100px"}}>
                <div className="col-4 p-2">
                    <img style={{width: "80%"}}src="images/pricing-eq.svg"/>
                    <h3 className='mt-4'>Free equity delivery</h3>
                    <p className='mt-4 text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 p-2">
                    <img style={{width: "80%"}} src="images/other-trades.svg"/>
                    <h3 className='mt-4'>Intraday and F&O trades</h3>
                    <p className='mt-4 text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 p-2">
                    <img style={{width: "80%"}} src="images/pricing-eq.svg"/>
                    <h3 className='mt-4'>Free direct MF</h3>
                    <p className='mt-4 text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
        
     );
}

export default Hero;