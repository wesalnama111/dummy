import React, { Component } from 'react';
import Style from './style';
import onClickOutside from "react-onclickoutside";

class partnership extends Component{
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
               <section id="fullsection" className="certificate-wrp partnership-wrp">
                   <div className="container">
                       {
                           this.state.data !== null &&
                           <div className="row">
                               <div className="col-7">
                                   <div className="first-inside pl-0 certificate-con w-100">
                                       {
                                           this.state.titlechange === false ? <h4 dangerouslySetInnerHTML={{__html: this.state.data.data.title}} onClick={ () => this.switchCk('title')} />:
                                               <ReactQuill value={"<h4>" +this.state.data.data.title+ "</h4>"}
                                                           onChange={(data)=> this.changingContent( data, this.state.data.uuid,'title' )}
                                                           modules={partnership.modules}
                                                           formats={partnership.formats}

                                               />
                                       }
                                       {
                                           this.state.contentchange === false ? <p dangerouslySetInnerHTML={{__html: this.state.data.data.content}} onClick={ () => this.switchCk('content')} />:
                                               <ReactQuill value={"<p>" +this.state.data.data.content+ "</p>"}
                                                           onChange={ (data)=> this.changingContent( data, this.state.data.uuid,'content' )}
                                                           modules={partnership.modules}
                                                           formats={partnership.formats}

                                               />
                                       }
                                   </div>
                               </div>
                           </div>
                       }

                       <div className="container d-flex justify-content-end">
                           <div className="btns-colors">
                               <button className="btn btn-medium btn-cynide  montserrat fw-n pl-5 pr-5 normal-text-prop">MSO PARTNERSHIPS</button>
                               <button className="btn btn-medium btn-orange  montserrat fw-n pl-5 pr-5 normal-text-prop">TECH PARTNERSHIPS</button>
                               <button className="btn btn-medium btn-darkb  montserrat fw-n pl-5 pr-5 normal-text-prop">CONTRACTOR PARTNERSHIPS</button>
                           </div>
                       </div>
                   </div>
               </section>
               <Style/>
           </div>
        );
    }
}
export default onClickOutside(partnership);

partnership.modules = {
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

partnership.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
];
