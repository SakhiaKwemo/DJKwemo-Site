import React, {Component} from 'react';
import './Seeker.css';
import { withStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { FaThList } from 'react-icons/fa';

const PrettoSlider = withStyles({
  root: {
    color: '#ecf0f1',
    height: 2,
  },
  thumb: {
    height: 15,
    width: 15,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -4,
    marginLeft: -5,  
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

function pad(n, width, z=0) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const minutesAndSeconds = (position) => ([
  pad(Math.floor(position / 60), 2),
  pad(position % 60, 2),
]);

const SeekBar = ({
  trackLength,
  currentPosition,
  onDrag
}) => {
  const elapsed = minutesAndSeconds(currentPosition);
  const remaining = minutesAndSeconds(trackLength - currentPosition);

  return (
        <div className="sliderBox">
          <div className="sliderTimer">
            <div className="leftBox">
              <text className="sliderText">
                {elapsed[0] + ":" + elapsed[1]}
              </text>
            </div>
            <div className="middleBox">
              <text className ="artisttitle ">KelilGotSauce</text>   
              <text className ="songtitle "> - "My Life" (Prod. By KelilGotSauce)</text>  
            </div>
            <div className="rightBox">
              <text className="sliderText">
                {trackLength > 1 && "-" + remaining[0] + ":" + remaining[1]}
              </text>
            </div>
          </div>
          <PrettoSlider 
            aria-label="pretto slider" 
            max ={Math.max(trackLength, 1, currentPosition + 1)}
            value = {currentPosition}
            onDrag = {onDrag}
          />
        </div>
  );   
}

export default SeekBar; 