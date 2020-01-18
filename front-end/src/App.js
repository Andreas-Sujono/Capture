import React from 'react';
import './App.css';
import Item from './components/item.js'

function App() {
  return (
    <div className="fluid-container">
      <div className="row row-0">
        <div className="header col-4">Capture</div>
        <div className="search col-8">
        <div class="form-group">
          <input type="text" class="form-control" id="searchBar"  placeholder="Search"/>
        </div>
        </div>
      </div>

      <div className="row-1">
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
      </div>

      <div className="row-2 row">
          <div className="col-3">
            <ul className="list">
              <li className="list-item">1</li>
              <li className="list-item">2</li>
              <li className="list-item">3</li>
              <li className="list-item">4</li>
            </ul>
          </div>

          <div className="square col-9 row">
              <Item/>
              <Item/>
              <Item/>
          </div>

        </div>
    </div>
  );
}

export default App;
