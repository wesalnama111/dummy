import React, {Component} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

class app extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data:"wesal"

        }
    }
    render(){
        const x="wesal";
        return(
            <div className="okfor this">
                <p>{this.state.data}</p>
                <CKEditor
                    editor={ InlineEditor }
                    data="<p>Hello this is editor is working!</p>"
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        // console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        // console.log( { event, editor, data } );
                    } }
                    onBlur={ editor => {
                        // console.log( 'Blur.', editor );
                    } }
                    onFocus={ editor => {
                        // console.log( 'Focus.', editor );
                    } }
                />
            </div>

        )
    }
}
export default app;