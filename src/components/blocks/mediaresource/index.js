import React,{ Component } from 'react';
import Style from './style';
import onClickOutside from "react-onclickoutside";

class mediaCard extends Component{
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
                <section id="equally-divided">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6 training-topics mediacenter-equally-divided">
                                <div className="inside r-box">
                                    <div>
                                        <div className="text-book">
                                            <p>SCTE•ISBE<br/>
                                                Media Resources
                                            </p>
                                        </div>
                                        <div className="inbutton mr-0">
                                            <button className="btn btn-medium mr-0 btn-black-another normal-text-prop montserrat fw-n  pl-5 pr-5"> media info</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 cortex card-bluedrk-bg mediacenter-equally-divided-another w-100">
                                <div className="inside-cortex ">
                                    <div className="cortex flex-column   justify-content-center align-items-center">
                                        <div className="identifier-1 w-100 ml-5 flex-grow-1 d-flex flex-row align-items-center mt-12 mb-5">
                                            {
                                                this.state.titlechange === false ? <h4 dangerouslySetInnerHTML={{__html: this.state.data.data.title}} onClick={ () => this.switchCk('title')} />:
                                                    <ReactQuill value={"<h4>" +this.state.data.data.title+ "</h4>"}
                                                                onChange={(data)=> this.changingContent( data, this.state.data.uuid,'title' )}
                                                                modules={mediaCard.modules}
                                                                formats={mediaCard.formats}

                                                    />
                                            }
                                            <span className="icon-group-9"></span>
                                        </div>
                                        <div className="identifier-2 w-75 d-flex justify-content-center align-items-center">
                                            {
                                                this.state.contentchange === false ? <p dangerouslySetInnerHTML={{__html: this.state.data.data.content}} onClick={ () => this.switchCk('content')} />:
                                                    <ReactQuill value={"<p>" +this.state.data.data.content+ "</p>"}
                                                                onChange={ (data)=> this.changingContent( data, this.state.data.uuid,'content' )}
                                                                modules={mediaCard.modules}
                                                                formats={mediaCard.formats}

                                                    />
                                            }
                                        </div>
                                    </div>
                                    <div className="cortex-button  align-items-center    justify-content-start">
                                        <button className="ml-0 btn btn-medium btn-orange montserrat normal-text-prop fw-n pl-5 pr-5"> SCTE•ISBE STAFF</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Style/>
            </div>
        );
    }
}
export default onClickOutside(mediaCard);

mediaCard.modules = {
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

mediaCard.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
];