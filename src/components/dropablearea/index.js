import React, { Component } from "react";
import DropZone from "./griddropzone";
import setting from '../../assets/images/page-settings.svg';
import saveastemplate from '../../assets/images/save-as-template.svg';
import pages from "../../assets/images/pages.svg";
import add from "../../assets/images/add.svg";
import {ScteConsumer} from '../../store/Context';
import $ from 'jquery';
import {Link} from 'react-router-dom';
class DropableArea extends Component{
    saveTemplate(){

        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("templateOne", $('.content-cart')[0].innerHTML);
        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
        }
    };
    render(){
        return (
            <div className="dropable_area">
                <div className="top_nav">
                    <div className="back_button">
                        <button className="btn back">Back</button>
                    </div>
                    <div className="four_buttons">
                      <Link to="/template"> <button className="btn preview icon-button"><img src={require('../../assets/images/desktop.svg')}/><span>PREVIEW FOR DESKTOP</span></button></Link>
                      <button className="btn preview icon-button"><img src={require('../../assets/images/smartphone.svg')}/>PREVIEW FOR MOBILE</button>
                      <button className="btn sharedraft">Share Draft</button>
                      <button className="btn savedraft">Save as Draft</button>
                      <button className="btn save" onClick={()=>{this.saveTemplate()}}>Save</button>
                    </div>
                </div>   
                <div className="after_nav">
                    <div className="bread_crumb">
                        <p>Home/certification/AllCertification/BP:</p>
                    </div>
                    <div className="setting_button">
                        <div className="settings">
                            <img src={setting} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="editor_buttons">
                    <div className="addbtn" onClick={this.props.showcontrol.bind(this)}><img src={add}/></div>
                    <div className="pagesbtn addbtn"><img src={pages}/></div>
                    <div className="savetembtn addbtn"><img src={saveastemplate}/></div>
                </div>

                <ScteConsumer>
                    {
                        ({ dispatch, array, dataType})=>(
                                <DropZone  array={array} dispatch={dispatch} dataType={dataType}/>
                        )
                    }
                </ScteConsumer>

            </div>
        )
    }
}

export default DropableArea;