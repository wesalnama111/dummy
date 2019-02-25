import React,{Component} from "react"
import Style from "./style"
import onClickOutside from "react-onclickoutside";

class  VirtutalLearn extends Component{
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
        <section id="web-training-s3">

            <div className="container">
                <div className="txt-container d-flex flex-column-reverse justify-content-center align-items-center ">
                    <div className="row">

                        <div className="col-sm-4">
                            <div className="img-logo pt-5">
                                <a href=" https://www.scte.org/virtuearn">
                                    <img src={require("../../../assets/images/logotext.png")}/>
                                </a>

                            </div>
                        </div>
                        <div className="col-sm-8">
                            {
                                this.state.contentchange === false ? <p dangerouslySetInnerHTML={{__html: this.state.data.data.content}} onClick={ () => this.switchCk('content')} />:
                                    <ReactQuill value={"<p>" +this.state.data.data.content+ "</p>"}
                                                onChange={ (data)=> this.changingContent( data, this.state.data.uuid,'content' )}
                                                modules={VirtutalLearn.modules}
                                                formats={VirtutalLearn.formats}

                                    />
                            }
                        </div>
                    </div>


                </div>
            </div>

        </section>
    }

<Style/>
</div>
        )
    }
}
export default onClickOutside(VirtutalLearn);

VirtutalLearn.modules = {
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

VirtutalLearn.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
];