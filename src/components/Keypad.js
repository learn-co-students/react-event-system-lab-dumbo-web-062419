import React, { Component } from 'react';

class Keypad extends Component {
    
    onKeyUp = () => {
        console.log("Entering password...");
        
    }


    render() { 
        
        
        return (
        
            <input onKeyUp={this.onKeyUp} type="password"  />
        )
    }
}
 
export default Keypad;