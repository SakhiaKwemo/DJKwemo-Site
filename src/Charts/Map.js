import React, {Component} from 'react';
import AnyChart from 'anychart-react';
import {Radar} from 'react-pathjs-chart';


export default class Map extends Component {

    render(){
      return (
        <div>
            <Radar 
                data={[{
                        "speed": 74,
                        "balance": 29,
                        "explosivess": 40,
                        "energy": 40,
                        "flexibility": 30,
                        "agility": 25,
                        "endurance": 44
                    }]} 
                options={{
                    width: 290,
                    height: 290,
                    margin: {
                      top: 20,
                      left: 40,
                      right: 40,
                      bottom: 20
                    },
                    r: 150,
                    max: 100,
                    fill: "#2980B9",
                    stroke: "#2980B9",
                    animate: {
                      type: 'oneByOne',
                      duration: 200
                    },
                    label: {
                      fontFamily: 'Arial',
                      fontSize: 14,
                      fontWeight: true,
                      fill: '#34495E'
                    }
                  }}
            />
        </div>
      );
    }
  }