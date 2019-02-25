/**
 * Created by FaZi on 1/29/2019.
 */
import React, { Component } from 'react';
import Style from './style';
import onClickOutside from "react-onclickoutside";

class engineerSection extends Component{
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
        let { CKEditor, InlineEditor } = this.props;
        return(
            <div>
                {
                    this.state.data !== data &&
                    <section id="fullsection" className="certificate-wrp en-wrp">
                        <div className="container">

                            <div className="row">
                                <div className="col-9">
                                    <div className="first-inside pl-0 certificate-con w-100">
                                        {
                                            this.state.contentchange === false ? <p dangerouslySetInnerHTML={{__html: this.state.data.data.content}} onClick={ () => this.switchCk('content')} />:
                                                <ReactQuill value={"<p>" +this.state.data.data.content+ "</p>"}
                                                            onChange={ (data)=> this.changingContent( data, this.state.data.uuid,'content' )}
                                                            modules={engineerSection.modules}
                                                            formats={engineerSection.formats}

                                                />
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 p-0 d-flex">
                                <div className="btns-colors mt-4">
                                    <button className="btn btn-medium btn-green  montserrat fw-n pl-5 pr-5 normal-text-prop mr-3 ">Engineering Standards</button>
                                    <button className="btn btn-medium btn-blue  montserrat fw-n pl-5 pr-5 normal-text-prop mr-3 ">Learning and Development</button>
                                    <button className="btn btn-medium btn-darkb  montserrat fw-n pl-5 pr-5 normal-text-prop mr-3 ">Membership</button>
                                    <button className="btn btn-medium btn-cynide  montserrat fw-n pl-5 pr-5 normal-text-prop mr-3 mt-3">Chapters</button>
                                    <button className="btn btn-medium btn-orange  montserrat fw-n pl-5 pr-5 normal-text-prop mr-3 mt-3">Cable-Tec Expo® and Events</button>
                                </div>
                            </div>
                        </div>
                    </section>
                }

                <Style/>
            </div>
        );
    }
}
export default onClickOutside(engineerSection);

engineerSection.modules = {
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

engineerSection.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
];
