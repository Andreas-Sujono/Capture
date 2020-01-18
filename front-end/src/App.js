import React, {Component} from 'react';
import './App.css';
import {db} from './config/fbConfig'
import Card from './components/card'
import Login from './components/login'
import Header from './components/header'

class App extends Component {

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
      },
      {
        title:"T-shirt",
        desc:'',
        price:'$98',
        rating:'4',
        category:'shirt',
        image:'https://cf.shopee.sg/file/2ffb755f48bb08d69d765b0a2eec1c4f'
      },
      {
        title:"T-shirt",
        desc:'',
        price:'$98',
        rating:'4',
        category:'shirt',
        image:'https://cf.shopee.sg/file/2ffb755f48bb08d69d765b0a2eec1c4f'
      },
      {
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

  render(){
    return (
      <div className="fluid-container homepage">
        <Header/>
        <div className="row titleBar">
          <div className="headerText col-4">Capture</div>
          <div className="search col-8">
          <div class="form-group">
            <input type="text" class="form-control" id="searchBar"  placeholder="Search"/>
          </div>
          </div>
        </div>

        <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" data-interval="10000">
              <img src="https://image.freepik.com/free-vector/red-sale-banner_102420-15.jpg" class="d-block " alt="..."/>
            </div>
            <div class="carousel-item" data-interval="2000">
              <img src="https://image.freepik.com/free-vector/sale-banner-with-product-description_1361-1333.jpg" class="d-block" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="https://image.freepik.com/free-vector/modern-sale-banner-with-product-description_1361-1259.jpg" class="d-block " alt="..."/>
            </div>
          </div>

          <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>

          <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>

        </div>

        <div className="row content">
          <div className="leftContent col-12 col-md-3 ">
            <ul>
              <li className="list-item">HomePage</li>
              <li className="list-item">About</li>
              <li className="list-item">Products</li>
              <li className="list-item">Contact</li>
            </ul>
          </div>

          <div className="rightContent col-md-9 col-12 row">

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

        </div>
      </div>
    );
  }
}

export default App;
