import React, {Component} from 'react';
import './App.css';
import {db,storage} from './config/fbConfig'
import Card from './components/card'
import Login from './components/login'
import Header from './components/header'
import Footer from './components/footer'


class App extends Component {

  constructor(){
    super()

    this.state = {
      title:'',
      desc:'',
      price:'',
      rating:'',
      category:'',
      image:'',

      fileImage:null,
      url: null,
      progress:0,
  
      data:[{
          title:"T-shirt",
          desc:'',
          price:'$98',
          rating:'4',
          category:'shirt',
          image:'https://cf.shopee.sg/file/2ffb755f48bb08d69d765b0a2eec1c4f',
          id:1
        },
        ]
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleFileUpload = this.handleFileUpload.bind(this)
    this.handleFilePreview = this.handleFilePreview.bind(this)
  }
  

  componentDidMount(){
    
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
    
    
  }

  handleChange(e){
    console.log('called')
    this.setState({
        [e.target.name]:e.target.value
    })
  }

  handleFileUpload(){
    if(this.state.fileImage){
      const image = this.state.fileImage[0]
      const uploadTask = storage.ref(`images/${image.name}`).put(image);

      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
         
        }, 
        (error) => {
            // error function ....
          console.log(error);
        }, 
      () => {
          // complete function ....
          storage.ref('images').child(image.name).getDownloadURL().then(url => {
              console.log(url);
              this.setState({url:url});
          })
      });

    }

  }

  handleFilePreview(event){
    console.log(event.target.files[0])
    this.setState({
      url: URL.createObjectURL(event.target.files[0]),
      fileImage: [event.target.files[0]]
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
          <div className="headerText col-12 col-md-4">
            <img src="./static/logo.png" />
          </div>
          <div className="search col-md-7 col-10">
            <div className="input-group">
              <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
              <div className="input-group-append">
                <span className="input-group-text"><i className="fas fa-search"
                    aria-hidden="true"></i></span>
              </div>
            </div>
          </div>

          <div className="col">
          <i className="fa fa-shopping-cart" style={{fontSize:'38px',color:'white',paddingTop:'20px'}}></i>
          </div>

        </div>

        <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="10000">
              <img src="https://image.freepik.com/free-vector/red-sale-banner_102420-15.jpg" className="d-block " alt="..."/>
            </div>
            <div className="carousel-item" data-interval="2000">
              <img src="https://image.freepik.com/free-vector/sale-banner-with-product-description_1361-1333.jpg" className="d-block" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="https://image.freepik.com/free-vector/modern-sale-banner-with-product-description_1361-1259.jpg" className="d-block " alt="..."/>
            </div>
          </div>

          <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>

          <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>

        </div>

        <div className="row content">
          <div className="leftContent col-12 col-md-4 col-lg-3">
            <h3>Upload Image Here</h3>
            <input type="file" name="fileImage" onChange={this.handleFilePreview} />
            <progress value={this.state.progress} max="100"/>
            <img src={this.state.url || 'http://via.placeholder.com/400x300'} style={{width:'100%',maxWidth:'250px',height:'auto'}} />

            <div>
            <button className="btn btn-primary" onClick={this.handleFileUpload}> Upload Image </button>
            </div>
          </div>

          <div className="rightContent col-lg-9 col-md-8 col-12 row">

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
                              key={item.id}
                          />
                      }
                  )
              }
            </div>
          </div>

        </div>

          
        <Footer />
      </div>
    );
  }
}

export default App;
