import React,{ Component } from 'react';
import Style from './style';

import onClickOutside from "react-onclickoutside";

class knowledgeBase extends Component{
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
                <section id="fullsection" className="Knowledge-section mt-3 d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            {
                                this.state.data !== null &&
                                <div
                                    className="col-sm-12 d-flex align-items-center justify-content-around trainers-container flex-column">
                                    <div className="trainers d-flex align-items-center justify-content-end">
                                        {
                                            this.state.titlechange === false ? <h1 dangerouslySetInnerHTML={{__html: this.state.data.data.title}} onClick={ () => this.switchCk('title')} />:
                                                <ReactQuill value={"<h4>" +this.state.data.data.title+ "</h4>"}
                                                            onChange={(data)=> this.changingContent( data, this.state.data.uuid,'title' )}
                                                            modules={knowledgeBase.modules}
                                                            formats={knowledgeBase.formats}

                                                />
                                        }


                                    </div>
                                    <div className="visit-btn d-flex justify-content-center justify-content-center ">
                                        <button
                                            className="btn btn-medium btn-blue  montserrat fw-n pl-5 pr-5 normal-text-prop mr-5">
                                            GAMES &amp; APPS
                                        </button>
                                        <button
                                            className="btn btn-medium btn-orange-light  montserrat fw-n pl-5 pr-5 normal-text-prop mr-5">
                                            GLOSSARY
                                        </button>
                                        <button
                                            className="btn btn-medium btn-orange  montserrat fw-n pl-5 pr-5 normal-text-prop mr-5">
                                            FACTS &amp; FAQ'S
                                        </button>
                                        <button
                                            className="btn btn-medium btn-grey-dark  montserrat fw-n pl-5 pr-5 normal-text-prop ">
                                            PAPERS
                                        </button>

                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </section>
                <Style/>
            </div>
        );
    }
}
export default onClickOutside(knowledgeBase);

knowledgeBase.modules = {
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

knowledgeBase.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
];
