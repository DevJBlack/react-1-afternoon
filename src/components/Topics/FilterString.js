import React, { Component } from 'react'


class FilterString extends Component {
  constructor(){
    super()
    this.state = ({
      unFilteredArray: ["Timp","Wolverine","Nebo","Squaw","Y"],
      userInput: '',
      filteredArray: []
    })
    this.handleChangeInput = this.handleChangeInput.bind(this)
  }

  handleChangeInput(event){
    this.setState({
      userInput: event.target.value
    })
  }

  handleFiltered = (userInput) => {
    let unFilteredArray = this.state.unFilteredArray;
    let filteredArray = [];

      for(let i = 0; i < unFilteredArray.length; i++){
        if(unFilteredArray[i].includes(userInput)) {
          filteredArray.push(unFilteredArray[i])
        }
      }
      this.setState({
        filteredArray: filteredArray
      })
  }

  render(){
    return(
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText"> Filter: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
        <input className="inputLine" onChange={this.handleChangeInput}/>
        <button className="confirmationButton" onClick={() => this.handleFiltered(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterStringRB">Filtered Trails: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
      </div>
    )
  }
}

export default FilterString