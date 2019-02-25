import React, { Component } from 'react';
import Style from './style';
import onClickOutside from "react-onclickoutside";

class header extends Component {
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
                {
                    this.state.data !== null &&
                        <div>
                            <div className="genericheader corporate-section">
                                <div className="wrapper-overlay"><div></div></div>
                                <div id="genericheader">
                                    <div className="opacitic-background1"></div>

                                    <div className="container-fluid">
                                        <div className=" container middle-header-cert">
                                            <div className="row">
                                                <div className="col-5">
                                                    <div className="svg-img1 corporate-img pt-3">
                                                        <span className="icon-group-13-1"></span>
                                                    </div>
                                                </div>
                                                <div className="col-7 pl-3 chapters corporate-container corporate-quill">
                                                    {
                                                        this.state.titlechange === false ? <h1 dangerouslySetInnerHTML={{__html: this.state.data.data.title}} onClick={ () => this.switchCk('title')} />:
                                                            <ReactQuill value={"<h1>" +this.state.data.data.title+ "</h1>"}
                                                                        onChange={(data)=> this.changingContent( data, this.state.data.uuid,'title' )}
                                                                        modules={header.modules}
                                                                        formats={header.formats}

                                                            />
                                                    }
                                                    {
                                                        this.state.contentchange === false ? <p dangerouslySetInnerHTML={{__html: this.state.data.data.content}} onClick={ () => this.switchCk('content')} />:
                                                            <ReactQuill value={this.state.data.data.content}
                                                                        onChange={ (data)=> this.changingContent( data, this.state.data.uuid,'content' )}
                                                                        modules={header.modules}
                                                                        formats={header.formats}

                                                            />
                                                    }
                                                    <button className="btn btn-medium btn-orange montserrat normal-text-prop tw-n mr-5">LEARN ABOUT THE BENEFITS</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section id="arrow-section">
                                <div className="container">
                                    <div className="arrow-container">
                                        <img src={require("../../../../assets/images/down-arow.png")}/>
                                        {/* <a href="#equally-divided"><img src="static/images/down-arow.png"/></a> */}
                                    </div>
                                </div>
                            </section>
                        </div>
                }
                <Style/>
            </div>
        );
    }
}
export default onClickOutside(header);

header.modules = {
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

header.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
];
