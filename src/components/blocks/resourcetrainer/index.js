import React,{ Component } from 'react';
import Style from './style';
import onClickOutside from "react-onclickoutside";

class trainer extends Component{
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
        console.log("wesal")
        this.setState({
            titlechange: false,
            contentchange: false
        })
    };

    changingContent(value,uuid,TorC){
        console.log("this is wesal");
        let {array, dispatch} = this.props;
        let index = array.map(function(e,index) { return e.uuid; }).indexOf(uuid);
        if(TorC === 'title'){
            array[index].data.title= value;
        }
        else if(TorC === 'content'){
            array[index].data.content= value;
        }
        dispatch({
            setType: "arrayUpdate",
            loader:array
        });
    }
    componentDidMount() {
        this.setState({
            data: this.props.data,
        });
    }
    render(){
        let {ReactQuill} = this.props;
        return(
            <div>
                <section id="fullsection" className="resourse-training mt-3 d-flex align-items-center">
                    <div className="container">
                        {
                            this.state.data !== null &&
                            <div className="row">
                                <div className="col-6 ">
                                    <div className="first-inside certificate-con w-100 d-flex align-items-start flex-column justify-content-around">
                                        {
                                            this.state.contentchange === false ? <p dangerouslySetInnerHTML={{__html: this.state.data.data.content}} onClick={ () => this.switchCk('content')} />:
                                                <ReactQuill value={"<p>" +this.state.data.data.content+ "</p>"}
                                                            onChange={ (data)=> this.changingContent( data, this.state.data.uuid,'content' )}
                                                            modules={trainer.modules}
                                                            formats={trainer.formats}

                                                />
                                        }
                                        <div className="visit-btn mr-3">
                                            <button
                                                className="btn btn-medium btn-grey-light  montserrat fw-n pl-5 pr-5 normal-text-prop mr-5 mt-5">
                                                TRAINING RESOURCES
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="inside justify-content-start align-items-start pr-5 ">
                                        {
                                            this.state.titlechange === false ? <h1 dangerouslySetInnerHTML={{__html: this.state.data.data.title}} onClick={ () => this.switchCk('title')} />:
                                                <ReactQuill value={"<h1>" +this.state.data.data.title+ "</h1>"}
                                                            onChange={(data)=> this.changingContent( data, this.state.data.uuid,'title' )}
                                                            modules={trainer.modules}
                                                            formats={trainer.formats}
                                                />
                                        }
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </section>
                <Style/>
            </div>
        );
    }
}
export default onClickOutside(trainer);

trainer.modules = {
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

trainer.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
];