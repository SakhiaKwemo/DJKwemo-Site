import React, { Component } from 'react';
import './ControlsB.css';

const Controls = ({  
  paused, 
  onPressPause,
}) => (
  <div className="controlContainer">
    <div className="insideBoxB">
      <div>
        <img className="skipControl" src='images/ic_skip_prev.png'/>
      </div> 
      {!paused ?
        <div>
        <img onClick = {onPressPause} className="pauseControl23" src='images/ic_pause.png'/>
        </div>: 
        <div >
          <img onClick = {onPressPause} className="pauseControl23" src='images/ic_play.png'/>
        </div>
      }
      <div>
        <img className="skipControl" src='images/ic_skip_next.png'/>
      </div>
    </div>
  </div>
);

export default Controls;
