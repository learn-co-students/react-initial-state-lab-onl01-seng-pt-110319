import React, { Component } from 'react';

class Bomb extends Component {

    constructor(props) {
        super(props)
        this.state = { secondsLeft: props.initialCount }
    }
    
    timer() {
        let secsLeft = this.state.secondsLeft
        return secsLeft === 0 ?
        'Boom!' : `${secsLeft} seconds left before I go boom!`
    }

    render() {
        return this.timer();
    }
}

export default Bomb;