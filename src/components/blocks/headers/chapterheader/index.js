import React, { Component } from "react";
import Style from './style';
import onClickOutside from "react-onclickoutside";

class ChapterHeader extends Component{
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
                <div className="genericheader chapterheader" id="archive">
                    <div className="wrapper-overlay"><div></div></div>
                    <div id="genericheader">
                        <div className="container-fluid">
                            <div className="container middle-header-cert">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="svg-img">
                                            <span className="icon-group-3-2"/>
                                        </div>
                                    </div>
                                    {
                                        this.state.data !== null &&
                                        <div className="col-8 chapters archive-btn chapter-quill">
                                            {
                                                this.state.titlechange === false ? <h1 dangerouslySetInnerHTML={{__html: this.state.data.data.title}} onClick={ () => this.switchCk('title')} />:
                                                    <ReactQuill value={"<h1>" +this.state.data.data.title+ "</h1>"}
                                                                onChange={(data)=> this.changingContent( data, this.state.data.uuid,'title' )}
                                                                modules={ChapterHeader.modules}
                                                                formats={ChapterHeader.formats}

                                                    />
                                            }
                                            {
                                                this.state.contentchange === false ? <p dangerouslySetInnerHTML={{__html: this.state.data.data.content}} onClick={ () => this.switchCk('content')} />:
                                                    <ReactQuill value={"<p>" +this.state.data.data.content+ "</p>"}
                                                                onChange={ (data)=> this.changingContent( data, this.state.data.uuid,'content' )}
                                                                modules={ChapterHeader.modules}
                                                                formats={ChapterHeader.formats}

                                                    />
                                            }
                                            <div
                                                className="chapter-buttons d-flex justify-content-start align-items-center">
                                                <button
                                                    className="btn btn-medium btn-cynide-dark montserrat normal-text-prop tw-n pl-5 pr-5 mr-5">
                                                    GET INVOLVED &amp; VOLUNTEER
                                                </button>
                                                <button
                                                    className="btn btn-medium btn-orange montserrat normal-text-prop tw-n pl-5 pr-5 mr-0">
                                                    FIND A LOCAL EVENT
                                                </button>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 d-flex align-items-center justify-content-center p-4">
                            <div id="down-icon ">
                                {/* <a href="#topics"> <img src="static/images/down-arow.png"/></a> */}
                                <img src={require("../../../../assets/images/down-arow.png")}/>

                            </div>
                        </div>
                    </div>
                </div>
                <Style/>
            </div>
        )
    };
}
export default onClickOutside(ChapterHeader);

ChapterHeader.modules = {
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

ChapterHeader.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
];

