/**
 * Created by FaZi on 1/29/2019.
 */

import React, { Component } from 'react';
import Style from './style';
import onClickOutside from "react-onclickoutside";

class registerSection extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            titlechange: false,
            contentchange: false
        }
    }
    handleClickOutside = evt => {
        this.setState({
            titlechange: false,
            contentchange: false
        })
    };
    switchCk(value){

        if(value === 'title'){
            this.setState({titlechange: !this.state.titlechange, contentchange:false});
        }
        else if(value === 'content'){
            this.setState({contentchange: !this.state.contentchange, titlechange:false});
        }
        else if(value === 'both'){
            this.setState({contentchange: false, titlechange:false})

        }

    }
    onBlured=() =>{
        this.setState({
            titlechange: false,
            contentchange: false
        })
    };

    changingContent(value,uuid,TorC){
        console.log("checking if same compoentn is being called");
        let {array, dispatch} = this.props;
        let index = array.map(function(e,index) { return e.uuid; }).indexOf(uuid);
        if(TorC === 'title'){
            array[index].data.title= value;
        }
        else if(TorC === 'content'){
            array[index].data.content= value;
        }
        dispatch({
            type: "REPLACE_ARRAY",
            payload: array
        })
    }

    componentDidMount() {
        this.setState({
            data: this.props.data});
    }

    render(){
        let {ReactQuill} = this.props;
        return(
            <div>
                <section id="corpo-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-7">
                                <div className="headi">
                                    {
                                        this.state.titlechange === false ? <h1 dangerouslySetInnerHTML={{__html: this.state.data.data.title}} onClick={ () => this.switchCk('title')} />:
                                            <ReactQuill value={"<h1>" +this.state.data.data.title+ "</h1>"}
                                                        onChange={(data)=> this.changingContent( data, this.state.data.uuid,'title' )}
                                                        modules={registerSection.modules}
                                                        formats={registerSection.formats}

                                            />
                                    }
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="dropi">
                                    <div className="dropi-in">

                                        <div className="dropdown">
                                            <div className="select">
                                                <span className="default-showi">Select Your Company</span>
                                                <i className="fa fa-chevron-down"></i>
                                            </div>
                                            <input type="hidden" name="gender" />
                                                <ul className="dropdown-menu">
                                                    <li>Charter Communications</li>
                                                    <li>Cox Communications</li>
                                                    <li>Comcast Cable</li>
                                                </ul>
                                        </div>
                                    </div>
                                    <button className="btn">GO</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <Style/>
            </div>
        );
    }
}
export default onClickOutside(registerSection);

registerSection.modules = {
    toolbar: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'},
            {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']
    ],
    clipboard: {
        matchVisual: false,
        // toggle to add extra line breaks when pasting HTML:
    }
};

registerSection.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
];
