import React from 'react'

export default function Header(){
    return(
        <div className="header row">
                <div className="leftContent col-8 col-md-6">
                    <span>Contact: capture@gmail.com  +65 83066172 </span>
                </div>

                <div className="rightContent col">
                    <span> <a href="#">Signup</a> / <a href="#">Login</a> </span>
                </div>
        </div>
    )
}