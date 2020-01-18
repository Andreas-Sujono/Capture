import React, { Component } from 'react';


export default function Rating (props){
    let starYellow = []
    let starEmpty = []
    for (var i = 0; i < parseInt(props.rating); i++){
        starYellow.push(1)
    } 
    for (var i = 0; i < 5-parseInt(props.rating); i++){
        starEmpty.push(1)
    } 
    
    return (
        <div>
            {
                starYellow.map( () => <span class="fa fa-star" style={{color:'orange'}} ></span> )
            }
            {
                starEmpty.map( () => <span class="fa fa-star"></span> )
            }
        </div>

    )

}