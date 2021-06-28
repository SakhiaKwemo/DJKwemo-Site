import React, {Component} from 'react';

class ML4Logo extends Component {

  constructor(props) {
    super(props);
  }
    render(){
      return (
        <div className="imageBox">
        <a onClick={this.props.setHome}><img src="/images/Muzic.png"/></a>
        </div>
      );
    }
  }
  
export default ML4Logo;
  
