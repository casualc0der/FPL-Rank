import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Charty from './Charty'
import Chips from './Chips'
import 'bootstrap/dist/css/bootstrap.min.css';


async function getData(id) {
  

let proxy = 'https://cors-anywhere.herokuapp.com/'
let url = `https://fantasy.premierleague.com/api/entry/${id}/history/`
let response = await fetch(proxy+url)
let data = await response.json();

return data
}

// getData(1709311).then(x => {

//   console.log(x.current)

// })


class Home extends Component {
constructor(props) {
  super(props);
  this.state= {

    id: '',
    current: [],
    rank: [],
    chips: [],
   

  }

  
}

handleChange(e) {
  this.setState({

    id: e.target.value
  })
}

updateStats(x) {

  let weekArray = x.current.map(e => e.event)
  let rankArray = x.current.map(e => e.overall_rank - e.overall_rank -e.overall_rank)
  let chipArray = x.chips.map(e => { 
    
    return [e.event, e.name]
  
  })
  
  
  
  
  
 

  this.setState({

    

    current: weekArray,
    rank: rankArray,
    chips: chipArray,
    
  })
}

  render() {
    return (

      <div>
      <h1> FPL Rank</h1>
      <input placeholder="Team ID" value={this.state.id} onChange={(e) => this.handleChange(e)}/>
      <button onClick= {() => getData(this.state.id)
                              .then(x => {
                                this.updateStats(x)
                                

                                
                              }) 
      
      
      }>Submit</button>
      <Charty data = {{
            labels: this.state.current,
            datasets: [{
            label: 'Overall Rank',
            borderColor: 'blue',
            data: this.state.rank
        }], }} />
        <Chips data={ this.state.chips } />

 
      </div>
    )
  }
}


ReactDOM.render(<Home/>, document.getElementById('root'))