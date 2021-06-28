import React, {Component} from 'react';

import AlbumP from './AlbumPlayer';
import AlbumS from './AlbumSelector';

import {FaArrowCircleLeft} from 'react-icons/fa';

import axios from "axios"; 

export default class Album extends Component {

    constructor(props) {
        super(props);
        this.state = {
            albumMode: false,
            albumID: 0,
            iWillBecome: [], 
            iWillBecomeSongs: [], 
        };
    }

    setAlbumID = (item) => {
      this.setState({
          albumID: item, 
          albumMode: !this.state.albumMode
      });
  };

  setIWillBecome = (item) => {
    this.setState({
      iWillBecome: item
    });
  };

  setIWillBecomeSongs = (item) => {
    this.setState({
      iWillBecomeSongs: item
    });
  };

  componentDidMount() {
    axios.get("http://localhost:3001/api/get/IWillBecome").then ((response) => {
      console.log(response.data); 
      console.log(response.data[this.state.albumID])
      this.setIWillBecome(response.data[this.state.albumID]); 
      this.setIWillBecomeSongs(response.data);
    });
  };
  
  render(){

    const albumList = this.state.iWillBecome;
    const songList = this.state.iWillBecomeSongs;

    return (
      <div>
        {!this.state.albumMode && <AlbumS albums = {albumList} setAlbumID = {this.setAlbumID.bind(this)}/>}
        {this.state.albumMode && <AlbumP songs = {songList} albums = {albumList} setsongId = {this.props.setsongId} setAlbumMode = {this.setAlbumID.bind(this)}/>}
      </div>
    );
  }
}





