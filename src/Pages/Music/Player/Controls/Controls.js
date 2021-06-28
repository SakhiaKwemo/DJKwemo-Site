import React, { Component } from 'react';
import './Controls.css';

const Controls = ({  
  paused, 
  onPressPause,
}) => (
  <div className="controlContainer">
    <div className="outsideBox1">
      <img className="secondaryControl"
        src='images/ic_shuffle.png'/>
    </div>
    <div className="insideBox">
      <div>
        <img className="skipControl" src='images/ic_skip_prev.png'/>
      </div> 
      {!paused ?
        <div>
        <img onClick = {onPressPause} className="pauseControl" src='images/ic_pause.png'/>
        </div>: 
        <div >
          <img onClick = {onPressPause} className="pauseControl" src='images/ic_play.png'/>
        </div>
      }
      <div>
        <img className="skipControl" src='images/ic_skip_next.png'/>
      </div>
    </div>
    <div className="outsideBox2">
      <img className="secondaryControl"
        src='images/ic_loop.png'/>
    </div>
  </div>
);

export default Controls;
