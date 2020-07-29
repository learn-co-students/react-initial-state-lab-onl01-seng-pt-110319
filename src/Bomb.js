// your Bomb code here!
import React, { Component } from 'react'; 


export default class Bomb extends Component {

    constructor(props) {
        super(props) 
        this.state = {secondsLeft: props.initialCount}
    }

    timerDetails = () => {

        if (this.state.secondsLeft != 0) {
            return <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        } else {
            return <div>Boom!</div>

        }
    }

    render() {
        return (
        <div>
            {/* {this.state.secondsLeft} seconds left before I go boom! */ this.timerDetails()}
            
            </div>
        )
    }
}