import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'


class Chips extends Component{

  render(){

    if(this.props.data === null){
      return null;
    }
    else {

      return (
      <div id="chips">
      <Table size="sm" striped="true">
      <thead>
      <tr>
      <th>Chip</th>
      <th>Week</th>
      </tr>
  </thead>
  <tbody>
        { this.props.data.map(e => {

          return (
            <tr key={e}>
            <td> {`${e[1].toUpperCase()}`} </td> 
            <td>{`${e[0]}`}</td> 
            </tr>
          )

        }) }
        </tbody>
</Table>

      </div>
      
      
      
  
      )




    }
  }
  
}

export default Chips