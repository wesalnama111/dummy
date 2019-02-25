import React,{ Component } from 'react';
import Style from './style';
import onClickOutside from "react-onclickoutside";

class digitalbasic extends Component{
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
                            <div>
                                <div className="container p-0">
                                    <div className="row">
                                        <div className="col-sm-12 pl-0">
                                            <h4 className="montserrat normal-text-prop fw-n feature-event-heading pb-4">What's New</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section id="fullsection" className="fundamantal-section">
                                <div className="container p-0">
                                    <div className="row">

                                        <div className="col-6 p-0">
                                            <div className="first-inside mt-5 pt-5">
                                                <div className="fundamantal-date d-flex align-items-center justify-content-start">
                                                    <p className="montserrat normal-text-prop fw-800 mb-2 mr-5">DEC. 10, 2018</p>
                                                    <span className="montserrat normal-text-prop fw-800 ml-2 mb-2 share-color">SHARE THIS</span>
                                                </div>
                                                {
                                                    this.state.titlechange === false ? <h1 dangerouslySetInnerHTML={{__html: this.state.data.data.title}} onClick={ () => this.switchCk('title')} />:
                                                        <ReactQuill value={"<h1>" +this.state.data.data.title+ "</h1>"}
                                                                    onChange={(data)=> this.changingContent( data, this.state.data.uuid,'title' )}
                                                                    modules={digitalbasic.modules}
                                                                    formats={digitalbasic.formats}

                                                        />
                                                }
                                                {
                                                    this.state.contentchange === false ? <p dangerouslySetInnerHTML={{__html: this.state.data.data.content}} onClick={ () => this.switchCk('content')} />:
                                                        <ReactQuill value={"<p>" +this.state.data.data.content+ "</p>"}
                                                                    onChange={ (data)=> this.changingContent( data, this.state.data.uuid,'content' )}
                                                                    modules={digitalbasic.modules}
                                                                    formats={digitalbasic.formats}

                                                        />
                                                }
                                            </div>
                                        </div>
                                        <div className="col-6 inside">
                                            <div className="inside justify-content-end">
                                                {
                                                    this.state.data.data.button && this.state.data.data.button.map((item, index) => {
                                                        return (
                                                            <a key={index} href={item.link}>
                                                                <button className={"btn btn-medium  montserrat fw-n pl-5 pr-5 normal-text-prop  "+item.backgroundColor }>{item.name}</button>
                                                            </a>
                                                        )
                                                    })
                                                }

                                            </div>
                                        </div>
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
export default onClickOutside(digitalbasic);

digitalbasic.modules = {
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

digitalbasic.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
];
