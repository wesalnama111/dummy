import React,{Component} from "react";
import Style from "./style"
import onClickOutside from "react-onclickoutside";

class TrainingMain extends Component{
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
                    <div className="genericheader" id="web-training-header">
                        <div id="genericheader">
                            <div className="wrapper-overlay"><div></div></div>
                            <div className="opacitic-background1"></div>
                            <div className="container-fluid">
                                <div className="primary-wrapper">

                                    <div className="nav-width">
                                        <div className="header-nav">
                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                <div className="container middle-header-cert">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="svg-img1 mr-5">
                                                {/* <!-- <img src="assets/images/webtrainsing.svg" /> --> */}
                                                <span className="icon-class"></span>
                                            </div>
                                        </div>
                                        <div className="col-8 chapters">
                                            {
                                                this.state.titlechange === false ? <h1 dangerouslySetInnerHTML={{__html: this.state.data.data.title}} onClick={ () => this.switchCk('title')} />:
                                                    <ReactQuill value={"<h1>" +this.state.data.data.title+ "</h1>"}
                                                                onChange={(data)=> this.changingContent( data, this.state.data.uuid,'title' )}
                                                                modules={TrainingMain.modules}
                                                                formats={TrainingMain.formats}

                                                    />
                                            }
                                            {
                                                this.state.contentchange === false ? <p dangerouslySetInnerHTML={{__html: this.state.data.data.content}} onClick={ () => this.switchCk('content')} />:
                                                    <ReactQuill value={"<p>" +this.state.data.data.content+ "</p>"}
                                                                onChange={ (data)=> this.changingContent( data, this.state.data.uuid,'content' )}
                                                                modules={TrainingMain.modules}
                                                                formats={TrainingMain.formats}

                                                    />
                                            }
                                            <button className="btn btn-medium btn-orange-lighter montserrat normal-text-prop tw-n pl-5 pr-5">SEE ALL COURSE CATEGORIES</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <Style/>
            </div>
        )
    }
}
export default onClickOutside(TrainingMain);

TrainingMain.modules = {
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

TrainingMain.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
];
