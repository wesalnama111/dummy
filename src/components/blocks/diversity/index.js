import React, {Component} from 'react';
import Style from './style';
import onClickOutside from "react-onclickoutside";


class diversity extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data:null,
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
        })

    }


    componentDidMount(){

        this.setState({data: this.props.data});

    }

    render(){
        let {ReactQuill} = this.props;

        return(
            <div  className="main-div">
                <div className="absolute" onClick={()=> this.onBlured()}/>
                <section id="fullsection" className="about-fullsection-back">
                    <div className="container">
                        <div className="row">
                            <div className="col-7 first-height">

                                {
                                    this.state.data !==null &&
                                    <div className="first-inside">
                                        {
                                            this.state.titlechange === false ? <h1 dangerouslySetInnerHTML={{__html: this.state.data.data.title}} onClick={ () => this.switchCk('title')} />:
                                                <ReactQuill value={"<h1>" +this.state.data.data.title+ "</h1>"}
                                                            onChange={(data)=> this.changingContent( data, this.state.data.uuid,'title' )}
                                                            modules={diversity.modules}
                                                            formats={diversity.formats}

                                                />
                                        }

                                        {
                                            this.state.contentchange === false ? <p dangerouslySetInnerHTML={{__html: this.state.data.data.content}} onClick={ () => this.switchCk('content')} />:
                                                <ReactQuill value={"<p>" +this.state.data.data.content+ "</p>"}
                                                            onChange={ (data)=> this.changingContent( data, this.state.data.uuid,'content' )}
                                                            modules={diversity.modules}
                                                            formats={diversity.formats}

                                                />
                                        }
                                        {
                                            this.state.data.data.button && this.state.data.data.button.map((item, index) => {
                                                return (
                                                    <a key={index} href={item.link}>
                                                        <button className={"mt-1 btn btn-medium   montserrat fw-n pl-5 pr-5 normal-text-prop "+item.backgroundColor}>{item.name}</button>
                                                    </a>
                                                )
                                            })
                                        }


                                        {/*<button className=" mt-1 btn btn-medium   montserrat fw-n pl-5 pr-5 normal-text-prop">READ MORE</button>*/}
                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                </section>
                <Style/>
            </div>
        );
    }
}
export default onClickOutside(diversity);

diversity.modules = {
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

diversity.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
];


