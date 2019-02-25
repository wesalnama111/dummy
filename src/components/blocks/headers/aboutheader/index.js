import React,{ Component } from 'react';
import Style from './style';
import onClickOutside from "react-onclickoutside";

class Aboutheader extends Component{
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
                            <div className="genericheader about-header-background">
                                <div className="wrapper-overlay"><div></div></div>
                                <div id="genericheader">
                                    <div className="opacitic-background1"></div>
                                    <div className="container-fluid">
                                        <div className="middle-header-cert container">
                                            <div className="row">
                                                <div className="col-5">
                                                    <div className="svg-img1">
                                                        <span className="icon-meeting"></span>
                                                    </div>
                                                </div>

                                                <div className="col-7 chapters pl-4 about-quill">
                                                    {
                                                        this.state.titlechange === false ? <h1 dangerouslySetInnerHTML={{__html: this.state.data.data.title}} onClick={ () => this.switchCk('title')} />:
                                                            <ReactQuill value={"<h1>" +this.state.data.data.title+ "</h1>"}
                                                                        onChange={(data)=> this.changingContent( data, this.state.data.uuid,'title' )}
                                                                        modules={Aboutheader.modules}
                                                                        formats={Aboutheader.formats}

                                                            />
                                                    }
                                                    {
                                                        this.state.contentchange === false ? <p dangerouslySetInnerHTML={{__html: this.state.data.data.content}} onClick={ () => this.switchCk('content')} />:
                                                            <ReactQuill value={this.state.data.data.content}
                                                                        onChange={ (data)=> this.changingContent( data, this.state.data.uuid,'content' )}
                                                                        modules={Aboutheader.modules}
                                                                        formats={Aboutheader.formats}

                                                            />
                                                    }
                                                    <button className="btn btn-medium btn-blue montserrat normal-text-prop pl-5 w-25 pr-5 tw-n ">
                                                        EXPAND
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section id="arrow-section">
                                <div className="container">
                                    <div className="arrow-container">
                                        {/* <a href="#img-txt"><img src="static/images/down-arow.png"/></a> */}
                                        <img src={require("../../../../assets/images/down-arow.png")}/>
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
export default onClickOutside(Aboutheader);

Aboutheader.modules = {
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

Aboutheader.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
];

