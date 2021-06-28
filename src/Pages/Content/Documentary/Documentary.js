import React, {Component, useState, useEffect} from 'react';
import './Documentary.css';

import InstagramEmbed from 'react-instagram-embed';
import TweetEmbed from 'react-tweet-embed';

import {LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer} from 'recharts';
import Carousel, { consts } from 'react-elastic-carousel';

import {Dropdown, DropdownButton} from 'react-bootstrap';

import { Scrollbars } from 'react-custom-scrollbars';

import {FaAngleDoubleRight, FaAngleDoubleLeft, FaInstagram, FaYoutube, FaBook} from 'react-icons/fa';

import axios from "axios"; 
import { findAllByDisplayValue } from '@testing-library/dom';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 1, itemsToShow: 2 },
  { width: 1, itemsToShow: 3 },
  { width: 250, itemsToShow: 4 }
];

const breakPoints2 = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 1500, itemsToShow: 3 },
  { width: 1500, itemsToShow: 4 }
];

const breakPoints3 = [
  { width: 1, itemsToShow: 1 },
  { width: 1550, itemsToShow: 2 },
  { width: 1500, itemsToShow: 3 },
  { width: 1500, itemsToShow: 4 }
];

const data = [
  {
    "name": "Year 0, Day 0",
    "youtube": 0,
    "instagram": 785,
  },
  {
    "name": "Year 0, Day 150",
    "youtube": 30,
    "instagram": 938,
  },
  {
    "name": "Year 0, Day 310",
    "youtube": 30,
    "instagram": 1000,
  },
  {
    "name": "Year 1, Day 1",
    "youtube": 30,
    "instagram": 1300,
  },
  {
    "name": "Year 1, Day 205",
    "youtube": 66,
    "instagram": 1500,
  },
  {
    "name": "Year 1, Day 275",
    "youtube": 80,
    "instagram": 1500,
  },
  {
    "name": "Year 2, Day 297",
    "youtube": 120,
    "instagram": 1500,
  },
  {
    "name": "Year 3, Day 0",
    "youtube": 150,
    "instagram": 1600,
  },
];

