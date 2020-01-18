import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <div className="footer row">
                <div className="col-4 about">
                    <h5>About Us</h5>
                    <p className="about-desc">We are an AI-based e-commerce company.</p>
                </div>
                <div className="col-4 customer">
                    <h3>Customer Service</h3>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="col-4 contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>Contact No.</li>
                        <li>Email Address</li>
                    </ul>
                </div>
            </div>
        )
    }
};

export default Footer;