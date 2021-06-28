import React, {Component} from 'react';
import './Streamer.css';

class Streaming extends Component {
  
  render(){
    return (
      <div className="streamBox2">
        <img className="streamImage" src={this.props.image}/>
      </div>

    );
  }
}



export default Streaming;

/*
  <div className="streamBox2">
    <img style = {{height: "480px"}} src="/images/Think Twice.png"/>
  </div>
*/
