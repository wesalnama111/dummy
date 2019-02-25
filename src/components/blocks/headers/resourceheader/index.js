import React,{ Component } from 'react';
import Style from './style';
import onClickOutside from "react-onclickoutside";

class resourceheader extends Component{
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
                            <div className="homepages">
                                <div id="header-section" className="resources">
                                    <div className="wrapper-overlay"><div/></div>
                                    <div className="opacitic-background1"/>

                                    <div className="container-fluid">
                                        {
                                            this.state.data !== null &&
                                            <div className="after-top-nav">
                                                <div className="text-icon resource-quill">
                                                    <img src={require("../../../../assets/images/blub.png")} alt=""/>
                                                    {
                                                        this.state.titlechange === false ? <h1 dangerouslySetInnerHTML={{__html: this.state.data.data.title}} onClick={ () => this.switchCk('title')} />:
                                                            <ReactQuill value={"<h1>" +this.state.data.data.title+ "</h1>"}
                                                                        onChange={(data)=> this.changingContent( data, this.state.data.uuid,'title' )}
                                                                        modules={resourceheader.modules}
                                                                        formats={resourceheader.formats}

                                                            />
                                                    }
                                                </div>
                                                <div className="input-div">
                                                    <input className="" type="text" placeholder="TO SEARCH RESOURCES TYPE HERE"/>
                                                    <button className="montserrat">FIND IT!</button>
                                                </div>
                                                <div className="button-wrp">
                                                    <button className="btn t-btn"><span> x&nbsp;&nbsp;&nbsp; periodicals</span>
                                                    </button>
                                                    <button className="btn t-btn"><span>x&nbsp;&nbsp;&nbsp; publications</span>
                                                    </button>
                                                    <button className="btn t-btn"><span>x&nbsp;&nbsp;&nbsp; guides</span></button>
                                                    <button className="btn t-btn"><span>x&nbsp;&nbsp;&nbsp; papers</span></button>
                                                    <button className="btn t-btn"><span>x&nbsp;&nbsp;&nbsp; journals</span></button>
                                                    <button className="btn t-btn"><span>x&nbsp;&nbsp;&nbsp; webinars</span></button>
                                                    <button className="btn t-btn"><span>x&nbsp;&nbsp;&nbsp; bookstore</span>
                                                    </button>
                                                    <button className="btn t-btn"><span>x&nbsp;&nbsp;&nbsp; know-how</span></button>
                                                    <button className="btn t-btn"><span>x&nbsp;&nbsp;&nbsp; games &amp; apps</span>
                                                    </button>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12 d-flex align-items-center justify-content-center p-4">
                                        <div id="down-icon ">
                                            <img src={require("../../../../assets/images/down-arow.png")}/>
                                            {/* <a href="#fullsection"> <img src="static/images/down-arow.png"/></a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
                <Style/>
            </div>
        );
    }
}
export default onClickOutside(resourceheader);

resourceheader.modules = {
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

resourceheader.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
];