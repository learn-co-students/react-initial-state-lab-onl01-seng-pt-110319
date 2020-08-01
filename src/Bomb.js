// your Bomb code here!
   // import React from 'react';

    // class Bomb extends React.Component {


import React, { Component } from 'react';

class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render() {
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
        return (
            <h1>
                {message}
            </h1>
        )
    }
}

export default Bomb