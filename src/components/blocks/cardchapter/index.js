import React, { Component } from 'react';
import Style from './style';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import CKEditor from '@ckeditor/ckeditor5-react';
class card extends Component{
    render(){
        return(
            <div>
                <section id="chapter-card-section">
                    <div className="container" id="topics">
                        <div className="row">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-2 p-0">
                                <div className="card-wrapper sky-blue">
                                    <div className="img-wrp">
                                        <div>
                                            <img src="static/images/gl.png"/>
                                        </div>
                                    </div>
                                    <div className="txt-wrp">

                                        <CKEditor
                                            editor={ InlineEditor }
                                            data="<h1>CHAPTER <br/>EVENTS</h1>"
                                            onChange={ ( event, editor ) => {
                                                const data = editor.getData();

                                            } }

                                        />

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2 p-0">
                                <div className="card-wrapper btn-org">
                                    <div className="number d-flex align-items-center justify-content-center">
                                        <span className="clr-o">2</span>
                                    </div>
                                    <div className="img-wrp">
                                        <div>
                                            <span className="icon-group-6-2"></span>
                                        </div>
                                    </div>
                                    <div className="txt-wrp">
                                        <CKEditor
                                            editor={ InlineEditor }
                                            data="<h1>CHAPTER<br/> WEBINARS</h1>"
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

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2 p-0">
                                <div className="card-wrapper btn-gren">
                                    <div className="img-wrp">
                                        <div>
                                            <span className="icon-group-20"></span>
                                        </div>
                                    </div>
                                    <div className="txt-wrp">
                                        <CKEditor
                                            editor={ InlineEditor }
                                            data="  <h1>CERTIFICATION <br/>TESTING</h1>"
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

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2 p-0">
                                <div className="card-wrapper btn-drk">
                                    <div className="img-wrp">
                                        <div>
                                            <span className="icon-group-img white"></span>
                                        </div>
                                    </div>
                                    <div className="txt-wrp">
                                        <CKEditor
                                            editor={ InlineEditor }
                                            data="<h1>CHAPTER <br/>AWARDS</h1>"
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


                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2 p-0">
                                <div className="card-wrapper btn-org-drk">

                                    <div className="img-wrp">
                                        <div>
                                            <span className="icon-fill-40"></span>
                                        </div>
                                    </div>
                                    <div className="txt-wrp">
                                        <CKEditor
                                            editor={ InlineEditor }
                                            data="<h1>CHAPTER OFFICER<br/>RESOURCES</h1>"
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


                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-1"></div>
                        </div>
                    </div>
                </section>
                <Style/>
            </div>
        );
    }
}
export default card;