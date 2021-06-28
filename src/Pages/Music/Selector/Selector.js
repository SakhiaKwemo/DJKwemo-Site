import React, {Component} from 'react';
import './Selector.css';
import { FaAngleRight} from 'react-icons/fa';

import { Scrollbars } from 'react-custom-scrollbars';

import Browse from "./Browse/Browse";
import Songs from "./Songs/Songs";
import Albums from "./Albums/Album";
import Playlists from "./Playlists/Playlists";
import Schedule from "./Custom/Schedule";
import Library from "./Library/Library"; 

class Selector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            browse: false,
            songs: false,
            albums: false,
            playlists: false,
            custom: false, 
            library: true, 
        };
    }

    setBrowse = () => {
        this.setState({
            browse: true, 
            songs: false,
            albums: false,
            playlists: false,
            custom: false, 
            library: false
        });
    };

    setSongs = () => {
        this.setState({
            browse: false, 
            songs: true,
            albums: false,
            playlists: false,
            custom: false, 
            library: false
        });
    };

    setAlbums = () => {
        this.setState({
            browse: false,
            songs: false,
            albums: true,
            playlists: false,
            custom: false, 
            library: false
        });
    };

    setPlaylists = () => {
        this.setState({
            browse: false,
            songs: false,
            albums: false,
            playlists: true,
            custom: false, 
            library: false
        });
    };

    setCustom = () => {
        this.setState({
            browse: false,
            songs: false,
            albums: false,
            playlists: false,
            custom: true, 
            library: false
        });
    };

    setLibrary = () => {
        this.setState({
            browse: false,
            songs: false,
            albums: false,
            playlists: false,
            custom: false, 
            library: true
        });
    };

    renderThumb({ style, ...props }) {
        const thumbStyle = {
            backgroundColor: `rgb(233, 135, 178)`, 
            borderRadius: "5px", 
            width: "10px"
        };
        return (
            <div
                style={{ ...style, ...thumbStyle }}
                {...props}/>
        );
    }
  
  render(){
    return (
        <div id = "headingBox">
            <div className="titleBox5">
                <div className = "musicTitle">
                    <text>Music</text>
                </div>
            </div>
            <div className = "streamBox3">
                <div className="choiceBox">
                    <div id="choiceOption" onClick = {this.setBrowse}>
                        <div className = "textOption">
                        <text>Browse</text>
                        </div>
                        <div className="arrow">
                        <FaAngleRight onClick = {this.setBrowse} size="36" color="rgb(233, 135, 178)"/>
                        </div>
                    </div>
                    <div id="choiceOption" onClick = {this.setSongs}>
                        <div className = "textOption">
                        <text>Songs</text>
                        </div>
                        <div className="arrow">
                        <FaAngleRight onClick = {this.setSongs} size="36" color="rgb(233, 135, 178)"/>
                        </div>
                    </div>
                    <div id="choiceOption" onClick = {this.setAlbums}>
                        <div className = "textOption">
                        <text>Albums</text>
                        </div>
                        <div className="arrow">
                        <FaAngleRight onClick = {this.setAlbums} size="36" color="rgb(233, 135, 178)"/>
                        </div>
                    </div>
                    <div id="choiceOption" onClick = {this.setPlaylists}>
                        <div className = "textOption">
                        <text>Playlist</text>
                        </div>
                        <div className="arrow">
                        <FaAngleRight onClick = {this.setPlaylists} size="36" color="rgb(233, 135, 178)"/>
                        </div>
                    </div>
                    <div id="choiceOption" onClick = {this.setLibrary}>
                        <div className = "textOption">
                        <text>Library</text>
                        </div>
                        <div className="arrow">
                        <FaAngleRight onClick = {this.setLibrary} size="36" color="rgb(233, 135, 178)"/>
                        </div>
                    </div>
                    <div id="choiceOption" onClick = {this.setCustom}>
                        <div className = "textOption">
                        <text>Custom</text>
                        </div>
                        <div className="arrow">
                        <FaAngleRight onClick = {this.setCustom} size="36" color="rgb(233, 135, 178)"/>
                        </div>
                    </div>
                </div>
                <div className="displayBox">
                    <Scrollbars style = {{width: "100%", height: "100%"}}
                                    renderThumbVertical={this.renderThumb}
                    >
                        {this.props.children}
                        {this.state.browse && <Browse songs = {this.props.songs} setsongId = {this.props.setsongId}/>}
                        {this.state.songs && <Songs songs = {this.props.songs} setsongId = {this.props.setsongId}/>}
                        {this.state.albums && <Albums songs = {this.props.songs} setsongId = {this.props.setsongId}/>}
                        {this.state.playlists && <Playlists/>}
                        {this.state.library && <Library songs = {this.props.songs} setsongId = {this.props.setsongId}/>}
                        {this.state.custom && <Schedule/>}
                    </Scrollbars>
                </div>
            </div>
        </div>
    );
  }
}



export default Selector;



