import React, { Component } from "react";
import Card from "./card";
import data from "./data.json";

class Dragable extends Component{


    constructor(props) {
        super(props);
        this.state = {
            items: null,
            active: null

        }
    }
    componentDidMount(){
        this.setState({items: data});
    }

    setCurrent(index){
        let { active } = this.state;
        this.setState({active: active === index ? null : index});
    }

    render(){
        let { items, active } = this.state;
        return(
            <div className={  this.props.hideshow === true ? 'draggable_area fadeInLeft show':'draggable_area '}>
                <div className="primary-div">
                <h5 className="size">Add UI Block </h5>
                <img src={require("../../assets/images/close.svg")} onClick={this.props.hidecontrol.bind(this)} alt="closebutton"  className="positionab"/>
                <form className="example">
                    <input type="text" placeholder="Search.." name="search"/>
                    <button type="submit"><i className="fa fa-search"/></button>
                </form>
                <div className="leftsection">
                    <ul className="list-container">
                        {
                            items && items.map((sin, index) => {
                                return sin.data.length !== 0 &&(
                                    <li key={index}>
                                        <div className="title_area" onClick={() => this.setCurrent(index)}>
                                            <i className="fa fa-greater-than"/>
                                            <span>{sin.title}</span>
                                        </div>
                                        {
                                            index === active &&
                                            <div className="blocks_render">
                                                {
                                                    sin.data.map(sin => {
                                                        return <Card key={sin.id} single={sin} value={sin.id}/>
                                                    })
                                                }
                                            </div>
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}
export default Dragable;