export default class Documentary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playButton: false, 
      tweet1: [], 
      tweet2: [], 
      tweet3: [], 
      tweet: [], 
      beat1: [], 
      beat2: [], 
      beat3: [], 
      beat: [], 
      milestone: 0,
      doc: [], 
      cue: false, 
    };
  }

  setMilestone = (item) => {
    this.setState({
      milestone: item,
      playButton: false
    })
    this.setCue(); 
  }

  setDoc = (item) => {
    this.setState({
      doc: item
    })
  }

  setCue = () => {
    this.setState({
      cue: !this.state.cue
    })
  }

  setPlay = () => {
    this.setState({
      playButton: true
    })
  }

  setTweet1 = (item) => {
    this.setState({
      tweet1:item
    })
    this.setTweet(); 
  }

  setTweet2 = (item) => {
    this.setState({
      tweet2:item
    })
    this.setTweet(); 
  }

  setTweet3 = (item) => {
    this.setState({
      tweet3:item
    })
    this.setTweet(); 
  }

  setTweet = () => {
    if(this.state.doc.year == 0) {
      this.setState({
        tweet:this.state.tweet1
      })
    }
    else if(this.state.doc.year == 1) {
      this.setState({
        tweet:this.state.tweet2
      })
    }
    else if(this.state.doc.year == 2) {
      this.setState({
        tweet:this.state.tweet3
      })
    }
  }

  setBeat1 = (item) => {
    this.setState({
      beat1: item, 
    })
    this.setBeat();
  }

  setBeat2 = (item) => {
    this.setState({
      beat2: item
    }) 
    this.setBeat();
  }

  setBeat3 = (item) => {
    this.setState({
      beat3: item
    })
    this.setBeat();
  }

  setBeat = () => {
    if(this.state.doc.year == 0) {
      this.setState({
        beat:this.state.beat1
      })
    }
    else if(this.state.doc.year == 1) {
      this.setState({
        beat:this.state.beat2
      })
    }
    else if(this.state.doc.year == 2) {
      this.setState({
        beat:this.state.beat3
      })
    }
  }

  myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? <div id = "sliderIcon"><FaAngleDoubleLeft  id = "sliderL" size = "50" color = "white"/></div> : <div id = "sliderIcon"><FaAngleDoubleRight id = "sliderR" size = "50" color = "white"/></div>
    return (
        <div onClick={onClick} disabled={isEdge}>
        {pointer}
        </div>
    )
  }

  componentDidMount() {
    axios.get("http://localhost:3001/api/get/IWBDoc").then ((response) => {
      this.setDoc(response.data[this.state.milestone]);
    });

    axios.get("http://localhost:3001/api/get/year0").then ((response) => {
      this.setTweet1(response.data); 
    });

    axios.get("http://localhost:3001/api/get/year1").then ((response) => {
      this.setTweet2(response.data); 
    });

    axios.get("http://localhost:3001/api/get/year2").then ((response) => {
      this.setTweet3(response.data);
    });

    axios.get("http://localhost:3001/api/get/year0beats").then ((response) => {
      this.setBeat1(response.data); 
    });

    axios.get("http://localhost:3001/api/get/year1beats").then ((response) => {
      this.setBeat2(response.data); 
    });

    axios.get("http://localhost:3001/api/get/year2beats").then ((response) => {
      this.setBeat3(response.data); 
    });
  };

  componentDidUpdate() {
    if(this.state.cue) {
      this.setCue(); 
      axios.get("http://localhost:3001/api/get/IWBDoc").then ((response) => {
        this.setDoc(response.data[this.state.milestone]);
        this.setTweet();
        this.setBeat();
      });
    }
  };
  
  render () {
    const beats = this.state.beat;
    const beatsList = 
    beats.map((beat) => {
      return (
        <iframe 
        className = "beatBox"
        width="560" height="315" src = {beat.beats} 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
      );
    })

    const tweets = this.state.tweet;

    const tweetList = 
    tweets.map((tweet) => {
        return (
          <img className = "twitterBox" src = {tweet.tweet}/>
        );   
    })

    return (
      <div id="PlaylistsBox"> 
        <div id = "inputBox5">
          <text>Documentary</text>
        </div>
        <div className = "firstRow">
          <div className = "chartContainer">
            <h1 className="graphHead">Social Media Tracking</h1>
            <ResponsiveContainer>
              <LineChart width={500} height={250} data={data}
                margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{fill: 'white'}}/>
                <YAxis datakey="Subs/Followers" tick={{fill: 'white'}}/>
                <Tooltip />
                <Legend />
                <Line className="legendStyle" type="monotone" dataKey="instagram" stroke="#8884d8" />
                <Line className = "legendStyle" type="monotone" dataKey="youtube" stroke="pink" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="movieContaier">
          <div className="shadow"></div>
          {!this.state.playButton ?
              <video autoPlay loop muted className="movieImage" src={this.state.doc.buffer}> 
              </video>: 
              <iframe 
              className = "youtubeVid"
              width="445" height="330" src={this.state.doc.video}
              title="YouTube video player" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen = "true"
              >
              </iframe>
          }
          <button onClick={this.setPlay} className="TVButton">Play Video</button>
          <img className = "teleImage" src = "/images/display-device-television-channel-theme-music-set-vintage-tv.png"/>
          </div>
        </div>
        <div className="popcornBox">
          <img className = "popcornImage" src = "/images/images.png"/>
          <img className = "popcornImage" src = "/images/images.png"/>
          <img className = "popcornImage" src = "/images/images.png"/>
        </div>
        <img className = "smallPopcorn1" src = "/images/popcorn.png"/>
        <img className = "smallPopcorn2" src = "/images/popcorn.png"/>
        <img className = "smallPopcorn3" src = "/images/popcorn.png"/>
        <div className="IwbTag"> 
          <FaInstagram className = "tagIcon" size="45px" color="pink"/>
          <text>{this.state.doc.insta} Followers</text>
          <FaYoutube className = "tagIcon" size="55px" color="pink"/>
          <text>{this.state.doc.youtube} Subs</text>
          <FaBook className = "tagIcon" size="45px" color="pink"/>
          <text>Year: {this.state.doc.year}, Day: {this.state.doc.day}</text>
        </div>
        <text id = "textTitle3">All Episodes</text>
        <div>
          <div className="videoRow">
            <Carousel renderArrow={this.myArrow} pagination = {false} disableArrowsOnEnd = {false} breakPoints={breakPoints3}>
            <div className="columnIWB">
              <div className="rowIWB">
                {this.state.milestone == 0?
                <img className = "iwbImageChosen" src = "/images/I.W.B Documentary/milestone (year 0, day 0) pt 4.jpg"/>: 
                <img onClick = {() => {this.setMilestone(0)}} className = "iwbImage" src = "/images/I.W.B Documentary/milestone (year 0, day 0) pt 4.jpg"/>
                }
                {this.state.milestone == 1?
                <img className = "iwbImageChosen" src = "/images/I.W.B Documentary/milestone (year 0, day 0) pt 3.jpg"/>: 
                <img onClick = {() => {this.setMilestone(1)}} className = "iwbImage" src = "/images/I.W.B Documentary/milestone (year 0, day 0) pt 3.jpg"/>
                }
                {this.state.milestone == 2?
                <img className = "iwbImageChosen" src = "/images/I.W.B Documentary/milestone (year 0, day 0) pt 2.jpg"/>: 
                <img onClick = {() => {this.setMilestone(2)}} className = "iwbImage" src = "/images/I.W.B Documentary/milestone (year 0, day 0) pt 2.jpg"/>
                }
                {this.state.milestone == 3?
                <img className = "iwbImageChosen" src = "/images/I.W.B Documentary/milestone (year 0, day 0).jpg"/>: 
                <img onClick = {() => {this.setMilestone(3)}} className = "iwbImage" src = "/images/I.W.B Documentary/milestone (year 0, day 0).jpg"/>
                }
                {this.state.milestone == 4?
                <img className = "iwbImageChosen" src = "/images/I.W.B Documentary/milestone (year 0, day 75).jpg"/>: 
                <img onClick = {() => {this.setMilestone(4)}} className = "iwbImage" src = "/images/I.W.B Documentary/milestone (year 0, day 75).jpg"/>
                }
              </div>
              <div className="rowIWB">
                {this.state.milestone == 5?
                <img className = "iwbImageChosen" src = "/images/I.W.B Documentary/milestone (year 0, day 100).jpg"/>: 
                <img onClick = {() => {this.setMilestone(5)}} className = "iwbImage" src = "/images/I.W.B Documentary/milestone (year 0, day 100).jpg"/>
                }
                {this.state.milestone == 6?
                <img className = "iwbImageChosen" src = "/images/I.W.B Documentary/milestone (year 0, day 150).jpg"/>: 
                <img onClick = {() => {this.setMilestone(6)}} className = "iwbImage" src = "/images/I.W.B Documentary/milestone (year 0, day 150).jpg"/>
                }
                {this.state.milestone == 7?
                <img className = "iwbImageChosen" src = "/images/I.W.B Documentary/milestone (year 0, day 180).jpg"/>: 
                <img onClick = {() => {this.setMilestone(7)}} className = "iwbImage" src = "/images/I.W.B Documentary/milestone (year 0, day 180).jpg"/>
                }
                {this.state.milestone == 8?
                <img className = "iwbImageChosen" src = "/images/I.W.B Documentary/milestone (year 0, day 250).jpg"/>: 
                <img onClick = {() => {this.setMilestone(8)}} className = "iwbImage" src = "/images/I.W.B Documentary/milestone (year 0, day 250).jpg"/>
                }
                {this.state.milestone == 9?
                <img className = "iwbImageChosen" src = "/images/I.W.B Documentary/milestone (year 0, day 310).jpg"/>: 
                <img onClick = {() => {this.setMilestone(9)}} className = "iwbImage" src = "/images/I.W.B Documentary/milestone (year 0, day 310).jpg"/>
                }
              </div>
            </div>
            <div className="columnIWB">
              <div className="rowIWB">
                {this.state.milestone == 10?
                <img className = "iwbImageChosen" src = "/images/I.W.B Documentary/update (year 1, day 1).jpg"/>: 
                <img onClick = {() => {this.setMilestone(10)}}className = "iwbImage" src = "/images/I.W.B Documentary/update (year 1, day 1).jpg"/>
                }
                {this.state.milestone == 11?
                <img className = "iwbImageChosen" src = "/images/I.W.B Documentary/milestone (year 1, day 130).jpg"/>: 
                <img onClick = {() => {this.setMilestone(11)}} className = "iwbImage" src = "/images/I.W.B Documentary/milestone (year 1, day 130).jpg"/>
                }
                {this.state.milestone == 12?
                <img className = "iwbImageChosen" src = "/images/I.W.B Documentary/milestone (year 1, day 136).jpg"/>: 
                <img onClick = {() => {this.setMilestone(12)}} className = "iwbImage" src = "/images/I.W.B Documentary/milestone (year 1, day 136).jpg"/>
                }
                {this.state.milestone == 13?
                <img className = "iwbImageChosen" src = "/images/I.W.B Documentary/update (year 1, day 175).jpg"/>: 
                <img onClick = {() => {this.setMilestone(13)}} className = "iwbImage" src = "/images/I.W.B Documentary/update (year 1, day 175).jpg"/>
                }
                {this.state.milestone == 14?
                <img className = "iwbImageChosen" src = "/images/I.W.B Documentary/milestone (year 1, day 180).jpg"/>: 
                <img onClick = {() => {this.setMilestone(14)}} className = "iwbImage" src = "/images/I.W.B Documentary/milestone (year 1, day 180).jpg"/>
                }
              </div>
              <div className="rowIWB">
                {this.state.milestone == 15?
                <img className = "iwbImageChosen" src = "/images/I.W.B Documentary/update (year 1, day 205).jpg"/>: 
                <img onClick = {() => {this.setMilestone(15)}} className = "iwbImage" src = "/images/I.W.B Documentary/update (year 1, day 205).jpg"/>
                }
                {this.state.milestone == 16?
                <img className = "iwbImageChosen" src = "/images/I.W.B Documentary/update (year 1, day 210).jpg"/>: 
                <img onClick = {() => {this.setMilestone(16)}} className = "iwbImage" src = "/images/I.W.B Documentary/update (year 1, day 210).jpg"/>
                }
                {this.state.milestone == 17?
                <img className = "iwbImageChosen" src = "/images/I.W.B Documentary/update (year 1, day 275).jpg"/>: 
                <img onClick = {() => {this.setMilestone(17)}} className = "iwbImage" src = "/images/I.W.B Documentary/update (year 1, day 275).jpg"/>
                }
                {this.state.milestone == 18?
                <img className = "iwbImageChosen" src = "/images/I.W.B Documentary/milestone (year 1, day 301).jpg"/>: 
                <img onClick = {() => {this.setMilestone(18)}}className = "iwbImage" src = "/images/I.W.B Documentary/milestone (year 1, day 301).jpg"/>
                }
                {this.state.milestone == 19?
                <img className = "iwbImageChosen" src = "/images/I.W.B Documentary/update (year 1, day 349).jpg"/>: 
                <img onClick = {() => {this.setMilestone(19)}}className = "iwbImage" src = "/images/I.W.B Documentary/update (year 1, day 349).jpg"/>
                }
              </div>
            </div>
            <div className="columnIWB">
              <div className="rowIWB">
              {this.state.milestone == 20?
                <img className = "iwbImageChosen" src = "/images/I.W.B Documentary/Singing Compilation Year 1.jpg"/>: 
                <img onClick = {() => {this.setMilestone(20)}} className = "iwbImage" src = "/images/I.W.B Documentary/Singing Compilation Year 1.jpg"/>
                }
                {this.state.milestone == 21?
                <img className = "iwbImageChosen" src = "/images/I.W.B Documentary/22nd b-day (year 2, day 0).jpg"/>: 
                <img onClick = {() => {this.setMilestone(21)}} className = "iwbImage" src = "/images/I.W.B Documentary/22nd b-day (year 2, day 0).jpg"/>
                }
                {this.state.milestone == 22?
                <img className = "iwbImageChosen" src = "/images/I.W.B Documentary/milestone (year 2, day 297).png"/>: 
                <img onClick = {() => {this.setMilestone(22)}} className = "iwbImage" src = "/images/I.W.B Documentary/milestone (year 2, day 297).png"/>
                }
                {this.state.milestone == 23?
                <img className = "iwbImageChosen" src = "/images/I.W.B Documentary/update (year 2, day 297).png"/>: 
                <img onClick = {() => {this.setMilestone(23)}} className = "iwbImage" src = "/images/I.W.B Documentary/update (year 2, day 297).png"/>
                }
                {this.state.milestone == 24?
                <img className = "iwbImageChosen" src = "/images/I.W.B Documentary/trailer (year 3).png"/>: 
                <img onClick = {() => {this.setMilestone(24)}}className = "iwbImage" src = "/images/I.W.B Documentary/trailer (year 3).png"/>
                }
              </div>
            </div>
            </Carousel>
          </div>
          <text id = "textTitle2">Year {this.state.doc.year}, Day: {this.state.doc.day} Diary</text>
          <div className ="diaryBox">
            <img className = "screenshotBox" src = {this.state.doc.screenshot}/>
            <div className="diarySmallBox">
              <h1>{this.state.doc.title}</h1>
              <p>
                {this.state.doc.diary}
              </p>
            </div>
          </div>
          <text id = "textTitle2">Year: {this.state.doc.year} Tweets</text>
          <div className="secondRow">
            <Carousel renderArrow={this.myArrow} pagination = {false} disableArrowsOnEnd = {false} breakPoints={breakPoints}>
              {tweetList}
            </Carousel>
          </div>
          <text id = "textTitle2">Year:  {this.state.doc.year} Beats</text>
          <div className="thirdRow">
            <Carousel renderArrow={this.myArrow} pagination = {false} disableArrowsOnEnd = {false} breakPoints={breakPoints2}>
              {beatsList}
            </Carousel>
          </div>
        </div>
      </div>
    );

  }
}


