import React, {Component, useState, useEffect} from 'react';
import './Tours.css';

import IWillBecome from "../Books/EBook/IWillBecome"

export default class Tours extends Component {

  render(){

    return (
      <div className="ToursBox"> 
        <IWillBecome setScreen = {this.props.setScreen}/>
      </div>
    );
  }
}

/*
import React, {Component, useState, useEffect} from 'react';
import './Tours.css';

import Footer from '../../Footer/Footer';
import NavBar from '../../NavBar/NavBar';
import axios from "axios"; 

import StarRatingComponent from 'react-star-rating-component';

export default class Tours extends Component {

  constructor() {
    super();
 
    this.state = {
      rating: 1
    };
  }

   
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render(){

    const { rating } = this.state;

    return (
      <div className="ToursBox">  
        <NavBar
          activeT = {false} 
          activeM = {false} 
          activeB = {false} 
          activeCt = {false} 
          activeA = {false} 
          activeCm = {false} 
        />
        <div className = "smallTour">           
          <div>
            <h2>Rating from state: {rating}</h2>
            <StarRatingComponent 
              name="rate3" 
              starCount={10}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

*/


