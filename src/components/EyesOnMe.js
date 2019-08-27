// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {

  fff = () => console.log('Good!')
  bbb = () => console.log('Hey! Eyes on me!')

  render(){
    return(
      <button onFocus={this.fff} onBlur={this.bbb}></button>
    )
  }

}
