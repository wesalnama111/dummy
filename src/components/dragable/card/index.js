import React, { Component } from "react";
import { DragSource } from 'react-dnd';
const cardSource = {
    beginDrag(props) {
        return {
            data: props.single,
            type: "new"
        };
    },
    endDrag(props, monitor, component ){
        return{
            text: "end working"
        }
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

class Card extends Component{
    render(){
        let { connectDragSource, isDragging, single } = this.props;
        return connectDragSource(
            <div className="card" style={{ opacity: isDragging ? 0.2 : 1 , cursor: 'move'}}>
                <img src={require("../../../assets/images/"+single.type+".jpg")} alt=""/>
            </div>
        );
    }
}


export default DragSource("same", cardSource, collect)(Card);