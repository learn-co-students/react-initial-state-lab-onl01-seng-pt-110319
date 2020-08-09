import React, {Component} from 'react';

export default class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
            }
    }

    timer = () => {
        if(this.state.secondsLeft > 0){
            return (<p>{this.state.secondsLeft} seconds left before I go boom!</p>)
        }
        return (<p>Boom!</p>)
    }
    render(){
        return(
            this.timer()
            )
    }
}

