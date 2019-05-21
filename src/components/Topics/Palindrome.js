import React, { Component } from 'react'

class Palindrome extends Component {
  constructor(){
    super()
    this.state = ({
      userInput: '',
      palindrome: ''
    })
    this.handlePalindrome = this.handlePalindrome.bind(this)
  }

  handleChange = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  handlePalindrome(userInput){
    let forwards = userInput;
    let backwards = userInput;
    backwards = backwards.split('');
    backwards = backwards.reverse();
    backwards = backwards.join('');
    
      if( forwards === backwards ){
        this.setState({ palindrome: 'true' })
      } else {
        this.setState ({ palindrome: 'false'})
      }
  }

  
  render(){
    // function pally(str){
    //   let reversed = str.split('').reverse().join('')
    //   if(reversed === str){
    //     return true
    //   } else {
    //     return false
    //   }
    // }
    return(
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={this.handleChange}/>
        <button className="confirmationButton" onClick={() => this.handlePalindrome(this.state.userInput)}>Check</button>
        <span className="resultsBox">Palindrome: { this.state.palindrome}</span>
      </div>
    )
  }
}

export default Palindrome