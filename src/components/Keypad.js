// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {

  handleKeyUp = () => {
    console.log("Entering password...");
  }

  render() {

    // console.log("password field");

    return (
      <input type="password" onKeyUp={this.handleKeyUp} />
    )
  }

}
