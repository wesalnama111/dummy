import React, { Component } from "react";
import Dragable from "../dragable";
import Dropable from "../dropablearea";
import { DragDropContext  } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Pages extends Component{
    // state={
    //     show: false
    // };
    constructor(props) {
        super(props);
        this.state = {
            show: false

        }
    }
    showcontrol(){
        this.setState({show: true});
    }
    hidecontrol(){
        this.setState({show: false});
    }
    render(){
        return(
            <div className="main-container">
                <Dragable hideshow={this.state.show}  hidecontrol={()=> this.hidecontrol()}/>
                <Dropable showcontrol={()=> this.showcontrol()} />
            </div>
        )
    }

}

export default DragDropContext(HTML5Backend)(Pages);