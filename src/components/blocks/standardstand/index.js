import React,{ Component } from 'react';
import Style from './style';
import onClickOutside from "react-onclickoutside";

class standardStand extends Component{
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
                    <section id="equally-divided" className="full-section-standard mb-3 mt-3">
                        <div className="container-fluid">
                            <div className="row">

                                <div className="offset-6 col-6 cortex btn-transparent ">
                                    <div className="inside-cortex for-special-to-fir">
                                        <div className="cortex flex-column align-items-start justify-content-end pr-0 pt-5 mt-4 pl-0">
                                            <p>Standards Stand Tall
                                            </p>
                                            {
                                                this.state.contentchange === false ? <p dangerouslySetInnerHTML={{__html: this.state.data.data.content}} onClick={ () => this.switchCk('content')} />:
                                                    <ReactQuill value={"<p>" +this.state.data.data.content+ "</p>"}
                                                                onChange={ (data)=> this.changingContent( data, this.state.data.uuid,'content' )}
                                                                modules={standardStand.modules}
                                                                formats={standardStand.formats}

                                                    />
                                            }
                                        </div>
                                        <div className="cortex-button align-items-start ">
                                            {
                                                this.state.data.data.button && this.state.data.data.button.map((item, index) => {
                                                    return (
                                                        <a key={index} href={item.link}>
                                                            <button className={"btn btn-medium btn-blue montserrat normal-text-prop fw-n ml-0 pl-5 pr-5 "+item.backgroundColor }>{item.name}</button>
                                                        </a>
                                                    )
                                                })
                                            }
                                            {/*<button className="btn btn-medium btn-blue montserrat normal-text-prop fw-n ml-0 pl-5 pr-5 "> Learn more</button>*/}
                                        </div>
                                    </div>
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
export default onClickOutside(standardStand);

standardStand.modules = {
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

standardStand.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
];
