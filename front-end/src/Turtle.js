import React, { Component } from 'react';

class Turtle extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <h1>I'm a turtle named {this.props.name}</h1>
        )
    }

}

export default Turtle;