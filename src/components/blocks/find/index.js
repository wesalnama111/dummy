/**
 * Created by FaZi on 1/29/2019.
 */
import React, { Component } from 'react';
import Style from './style';
import Scrollchor from 'react-scrollchor';

class graphSecton extends Component{
    render(){
        return(
            <div>
                <section id="graph-section">
                    <div className="container">
                        <div className="s4-bottom-img d-flex align-items-center justify-content-center">

                            <div className="row">
                                <button className="btn btn-medium btn-green montserrat fw-n mr-3 pl-5 pr-5">FIND AN SCTE•ISBE CHAPTER</button>
                            </div>
                        </div>
                    </div>
                    <div className="mapi-down">
                    <Scrollchor to="#fullsection"><img src="static/images/greyarrowdown.png"/></Scrollchor>
                        {/* <a href="#fullsection"> <img src="static/images/greyarrowdown.png"/></a> */}
                    </div>
                </section>
                <Style/>
            </div>
        );
    }
}
export default graphSecton;