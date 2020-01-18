import React, { Component } from 'react';
import {db} from '../config/fbConfig'
import Card from './card'
import Login from './login'

class Home extends Component {

    state = {
        title:'',
        desc:'',
        price:'',
        rating:'',
        category:'',
        image:'',

        data:[{
            title:"T-shirt",
            desc:'',
            price:'$98',
            rating:'4',
            category:'shirt',
            image:'https://cf.shopee.sg/file/2ffb755f48bb08d69d765b0a2eec1c4f'
        }]
    }

    componentDidMount(){

        /*
        db.collection("products").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.setState(prevState => 
                    (
                        {
                            data:prevState.data.concat({
                                id:doc.data().id,
                                title:doc.data().title,
                                desc:doc.data().desc,
                                price:doc.data().price,
                                rating:doc.data().rating,
                                category:doc.data().category,
                                image:doc.data().image,
                            })
                        }
                    )
                )
            });
        });
        */
        
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    addToFirebase = () => {
        db.collection("products").add({
            title:this.state.title,
            desc:this.state.desc,
            price:this.state.price,
            rating:this.state.rating,
            category:this.state.category,
            image:this.state.image
        })

        this.setState({
            title:'',
            desc:'',
            price:'',
            rating:'',
            category:'',
            image:''
        })
    }
    
    render() {

        const style = {
            width:'100%',
            height:'100%',
            paddingTop:'20px',
        }

        return (
            <div className="home" style={style}>
                <div className="addProduct">
                    <h1>Add Product</h1>
                    <div className="inputText"> 
                        <input type="text" placeholder="Title" name='title' value={this.state.title} onChange={this.handleChange}/>
                    </div>
                    <div className="inputText">
                        <input type="text" placeholder="Desc" name='desc' value={this.state.desc} onChange={this.handleChange}/>
                    </div>
                    <div className="inputText">
                        <input type="text" placeholder="Price" name='price' value={this.state.price} onChange={this.handleChange}/>
                    </div>
                    <div className="inputText">
                        <input type="text" placeholder="Rating" name='rating' value={this.state.rating} onChange={this.handleChange}/>
                    </div>
                    <div className="inputText">
                        <input type="text" placeholder="Category" name='category' value={this.state.category} onChange={this.handleChange}/>
                    </div>
                    <div className="inputText">
                        <input type="text" placeholder="image" name='image' value={this.state.image} onChange={this.handleChange}/>
                    </div>

                    <div className="addButton">
                        <button className="btn btn-primary" onClick={this.addToFirebase}>Add</button>
                    </div>
                </div>

                <div className="productList row">
                    
                    {
                        this.state.data.map(
                            item => {
                                return <Card 
                                    title={item.title}
                                    price={item.price} 
                                    image={item.image}
                                    rating={item.rating} 
                                    category={item.category}
                                    desc={item.desc}
                                    className="col-4"
                                />
                            }
                        )
                        
                    }
                </div>

                <div style={{ margin:'Auto',width:'100%'}}>
                    <Login/>
                </div>
                
            </div>
        );
    }
}

export default Home;