import React, { Component } from 'react'

class EvenAndOdd extends Component{
  constructor(){
    super();

    this.state = ({
      evenArray: [],
      oddArray: [],
      userInput: ''
    })
  }


  handleInputChange = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  assignEvenAndOdds(userInput){
    let arr = userInput.split(',');
    let evens = [];
    let odds = [];

      for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0 ){
           evens.push(parseInt(arr[i], 10))
        } else {
           odds.push(parseInt(arr[i], 10))
        }
      }
      this.setState({
        evenArray: evens,
        oddArray: odds
      })
  }


  render(){
    return(
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine" onChange={this.handleInputChange}/>
        <button className="confirmationButton" onClick={ () => {this.assignEvenAndOdds(this.state.userInput)}}>Split</button>
        <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className="resultsBox">Odd: {JSON.stringify(this.state.oddArray)}</span>
      </div>
    )
  }
}

export default EvenAndOdd