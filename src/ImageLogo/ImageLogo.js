import React, {Component} from 'react';
import './ImageLogo.css';

class ImageLogo extends Component {

  constructor(props) {
    super(props);
  }
    render(){
      return (
        <div className="imageBox">
        <a onClick={this.props.setHome}><img src="/images/KelilGotSauce.png"/></a>
        </div>
      );
    }
  }
  
export default ImageLogo;
  
