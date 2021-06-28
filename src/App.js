import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

//Components


//Pages
import DJK from './DJK';
import Entrance from './Entrance';
import ML4 from './ML4';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      djk: false, 
      entrance: false, 
      ml4: true
    }
  }

  setDJK = () => {
    this.setState({
      djk: true,
      entrance: false, 
      ml4: false, 
    })
  }

  setEntrance = () => {
    this.setState({
      djk: false,
      entrance: true, 
      ml4: false, 
    })
  }

  setML4 = () => {
    this.setState({
      djk: false,
      entrance: false, 
      ml4: true, 
    })
  }

  render(){
    return (
      <div>
        {this.state.djk && <DJK setEntrance = {this.setEntrance.bind(this)}/>}
        {this.state.entrance && <Entrance setDJK = {this.setDJK.bind(this)} setML4 = {this.setML4.bind(this)}/>}
        {this.state.ml4 && <ML4 setEntrance = {this.setEntrance.bind(this)}/>}
      </div>
    );
  }
}

export default App;