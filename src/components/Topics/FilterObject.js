import React, { Component } from 'react'

class FilterObject extends Component {
  constructor(){
    super()
    this.state = ({
      race: [
        {
          race: 'Spartan Race',
          location: 'tahoe',
          type: 'beast'
        },
        {
          race: 'Toughest mudder',
          location: 'lake henderson',
          duration: '24 hours'
        },
        {
          race: 'Squaw Peak',
          location: 'Provo',
          miles: 52
        }
      ],
      userInput: '',
      filteredRace: []
    })
    // this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  handleFilterRace(event){
    let race = this.state.race;
    let filteredRace = [];

    for(let i = 0; i < race.length; i++){
      if( race[i].hasOwnProperty(event)){
        filteredRace.push(race[i])
      }
    }
    this.setState({
      filteredRace: filteredRace
    })
  }

  render(){
    return(
      <div className="puzzleBox filterObjectPB">
        <h4>FilterObject</h4>
        <span className="puzzleText"> Original: {JSON.stringify(this.state.race, null, 10)}</span>
        <input className="inputLine" onChange={this.handleInputChange}/>
        <button className="confirmationButton" onClick={() => this.handleFilterRace(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredRace, null, 10)} </span>
      </div>
    )
  }
}

export default FilterObject