import React, { Component, useState } from 'react';
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'
import { Button } from '@material-ui/core';
import TurtleRenderer from './TurtleRenderer';

// To launch the database : json-server --watch world.json --port 3003

class World extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    async componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <TurtleRenderer />
                <h1>World Map</h1>
            </div>
        )
    }
}

export default World;
