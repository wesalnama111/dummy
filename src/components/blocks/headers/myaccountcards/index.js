import React,{Component} from "react"
import Style from "./style"
class AccountCards extends Component{
    render(){
        return(
            <div>
                {
                    this.state.data !== null &&
                    <section id="card-section">
                        <div className="container" id="scrollweb">
                            <div className="row">
                                <div className="col-sm-2 p-0">
                                    <div className="card-wrapper sky-blue">
                                        <div className="img-wrp  d-flex justify-content-center">
                                            <div>
                                                <img src={require ("../../../../assets/images/setting.png")}/>
                                            </div>
                                        </div>
                                        <div className="txt-wrp">

                                            <h1 className="pr-14 montserrat">SETTINGS</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-2 p-0">
                                    <div className="card-wrapper btn-org">
                                        <div className="img-wrp  d-flex justify-content-center">
                                            <div>

                                                {/* <span className="icon-group-14"></span> */}
                                                <img src="./assets/images/purchase.png"/>

                                            </div>
                                        </div>
                                        <div className="txt-wrp">

                                            <h1 className="pr-14 montserrat">PURCHASES</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-2 p-0">
                                    <div className="card-wrapper btn-gren">
                                        <div className="img-wrp  d-flex justify-content-center">
                                            <div>

                                                {/* <span className="icon-group-13"></span> */}
                                                <img src={require("../../../../assets/images/download.png")}/>
                                            </div>
                                        </div>
                                        <div className="txt-wrp">

                                            <h1 className="pr-14 montserrat">DOWNLOADS</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-2 p-0">
                                    <div className="card-wrapper btn-drk">
                                        <div className="img-wrp  d-flex justify-content-center">
                                            <div>
                                                {/* <span className="icon-icon-1"></span> */}
                                                <img src={require("../../../../assets/images/alrt.png")}/>
                                            </div>
                                        </div>
                                        <div className="txt-wrp">

                                            <h1 className="pr-14 montserrat">EVENTS</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-2 p-0">
                                    <div className="card-wrapper btn-org-drk">
                                        <div className="number">
                                            <span className="clr-org montserrat pr-14 fw-900">5</span>
                                        </div>
                                        <div className="img-wrp  d-flex justify-content-center">
                                            <div>
                                                <img src={require("../../../../assets/images/news.png")}/>
                                            </div>
                                        </div>
                                        <div className="txt-wrp">

                                            <h1 className="pr-14 montserrat">NEWS</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-2 p-0">
                                    <div className="card-wrapper btn-blue-drk">
                                        <div className="number">
                                            <span className="clr-b  montserrat pr-14 fw-900">2</span>
                                        </div>
                                        <div className="img-wrp  d-flex justify-content-center">
                                            <div>

                                                {/* <span className="icon-group-2"></span> */}
                                                <img src={require("../../../../assets/images/benefit.png")}/>
                                            </div>
                                        </div>
                                        <div className="txt-wrp">

                                            <h1 className="pr-14 montserrat">BENEFITS</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-2 p-0">
                                    <div className="card-wrapper btn-blue-drk">
                                        <div className="number  montserrat pr-14 fw-900">
                                            <span className="clr-bd">1</span>
                                        </div>
                                        <div className="img-wrp  d-flex justify-content-center">
                                            <div>
                                                <img src={require("../../../../assets/images/trns.png")}/>
                                            </div>
                                        </div>
                                        <div className="txt-wrp">

                                            <h1 className="pr-14 montserrat">TRANSCRIPT</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-2 p-0">

                                    <div className="card-wrapper btn-org-drk" >
                                        <div className="img-wrp  d-flex justify-content-center">
                                            <div>

                                                {/* <span className="icon-group-16"></span> */}
                                                <img src={require("../../../../assets/images/dashboard.png")}/>
                                            </div>
                                        </div>
                                        <div className="txt-wrp">

                                            <h1 className="pr-14 montserrat"> DASHBOARD</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-2 p-0">
                                    <div className="card-wrapper btn-drk">
                                        <div className="number">
                                            <span className="clr-dg  montserrat pr-14 fw-900">3</span>
                                        </div>
                                        <div className="img-wrp d-flex justify-content-center">
                                            <div className="learning">

                                                {/* <span className="icon-group-24"></span> */}
                                                <img src={require("../../../../assets/images/learning.png")}/>

                                            </div>
                                        </div>
                                        <div className="txt-wrp">
                                            <h1 className="pr-14 montserrat">LEARNING</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-2 p-0">
                                    <div className="card-wrapper btn-gren">
                                        <div className="img-wrp  d-flex justify-content-center">
                                            <div>
                                                <img src={require("../../../assets/images/chpter.png")}/>

                                            </div>
                                        </div>
                                        <div className="txt-wrp">

                                            <h1 className="pr-14 montserrat">CHAPTER</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-2 p-0">
                                    <div className="card-wrapper btn-org">
                                        <div className="img-wrp  d-flex justify-content-center">
                                            <div>

                                                {/* <span className="icon-fill-30"></span> */}
                                                <img src={require("../../../../assets/images/com.png")}/>
                                            </div>
                                        </div>
                                        <div className="txt-wrp">

                                            <h1 className="pr-14 montserrat">COMPANY</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-2 p-0">
                                    <div className="card-wrapper sky-blue">
                                        <div className="img-wrp  d-flex justify-content-center">
                                            <div>

                                                {/* <span className="icon-fill-29"></span> */}
                                                <img src={require("../../../../assets/images/sup.png")}/>
                                            </div>
                                        </div>
                                        <div className="txt-wrp">

                                            <h1 className="pr-14 montserrat">SUPPORT</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Style/>
                    </section>
                }
            </div>

        )
    }
}

export default AccountCards;