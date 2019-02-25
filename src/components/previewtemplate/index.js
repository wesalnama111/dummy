import React, {Component} from 'react';
import Style from './style';
class Preview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            get:null
        }
    }
    componentDidMount(){
            if (typeof(Storage) !== "undefined") {
                let data= localStorage.getItem("templateOne").replace(/contenteditable="true"/g,'');
                this.setState({get: data});
                // console.log(data)
                // this.setState({get: data});
            } else {
                document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
            }
    }
    render() {
        return (
            <div>
            {
            this.state.get !== null ?
            <div dangerouslySetInnerHTML={{__html:this.state.get}}/>:<h1>no data</h1>
        }
                <Style/>
            </div>
        )
    }
}
export default Preview;