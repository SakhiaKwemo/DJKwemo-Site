import React, {Component} from 'react';
import './Home.css';

import NavBar2 from '../Pages (ML4)/Navbar2';
import Footer2 from './Footer2';


import Carousel, { consts } from 'react-elastic-carousel';

import axios from "axios"; 

import {FaAngleDoubleRight, FaAngleDoubleLeft, FaCircle, FaPlay,  FaRegPlayCircle} from 'react-icons/fa';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lyrixx: [],  
            blur: false, 
            onvideo: false, 
            poplyrixx: "/images/Lyrixx/Untitled 137.mp4"
        };
    }

    setLyrixx = (item) => {
        this.setState({
          lyrixx: this.shuffle(item)
        });
    };

    setOnVideoOn = () => {
        this.setState({
          onvideo: true
        });
    };

    setOnVideoOff = () => {
        this.setState({
          onvideo: false, 
          blur: false
        });
    };

    setPoplyrixx = (item) => {
        this.setState({
            poplyrixx: item
        });
    }

    setBlurOn = () => {
        this.setState({
          blur: true, 
        });
    };

    setBlurOff = () => {
        if(!this.state.onvideo) {
            this.setState({
                blur: false
            });
        }
    };

    setPopLyrixx = (item) => {
    this.setState({
        poplyrixx: item
    });
    };

    shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
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
        axios.get("http://localhost:3001/api/get/lyrixx").then ((response) => {
          this.setLyrixx(response.data); 
        });
      };

    render() {

        console.log(this.state.lyrixx);

        const lyrixx = this.state.lyrixx;

        const lyrixxList1 = 
        lyrixx.map((video) => {
          return (
            <video onMouseMove = {() => {this.setPopLyrixx(video.video)}} onMouseOver = {this.setBlurOn} onMouseOut = {this.setBlurOff} className ="LyrixxVideo" src ={video.video}/>
          );
        })
        
    return (
        <div>
            {this.state.blur && <video autoPlay onMouseEnter={this.setOnVideoOn} onMouseLeave = {this.setOnVideoOff} className ="LyrixxVideo2"src ={this.state.poplyrixx}/>}
            {this.state.blur ?
                <div className="wtBlock2">
                    <NavBar2 
                        setHome = {this.props.setHome} 
                        setAboutUs = {this.props.setAboutUs} 
                        setArcade = {this.props.setArcade}
                    />
                    <text>Welcome Home</text>
                    <div className="sloganBox">
                        <h1>Our Mission:</h1>
                        <text>"Revolutionize the way people interact with music"</text>
                    </div>
                    <div className="LyrixxBox">
                        <h1>Lyrixx Of The Year</h1>
                        <Carousel renderArrow={this.myArrow} pagination = {false} disableArrowsOnEnd = {false} breakPoints={breakPoints}>
                            {lyrixxList1}
                        </Carousel>
                    </div>
                    <Footer2/>
                </div> : 
                <div className="wtBlock3">
                    <NavBar2
                        setHome = {this.props.setHome} 
                        setAboutUs = {this.props.setAboutUs} 
                        setArcade = {this.props.setArcade}
                    />
                    <text>Welcome Home</text>
                    <div className="sloganBox">
                        <h1>Our Mission:</h1>
                        <text>"Revolutionize the way people interact with music"</text>
                    </div>
                    <div className="LyrixxBox">
                        <h1>Lyrixx Of The Year</h1>
                        <Carousel renderArrow={this.myArrow} pagination = {false} disableArrowsOnEnd = {false} breakPoints={breakPoints}>
                            {lyrixxList1}
                        </Carousel>
                    </div>
                    <Footer2/>
                </div>
            }
        </div>
    );
  }

}
