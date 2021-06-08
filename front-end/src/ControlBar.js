import React, { Component, Menu } from 'react'
import { Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const URL = "ws://localhost:3002";

class ControlBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isWebSocketConnected: false,
            turtles: [
              { "Name": "Hades"},
              { "Name": "Persephone"}
            ],
        }
        this.getUniqueID = this.getUniqueID.bind(this);
        this.handleTurtleChange = this.handleTurtleChange.bind(this);
        this.turnLeft = this.turnLeft.bind(this);
        this.turnRight = this.turnRight.bind(this);
    }

    ws = new WebSocket(URL);

    componentWillMount() {
        this.ws.onopen = () => {
          // on connecting, do nothing but log it to the console
          console.log('connected')
          this.setState({ isWebSocketConnected: true});
        }
    
        this.ws.onmessage = evt => {
          // on receiving a message, add it to the list of messages
          //console.log(evt.data)
          var parsedMsg = JSON.parse(evt.data);
          var checkMsg = parsedMsg.func.substring(0,6)
          var turtleName = ""

          if (checkMsg == "turtle") {
            console.log("Totue :3")
            turtleName = parsedMsg
            console.log("PRUT" + turtleName);
          } else {
            var turtles = []
            //turtles.push("Hades")
            this.setState({ turtles: turtles })
            console.log(this.state.turtles)
            console.log("PROUUUUUUUT")
          }
        }
    
        this.ws.onclose = () => {
          console.log('disconnected')
          // automatically try to reconnect on connection loss
          this.setState({
            ws: new WebSocket(URL),
          })
        }
      }
    
    turnLeft() {
        if (this.state.isWebSocketConnected == true) {
          this.ws.send("turtle.turnLeft()");
        }
    }

    turnRight() {
        if (this.state.isWebSocketConnected == true) {
          this.ws.send("turtle.turnRight()");
        }
    }

    getUniqueID = () => {
        const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        return s4() + s4() + '-' + s4();
      };

    handleTurtleChange() {
        console.log("Je change de turtle active")
    }

    render() {
        return (
            <div className="controlbar">
                <Button variant="contained" color="primary" onClick={ this.turnLeft }>Turn Left</Button>
                <Button variant="contained" color="primary" onClick={ this.turnRight }>Turn Right</Button>
                <Button variant="contained" color="primary" onClick={ this.mine }>Mine</Button>

                <MenuItem>
                  { this.state.turtles.map((el, i) => (<MenuItem key={i} primaryText={el.Name} />)) }
                </MenuItem>

            </div>
        )
    }



}

export default ControlBar;