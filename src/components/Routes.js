import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Pages from "./pages";
import PreviewTemplate from "./previewtemplate/index";
import  {ScteProvider} from '../store/Context';


class Routes extends Component{

    render(){
        return(
        <ScteProvider>
            <div className="main-container">
                <div className="">

                </div>
                <div className="main-routes">
                    <Switch>
                        <Route exact path={"/"} component={Pages}/>
                        <Route exact path={"/template"} component={PreviewTemplate}/>
                    </Switch>
                </div>
            </div>
        </ScteProvider>
        )
    }
}
export default Routes;
