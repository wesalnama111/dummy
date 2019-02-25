import React,{ Component } from 'react';
import Style from './style';
class cardSection extends Component{
    render(){
      let { CKEditor, InlineEditor } = this.props;
        return(
            <div>
                <section id="equally-divided" className="video-overview mb-0 ">
                    <div className="container-fluid">
                        <div className="row polics-wrapper">
                            <div className="col-sm-6 p-0 polics-rol">
                                <div className="polices-image ex-polices">
                                    <div className="col standard-video d-flex flex-column justify-content-between">
                                        <div className="heading d-flex justify-content-between cardcathead">
                                            <h4 className="montserrat normal-text-prop fw-n mt-4">Download&nbsp;SCTE•ISBE<br/>Standards</h4>
                                            <div className="link-area">
                                                <button className="btn btn-medium btn-orange-lighter mt-5 pl-5 pr-5 montserrat normal-text-prop fw-n pr-16">SEE ALL STANDARDS</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 p-0 ">
                                <div className="polices-content d-flex align-items-start justify-content-center flex-column ">
                                    <div className="data d-flex justify-content-between">
                                        <h4 className="montserrat normal-text-prop fw-n pb-0"> Data <br/> Communications </h4>
                                        <div>
                                            <img src={require("../../../assets/images/wifi.png")}/>
                                        </div>
                                    </div>
                                    <p className="montserrat normal-text-prop fw-n pr-18 pt-3 pb-3 mb-0">A long list of current and developing standards <br/>
                                        related to the transmission and monitoring of
                                        data<br/> communications over broadband networks.  </p>
                                    <button className="btn btn-medium xblue mt-2 pl-5 pr-5 montserrat normal-text-prop fw-n pr-16 mr-3">EXPAND</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="equally-divided" className="video-overview mb-0 ">
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-sm-6 p-0 ">
                                <div className="polices-content digital-video d-flex align-items-start justify-content-center flex-column  ">
                                    <div className="data d-flex justify-content-between">
                                        <h4 className="montserrat normal-text-prop fw-n pb-0"> Digital Video</h4>
                                        <div>
                                            <img src={require("../../../assets/images/videocard.svg")}/>
                                        </div>

                                    </div>
                                    <div className="stg-wrp">
                                        <p className="montserrat normal-text-prop fw-n pr-18 pt-3 pb-3 mb-0">A complete set of standards for digital
                                            video<br/> transmission on cable networks, including <br/>
                                                the definitive industry standards for<br/> advertisement insertion.   </p>
                                        <div className="digital-btns">
                                            <button className="btn btn-medium btn-grey mt-2 pl-5 pr-5 montserrat normal-text-prop fw-n pr-16 mr-3">EXPAND</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 p-0 ">
                                <div className="polices-content energy-managment d-flex align-items-start justify-content-center flex-column ">
                                    <div className="data d-flex justify-content-between">
                                        <h4 className="montserrat normal-text-prop fw-n pb-0"> Energy <br/> Management </h4>
                                        <div>
                                            <img src={require("../../../assets/images/key.svg")}/>
                                        </div>
                                    </div>
                                    <p className="montserrat normal-text-prop fw-n pr-18 pt-3 pb-3 mb-0">Recommended practices to improve the
                                        application of<br/> sustainable  procedures and products, to create solutions <br/>that lower overall
                                            costs and increase overall performance.  </p>
                                    <div className="digital-btns">
                                        <button className="btn btn-medium btn-green1 mt-2 pl-5 pr-5 montserrat normal-text-prop fw-n pr-16 mr-3">EXPAND</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="equally-divided" className="video-overview mb-0 ">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6 p-0 ">
                                <div className="polices-content cabling d-flex align-items-start justify-content-center flex-column ">
                                    <div className="data d-flex justify-content-between">
                                        <h4 className="montserrat normal-text-prop fw-n pb-0"> Equipment <br/> &amp; Cabling </h4>
                                        <div>
                                            <img src={require("../../../assets/images/equipment.svg")}/>
                                        </div>
                                    </div>
                                    <p className="montserrat normal-text-prop fw-n pr-18 pt-4 pb-4 mb-0">
                                        With the billions of components found across miles of<br/> broadband
                                        networks, it is important to ensure that all <br/>the pieces work together.   </p>
                                    <button className="btn btn-medium btn-orange1 mt-2 pl-5 pr-5 montserrat normal-text-prop fw-n pr-16">EXPAND</button>
                                </div>
                            </div>

                            <div className="col-sm-6 p-0 ">
                                <div className="polices-content network-operator d-flex align-items-start justify-content-center flex-column ">
                                    <div className="data d-flex justify-content-between">
                                        <h4 className="montserrat normal-text-prop fw-n pb-0"> Network  <br/> Operations </h4>
                                        <div>
                                            <img src={require("../../../assets/images/network.svg")}/>
                                        </div>
                                    </div>
                                    <p className="montserrat normal-text-prop fw-n pr-18 pt-4 pb-4 mb-0">Standards and practices to
                                        monitor network <br/>transmission, prevent network failure, and quickly <br/>
                                            detect and correct points of failure.  </p>
                                    <div className="digital-btns">
                                        <button className="btn btn-medium btn-navy mt-2 pl-5 pr-5 montserrat normal-text-prop fw-n pr-16 mr-3">EXPAND</button>
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
export default cardSection;