import React from 'react'
import Login from './login'

export default function Header(){
    return(
        <div className="header row">
                <div className="leftContent col-10 col-md-6">
                    <span>Contact: capture@gmail.com  +65 83066172 </span>
                </div>

                <div className="rightContent">
                    <span> <Login/> </span>
                </div>
        </div>
    )
}