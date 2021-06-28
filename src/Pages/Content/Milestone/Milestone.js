import React, {Component, useState, useEffect} from 'react';
import './Milestone.css';

import {FaSearch} from 'react-icons/fa';

import axios from "axios"; 

export default class Milestone extends Component {

  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div id="PlaylistsBox"> 
        <div id = "inputBox4">
          <text>Intro</text>
        </div>
        <div className="diaryBox1">
          <h1>Welcome to the documentary</h1>
          <p>"I WILL BECOME the biggest DJ, Producer, and Artist in the world. Not only that, but I am going to document my whole journey as I accomplish my goal. In the whole existence of the human race, no human has ever predicted and documentaed their rise to glory. This is a revolutionnary master-piece that I am extremely proud and honored to deliver to humanity. I feel like I was chosen by god to deliver this product, and I will gladly be dedicating my whole life to deliver what I believe to be the most important and innovative work of the 21st century. This will forever not only change the perception people have around pursuing their dreams, but it will also eternally change the way people perceive life itself, as this documentary goes against everything that is taught by society (playing it safe, not standing out, using your brain instead of your heart). This "memoir" is so profound, that it will make you second guess the laws of gravtity, space, and time. How did he do this? How did he know? The fundamental laws that will be highlighted in this documentary are the laws of attraction and the power of manifestation. This is the proof, that you can make all your wildest dreams come true, all you have to do is BELIEVE. This documentary will take you along with me every step of the way. You will witness all the struggles and triumphs that I will face on my road to successs. You will literally be watching me takeover the world".</p>
          <text>So, Grab Some Popcorn, Light Up A Spliffy And Enjoy The Show!!!</text>
        </div>
      </div>
    );

  }
}


