import React, {Component, useState, useEffect} from 'react';
import './EBook.css';

import {FaSearch} from 'react-icons/fa';

import axios from "axios"; 

export default class EBook extends Component {

  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div id="PlaylistsBox"> 
        <div id = "inputBox4">
          <text>E - Books</text>
        </div>
        <div className = "scheduleContent">
          <div onClick = {this.props.setScreen} className = "bookContainer">
            <img src = "\images\Book\I Will Become\I Will Become Book.png" className = "bookBox"/>
            <text>DJKwemo</text>
            <p>"I Will Become"</p>
          </div>
        </div>
      </div>
    );

  }
}


