import React,{ Component } from 'react';
import Style from './style';
import Scrollchor from 'react-scrollchor';

class header extends Component{
    render(){
        return(
            <div>
                {
                    this.state.data !== null &&
                        <div>
                            <div className="genericheader" id="media-center-back">
                                <div className="wrapper-overlay"><div></div></div>
                                <div id="genericheader">
                                    <div className="opacitic-background1"></div>

                                    <div className="container-fluid">
                                        <div className="container middle-header-cert">
                                            <div className="row">
                                                <div className="col-5">
                                                    <div className="svg-img1">
                                                        <span className="icon-group-15"></span>
                                                    </div>
                                                </div>
                                                <div className="col-7 pl-0 chapters">

                                                    <CKEditor
                                                        editor={ InlineEditor }
                                                        data="<h1>Media Center</h1>"
                                                        onInit={ editor => {
                                                            // You can store the "editor" and use when it is needed.
                                                            // console.log( 'Editor is ready to use!', editor );
                                                        } }
                                                        onChange={ ( event, editor ) => {
                                                            const data = editor.getData();
                                                            // console.log("titlechange" ,{ event, editor, data } );
                                                        } }
                                                        onBlur={ editor => {
                                                            // console.log( 'Blur.', editor );
                                                        } }
                                                        onFocus={ editor => {
                                                            // console.log( 'Focus.', editor );
                                                        } }
                                                    />
                                                    <CKEditor
                                                        editor={ InlineEditor }
                                                        data="<p>
                                            This section is designed to give you immediate access to timely<br/> and relevant
                                            information about SCTE•ISBE, including current<br/> and archived SCTE•ISBE press
                                                releases. Subscribe now to get<br/> your updates!
                                        </p>"
                                                        onInit={ editor => {
                                                            // You can store the "editor" and use when it is needed.
                                                            // console.log( 'Editor is ready to use!', editor );
                                                        } }
                                                        onChange={ ( event, editor ) => {
                                                            const data = editor.getData();
                                                            // console.log("titlechange" ,{ event, editor, data } );
                                                        } }
                                                        onBlur={ editor => {
                                                            // console.log( 'Blur.', editor );
                                                        } }
                                                        onFocus={ editor => {
                                                            // console.log( 'Focus.', editor );
                                                        } }
                                                    />


                                                    <div className="d-flex flex-row">
                                                        <button className="btn btn-medium btn-blue montserrat normal-text-prop mr-4 fw-n pl-5 pr-5">subscribe for updates</button>
                                                        <button className="btn btn-medium btn-green montserrat normal-text-prop fw-n pl-5 pr-5">contact us</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section id="arrow-section">
                                <div className="container">
                                    <div className="arrow-container d-flex justify-content-center">
                                        {/* <a href="#equally-divided"><img src="static/images/down-arow.png"/></a> */}
                                        <Scrollchor to="#equally-divided"><img src="static/images/down-arow.png"/></Scrollchor>
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
export default header;