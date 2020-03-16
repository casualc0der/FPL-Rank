import React, { Component } from 'react'
import {Line} from 'react-chartjs-2';


class Charty extends Component {

  constructor(props){
    super(props);
    this.chartReference = React.createRef();
  }

  componentDidMount() {
    
  }


render() {

return (

     <Line 
     data={this.props.data}
     width={100}
     height = {50}
     options={{
       
       maintainAspectRatio: true,
       scales: {
              yAxes: [{
                display: true,
                ticks: {
                  min: 1,
                  max: -7462615,
                  beginAtZero: true
                }
              }]
            }
          
       
       
       }}

     />

)

}

}

export default Charty;

