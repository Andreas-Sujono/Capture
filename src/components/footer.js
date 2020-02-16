import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <div className="footer">
                <div class="content row">
                    <div className="col-5 about">
                        <h3>About Us</h3>
                        <p className="about-desc">We are an <span style={{color:'white'}}>AI-based</span> e-commerce company.</p>
                    </div>
                
                    <div className="col contact">
                        <h3>Contact Us</h3>
                        <ul>
                            <li>Contact No: +65 83066172</li>
                            <li>Email Address: capture@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
};

export default Footer;
