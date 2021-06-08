import React, { Component, useState } from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';
import Turtle from './Turtle';

class TurtleRenderer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            turtles: []
        }
        this.getTurtles = this.getTurtles.bind(this);
        this.addNewTurtle = this.addNewTurtle.bind(this);
    }

    addNewTurtle() {
        this.setState({ 
            turtles: [...this.state.turtles, <Turtle name={ this.props.name }/>]
         })
    }

    getTurtles() {

        var array = []

        // Fetch the turtle list from the database and display it

        axios({
                method: 'get',
                headers: { 'Content-Type': 'application/json'},
                url: "mongodb+srv://cluster0.wb0hn.mongodb.net/turtlecontroller/turtles"
            })
            .then(response => {
                console.log(response.data)
            })
            .catch(e => {
                console.log(e);
            })

    }

    render() {
        return (
            <div>
                { this.getTurtles() }

                <Button onClick={ this.addNewTurtle }>Add a new turtle</Button>
            </div>
        )
    }
    
}

export default TurtleRenderer;