import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state,action) =>{
  switch (action.type){
    case 'DATA_TYPE':
      return {...state, type: action.payload};
    case 'REPLACE_ARRAY':
      return {...state, array: action.payload};
    case 'ADD_IN_ARRAY':
      return {...state, array: [...state.array, action.payload]};
    default:
      return state;
  }
};

export class ScteProvider extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dispatch: (action) =>{
        this.setState(state => reducer(state, action))
      },
      array: []
    }
  }

  render(){
    const { state, props: {children} } = this;
    return <Context.Provider value={ state } >{children}</Context.Provider>;
  }
}

export const ScteConsumer = Context.Consumer;

