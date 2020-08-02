// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

	constructor(props) {
		super()
		this.state = {
			secondsLeft: props.initialCount
		}

	}

	handleBoom = () => {	
		let seconds = this.state.secondsLeft
		setInterval(() => {
			this.setState({
				secondsLeft: seconds-1
			})
		}, 1000)
		if (seconds === 0) {
			return "Boom!"
		}
		else {
			return `${this.state.secondsLeft} seconds left before I go boom!`
		}
    }
    


	render() {
		return (
			<div>
			{this.handleBoom()}
			</div>
		)
	}

}