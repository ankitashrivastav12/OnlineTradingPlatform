import React from 'react';
function Hero() {
    return ( 
        <div className="container">
            <div className="text-center p-2">
                <h1 className="fs-2" style={{marginTop: "100px",fontWeight: "400"}}>Zerodha Products</h1>
                <h3 className="text-muted fs-4"style={{fontWeight: "400"}}>Sleek, modern, and intuitive trading platforms</h3>
                <p className="text-muted mt-3"style={{fontWeight: "400"}}>
                    Check out our <a href="https://zerodha.com/investments">investment offerings<i className="fa fa-long-arrow-right p-2"></i></a>
                </p>
            </div>
        </div>
     );
}

export default Hero;