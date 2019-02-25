import React,{Component} from "react";
import Style from './style'
import onClickOutside from "react-onclickoutside";

class webinarSMallHEader extends Component{
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
                    this.state.data !== null &&  <div id="header-about" className="chapter-webinar myaccountheader">
                        <div className="wrapper-overlay"><div></div></div>
                        <div className="opacitic-background1"></div>
                        <div className="opacitic-background"></div>
                        <div className="container-fluid">
                            <div className="primary-wrapper">

                                <div className="nav-width">
                                    <div className="header-nav">


                                    </div>
                                </div>
                                <div>

                                </div>
                            </div>
                            <div className="container middle-header-cert webinars">
                                <div className="row">
                                    <div className="col-5">
                                        <div className="svg-img1">
                                            <img class="webinar-image" src={require("../../../../assets/images/ac.png")}/>
                                        </div>
                                    </div>
                                    <div className="col-7">
                                        {
                                            this.state.titlechange === false ? <h1 dangerouslySetInnerHTML={{__html: this.state.data.data.title}} onClick={ () => this.switchCk('title')} />:
                                                <ReactQuill value={"<h1>" +this.state.data.data.title+ "</h1>"}
                                                            onChange={(data)=> this.changingContent( data, this.state.data.uuid,'title' )}
                                                            modules={webinarSMallHEader.modules}
                                                            formats={webinarSMallHEader.formats}

                                                />
                                        }

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
export default onClickOutside(webinarSMallHEader);

webinarSMallHEader.modules = {
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

webinarSMallHEader.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
];
