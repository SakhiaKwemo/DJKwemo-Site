import React, {Component} from 'react';
import AnyChart from 'anychart-react';

  class Column extends Component {
    render(){
      return (
        <div className="App">
          <AnyChart
            id="pieChart"
            width={800}
            height={600}
            type="pie"
            data={[1, 2, 3, 4]}
            title="Simple pie chart"
          />
        </div>
      );
    }
  }
  
export default Column;