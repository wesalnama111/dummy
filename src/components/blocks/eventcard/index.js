import React,{ Component } from 'react';
import Style from './style';
import onClickOutside from "react-onclickoutside";

class twocards extends Component{
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
                <section id="equally-divided" class="cable-tec-section mb-0">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-6 training-topics">
                                <div class="inside align-items-end event-card">
                                    <div>
                                        <div class="text-book Expo justify-content-between pr-3">
                                            <p class="mt-4 mr-0">Cable-Tec Expo<sup>®</sup></p>
                                            <span class="icon-icon-1"></span>
                                        </div>
                                        <p class=" normal-text-prop fw-n pr-18 mb-0 mt-3">
                                            Attend Cable-Tec Expo<sup>®</sup> to gain knowledge<br/> about the latest
                                            breakthroughs in cable and<br/> telecommunications, connect
                                                with industry <br/>leaders and create opportunities to move
                                                    your business forward!</p>
                                        <div class="inbutton mt-5 mr-5">
                                            <button class="btn btn-medium btn-green normal-text-prop montserrat fw-n  pl-5 pr-5 mt-0"> VISIT Cable-Tec Expo<sup>®</sup></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 cortex proper-call">
                                <div class="inside-cortex">
                                    <div class="cortex justify-content-start pl-5">
                                        <p>Call for Papers</p>
                                    </div>
                                    <div class="cortex-button">
                                        <button class="btn btn-medium btn-blue montserrat normal-text-prop fw-n pl-5 pr-5 mt-4"> Subscribe today </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="equally-divided" class="proper-call-section mb-0">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-6 cortex proper-call">
                                <div class="inside-cortex align-items-end event-card sec-other">
                                    <div>
                                        <div class="cortex justify-content-start">
                                            <p class="mr-5">SCTE•ISBE <br/>Vendor Day Search</p>
                                        </div>
                                        <div class="cortex-button justify-content-start pr-5">
                                            <button class="btn btn-medium btn-white-grey montserrat normal-text-prop fw-n pl-5 pr-5 ml-0 mt-4"> LEARN MORE </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 training-topics">
                                <div class="inside align-items-start">
                                    <div class="text-book justify-content-between ">
                                        <p class="mt-4">Tom Polis Classic</p>
                                        <img src="static/images/classic.png"/>
                                    </div>
                                    {
                                        this.state.contentchange === false ? <p dangerouslySetInnerHTML={{__html: this.state.data.data.content}} onClick={ () => this.switchCk('content')} />:
                                            <ReactQuill value={"<p>" +this.state.data.data.content+ "</p>"}
                                                        onChange={ (data)=> this.changingContent( data, this.state.data.uuid,'content' )}
                                                        modules={twocards.modules}
                                                        formats={twocards.formats}

                                            />
                                    }
                                    <div class="inbutton justify-content-start pl-5 mr-0 mt-5">
                                        <button class="btn btn-medium btn-blue normal-text-prop montserrat fw-n  pl-5 pr-5 mt-0"> Explore</button>
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
export default onClickOutside(twocards);

twocards.modules = {
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

twocards.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
];
