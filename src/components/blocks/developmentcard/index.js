import React,{ Component } from 'react';
import Style from './style';
import onClickOutside from "react-onclickoutside";

class developmentcards extends Component{
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
                        <div className="row stantard-container">
                            <div className="col-6 training-topics btn-blue1">
                                <div className="inside standard-dev">
                                    <div>
                                        <div className="text-book  w-100 flex-column align-items-end">
                                            <div className="d-flex standards flex-row justify-content-between w-100">
                                                <p className="mr-0">
                                                    Standards<br/>
                                                    Resource Center
                                                </p>
                                                <span className="icon-fill-58"></span>
                                            </div>
                                            <div className="">
                                                <p className=" fw-n mr-0 normal-text-prop white lh-183 pr-16  pt-4 pb-4 ">
                                                    Download the latest standards, get standards-related
                                                    literature, view standards by category, see a list of
                                                    standards-related topics, and access Standards Bulletins.
                                                </p>
                                            </div>

                                        </div>
                                        <div className="inbutton d-flex justify-content-start my-0 mt-3  w-100 mr-0">
                                            <button className="btn btn-medium btn-orange-lighter mt-0 h-25 normal-text-prop montserrat fw-n  pl-4 pr-5"> VISIT THE RESOURCE CENTER</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 cortex standard">
                                <div className="inside-cortex">
                                    <div className="cortex">
                                        <p>Standards FAQ's</p>
                                    </div>
                                    <div className="cortex-button">
                                        <button className="btn btn-medium btn-cynide-dark montserrat normal-text-prop fw-n pl-5 pr-5"> SEARCH FAQ'S BY TOPIC</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 training-topics get-involed">
                                <div className="inside standard-dev sec-div">
                                    <div>
                                        <div className="text-book  w-100 flex-column align-items-end">
                                            <div className="d-flex standards flex-row justify-content-between w-100 mb-4 pb-5">
                                                <p className="mr-0">
                                                    Get Involved with <br/>Standards Development
                                                </p>
                                            </div>
                                            <div className="">
                                                <p className=" fw-n mr-0 normal-text-prop white lh-183 pr-16  pt-4 pb-4 ">
                                                </p>
                                            </div>
                                        </div>
                                        <div className="inbutton justify-content-start my-0 mt-4  w-100 mr-0">
                                            <button className="btn btn-medium btn-white-light ml-0 mt-0 mt-5 h-25 normal-text-prop montserrat fw-n  pl-5 pr-5"> COMMITTEES &amp; CATEGORIES</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 cortex btn-black-another1">
                                <div className="inside-cortex for-special-to-fir ex-container">
                                    <div className="cortex d-flex flex-column align-items-start pl-5 pr-0 ">
                                        <div className="d-flex justify-content-between align-items-end w-100">
                                            <p className="">Standards Governance</p>
                                            <span className="icon-group-8"></span>
                                        </div>
                                        {
                                            this.state.contentchange === false ? <p dangerouslySetInnerHTML={{__html: this.state.data.data.content}} onClick={ () => this.switchCk('content')} />:
                                                <ReactQuill value={"<p>" +this.state.data.data.content+ "</p>"}
                                                            onChange={ (data)=> this.changingContent( data, this.state.data.uuid,'content' )}
                                                            modules={developmentcards.modules}
                                                            formats={developmentcards.formats}

                                                />
                                        }
                                    </div>
                                    <div className="cortex-button align-items-start ">
                                        <button className="btn btn-medium btn-blue montserrat normal-text-prop fw-n pl-5 pr-5 "> VISIT GOVERNANCE</button>
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
export default onClickOutside(developmentcards);

developmentcards.modules = {
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

developmentcards.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
];