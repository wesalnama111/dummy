import React,{Component} from "react";
import Style from "./style";
import onClickOutside from "react-onclickoutside";

class AccountMember extends Component{
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
<section id="equally-divided" className="myaccount-equal-back mb-3">
    <div className="container">
        <div className="row">
            <div className="col-6 training-topics btn-transparent">
                <div className="inside   justify-content-center">
                    <div className="text-book  w-100 flex-column align-items-center justify-content-start">
                        <div className="d-flex standards w-100 flex-row justify-content-start">
                            {
                                this.state.titlechange === false ? <h1 dangerouslySetInnerHTML={{__html: this.state.data.data.title}} onClick={ () => this.switchCk('title')} />:
                                    <ReactQuill value={"<h1>" +this.state.data.data.title+ "</h1>"}
                                                onChange={(data)=> this.changingContent( data, this.state.data.uuid,'title' )}
                                                modules={AccountMember.modules}
                                                formats={AccountMember.formats}

                                    />
                            }
                        </div>
                        <div className="d-flex justify-content-left mt-4 w-100">
                            {
                                this.state.contentchange === false ? <p dangerouslySetInnerHTML={{__html: this.state.data.data.content}} onClick={ () => this.switchCk('content')} />:
                                    <ReactQuill value={"<p>" +this.state.data.data.content+ "</p>"}
                                                onChange={ (data)=> this.changingContent( data, this.state.data.uuid,'content' )}
                                                modules={AccountMember.modules}
                                                formats={AccountMember.formats}

                                    />
                            }
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-6 cortex standard btn-transparent">
                <div className="inside-cortex">
                    <div className="cortex">

                    </div>
                    <div className="cortex-button justify-content-end">
                        <button className="btn btn-medium btn-black-another montserrat normal-text-prop fw-n ml-0 pl-5 pr-5"> visit the resource library</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
<Style/>
</div>
        )
    }
}

export default onClickOutside(AccountMember);

AccountMember.modules = {
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

AccountMember.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
];
