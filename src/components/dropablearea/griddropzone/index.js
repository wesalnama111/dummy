import React, { Component } from "react";
import RenderBlock from "../renderblocks";
import { DropTarget } from 'react-dnd';
import uuid from "uuid";

const dropTarget = {
  drop(props, monitor, component) {
    let value = monitor.getItem();
    if(value.type === "new"){
      component.handleDrop(value.data);
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class GridDropZone extends Component{

  constructor(props) {
    super(props);
    this.state = {
      childDom: null,
      dataType: null
    }
  }

  handleDrop(value){
    let { array } = this.props;
    let { dataType } = this.state;
    let val = {...value};
    let mainArray = [...array];
    val.uuid = uuid();
    if(!dataType){
      this.props.dispatch({
        type:'ADD_IN_ARRAY',
        payload: val
      });
    }
    else {
      let pos = mainArray.map(function(e) { return e.type; }).indexOf('placeholder');
      mainArray[pos] = val;
      this.props.dispatch({
        type:'REPLACE_ARRAY',
        payload: mainArray
      });
    }
    this.setState({dataType: null});

  }


  setOrder(sourceId, targetId, order){
    let { array } = this.props;
    let mainArray = [...array];
    let sourceData = mainArray.find(sin => sin.uuid === sourceId);
    let remainingArray = mainArray.filter(sin => sin.uuid !== sourceId);
    let newArray = [];
    remainingArray.forEach((sin) => {
      if(order === "before" && sin.uuid === targetId){
        newArray.push(sourceData);
        newArray.push(sin);
      }else if(order === "after" && sin.uuid === targetId){
        newArray.push(sin);
        newArray.push(sourceData);
      }else{
        newArray.push(sin);
      }
    });
    this.props.dispatch({
      type:'REPLACE_ARRAY',
      payload: newArray
    })
    // this.setState({array: newArray})

  }

  setBlockOnPlaceholder(){
    this.setState({dataType: "secondary"});
  }

  setTemp(targetId, order){
    let { array } = this.props;
    let placeholder = { uuid: null, type: "placeholder"};
    let mainArray = [...array];
    let newArray = [];
    if(!mainArray.find(sin => sin.uuid === targetId)){
      return;
    }
    if(!mainArray.find(sin => sin.type === "placeholder")){
      mainArray.forEach((sin) => {
        if(order === "before" && sin.uuid === targetId){
          newArray.push(placeholder);
          newArray.push(sin);
        }else if(order === "after" && sin.uuid === targetId){
          newArray.push(sin);
          newArray.push(placeholder);
        }else{
          newArray.push(sin);
        }
      });
    }
    else{
      let remainingArray = mainArray.filter(sin => sin.type !== "placeholder");
      remainingArray.forEach((sin) => {
        if(order === "before" && sin.uuid === targetId){
          newArray.push(placeholder);
          newArray.push(sin);
        }else if(order === "after" && sin.uuid === targetId){
          newArray.push(sin);
          newArray.push(placeholder);
        }else{
          newArray.push(sin);
        }
      });
    }
    this.props.dispatch({
      type: 'REPLACE_ARRAY',
      payload: newArray
    })
    // this.setState({array: newArray})
  }

  render(){
    let { array ,dispatch} = this.props;
    let {connectDropTarget} = this.props;
    return connectDropTarget(
      <div className="content-cart">
        {
          array && array.length !== 0 && array.map((sin, index) => {
            return <RenderBlock array={array} dispatch={dispatch} single={sin} key={index} setBlockOnPlaceholder={this.setBlockOnPlaceholder.bind(this)} setOrder={this.setOrder.bind(this)} setTemp={this.setTemp.bind(this)} />
          })
        }
      </div>
    )
  }

}

export default DropTarget("same", dropTarget, collect )(GridDropZone);