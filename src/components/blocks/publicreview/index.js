import React,{ Component } from 'react';
import Style from './style';
import onClickOutside from "react-onclickoutside";

class publicReview extends Component{
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
                    <section id="public-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    {
                                        this.state.data !== null &&
                                        <div className="employment-content">
                                            {
                                                this.state.titlechange === false ? <h5 dangerouslySetInnerHTML={{__html: this.state.data.data.title}} onClick={ () => this.switchCk('title')} />:
                                                    <ReactQuill value={"<h5>" +this.state.data.data.title+ "</h5>"}
                                                                onChange={(data)=> this.changingContent( data, this.state.data.uuid,'title' )}
                                                                modules={publicReview.modules}
                                                                formats={publicReview.formats}

                                                    />
                                            }


                                            <div className="list-content d-flex justify-content-between">
                                                <ul>
                                                    <li className="row"><span className="col-sm-3">SCTE•ISBE 7 2018</span><p className="col-sm-9">Digital Transmission Standard For Cable Television (Public Review closes 12/10/2018)</p></li>
                                                    <li className="row"><span className="col-sm-3">SCTE•ISBE 29 2018</span><p className="col-sm-9">Serge Rochette, Rogers Communications </p></li>
                                                    <li className="row"><span className="col-sm-3">SCTE•ISBE 48-3 2018 </span><p className="col-sm-9">Test Procedure for Measuring Shielding Effectiveness of Coaxial Cable and Connectors Using the GTEM Cell
                                                        (Public Review closes 12/10/2018)</p></li>
                                                    <li className="row"><span className="col-sm-3">SCTE•ISBE 104 2018</span><p className="col-sm-9">Automation System to Compression System Communications Applications Program Interface (API)
                                                        (Public Review closes 12/10/2018)</p></li>
                                                    <li className="row"><span className="col-sm-3">SCTE•ISBE 194-1 2018</span><p className="col-sm-9">DTS-HD AUDIO SYSTEM - Part 1: Coding Constraints for Cable Television (Public Review closes 12/10/2018)</p></li>
                                                    <li className="row"><span className="col-sm-3">SCTE•ISBE 194-2 2018 </span><p className="col-sm-9">DTS-HD AUDIO SYSTEM - Part 2: Constraints for Carriage over MPEG-2 Transport (Public Review closes
                                                        12/10/2018)</p></li>
                                                    <li className="row"><span className="col-sm-3">SCTE•ISBE 251 2018 </span><p className="col-sm-9">Test Procedure for Determining the Thermal Oxidative Stability of Foamed Polyethylene (public review closes
                                                        12/31/2018)</p></li>
                                                    <li className="row"><span className="col-sm-3">SCTE•ISBE 242-4 2018</span><p className="col-sm-9">Next Generation Audio Coding Constraints for Cable Systems: Part 4 - DTS-UHD Audio Coding Constraints
                                                        (public review closes 12/31/2018)</p></li>
                                                    <li className="row"><span className="col-sm-3">SCTE•ISBE 243-4 2018 </span><p className="col-sm-9">Next Generation Audio Carriage for Cable Systems: Part 4 - DTS-UHD Audio Carriage Constraints
                                                        (public review closes 12/31/2018)</p></li>
                                                </ul>

                                            </div><br/>

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
export default onClickOutside(publicReview);

publicReview.modules = {
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

publicReview.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
];
