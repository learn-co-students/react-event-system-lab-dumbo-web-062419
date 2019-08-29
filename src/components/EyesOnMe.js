// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  handleFocus = () => {
    console.log("Good!");
  }

  handleBlur = () => {
    console.log("Hey! Eyes on me!");
  }

  render() {

    console.log("eyes on me has been hit");

    return (
      <button type="button" onFocus={this.handleFocus} onBlur={this.handleBlur} >Look at me!
      </button>
    )
  }

}
