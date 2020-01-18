import React, { Component } from 'react';
import Rating from './rating'

class Card extends Component {

    
    render() {
        return (
            <div className="productCard">
                
                <div className="productCategory">
                    {this.props.category}
                </div>
                <div className="productImage">
                    <img src={this.props.image} alt="image1"/>
                </div>

                <div className="productTitle"> {this.props.title}</div>

                <div className="row fluid-container">
                    <div className="productPrice col-6" style={{textAlign:'center'}}> {this.props.price}</div>
                    <div className="productRating col"> 
                    
                    <Rating rating={this.props.rating}/>

                    </div>
                </div>
                

            </div>
        );
    }
}

export default Card;