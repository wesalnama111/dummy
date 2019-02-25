import React, { Component } from "react";
import { DragSource, DropTarget } from "react-dnd";
import { findDOMNode } from 'react-dom';
import $ from "jquery";
import Placeholder from "./placeholder";
import ReactQuill from 'react-quill';

// Headers
import ChapterHeader from "../../blocks/headers/chapterheader";
import AboutHeader from "../../blocks/headers/aboutheader";
import ResourceHeader from "../../blocks/headers/resourceheader";
import Categoriesheader from "../../blocks/headers/categoriesheader";
import Certificationheader from "../../blocks/headers/certificationheader";
import Corporateheader from "../../blocks/headers/corporateheader";
import Developmentheader from "../../blocks/headers/developmentheader";
import Eventheader from "../../blocks/headers/eventheader";
import Membershipheader from "../../blocks/headers/membershipheader";
// Other blocks
import Block2 from "../../blocks/block2";
import Diversity from "../../blocks/diversity";
import StandardsEducation from "../../blocks/standardseducation";
import ChapterHappening from "../../blocks/chapterhappening";
import ScteVision from "../../blocks/sctevision";
import LiveLearning from "../../blocks/livelearning";
import KnowledgeBase from "../../blocks/knowledgebase";
import ResourceTrainer from "../../blocks/resourcetrainer";
import ScteBook from "../../blocks/sctebookstore";
import CompanySponsored from "../../blocks/companysponsored";
import Vender from "../../blocks/vendor";
import Cardcategories from "../../blocks/cardcategories";
import Standardprogram from "../../blocks/standardprogram";
import Projectrejister from "../../blocks/projectrejister";
import Publicreview from "../../blocks/publicreview";
import Viewarchive from "../../blocks/viewarchive";
import Workforce from "../../blocks/workforce";
import Partnership from "../../blocks/partnership";
import Engineersection from "../../blocks/engineersection";
import Positionsection from "../../blocks/positionsection";
import Downloadscteapproved from "../../blocks/downloadapproved";
import Standardstand from "../../blocks/standardstand";
import Digitalbasics from "../../blocks/digitalbasics";
import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import CKEditor from '@ckeditor/ckeditor5-react';


class RenderBlocks extends Component{

    renderBlock(){
        let { single } = this.props;
        switch(single.name){
            case "chapterheader":
                return <ChapterHeader array={this.props.array} dispatch={this.props.dispatch} data={single} ReactQuill={ReactQuill}/>;
            case "Diversity":
                return <Diversity array={this.props.array} dispatch={this.props.dispatch} data={single}  ReactQuill={ReactQuill}/>;
            case "Block2":
                return <Block2 array={this.props.array} dispatch={this.props.dispatch} data={single}  ReactQuill={ReactQuill}/>;
            case "standards_education":
                return <StandardsEducation array={this.props.array} dispatch={this.props.dispatch} data={single}  ReactQuill={ReactQuill}/>;
            case "vendor":
                return <Vender array={this.props.array} dispatch={this.props.dispatch} data={single}  ReactQuill={ReactQuill}/>;
            case "chapterhappening":
                return <ChapterHappening array={this.props.array} dispatch={this.props.dispatch} data={single}  ReactQuill={ReactQuill}/>;
            case "aboutheader":
                return <AboutHeader array={this.props.array} dispatch={this.props.dispatch} data={single}  ReactQuill={ReactQuill}/>;
            case "resourceheader":
              return <ResourceHeader array={this.props.array} dispatch={this.props.dispatch} data={single}  ReactQuill={ReactQuill}/>;
            case "categoriesheader":
                return <Categoriesheader array={this.props.array} dispatch={this.props.dispatch} data={single}  ReactQuill={ReactQuill}/>;
            case "certificationheader":
                return <Certificationheader array={this.props.array} dispatch={this.props.dispatch} data={single}  ReactQuill={ReactQuill}/>;
            case "corporateheader":
                return <Corporateheader array={this.props.array} dispatch={this.props.dispatch} data={single}  ReactQuill={ReactQuill}/>;
            case "developmentheader":
                return <Developmentheader array={this.props.array} dispatch={this.props.dispatch} data={single}  ReactQuill={ReactQuill}/>;
            case "eventheader":
                return <Eventheader array={this.props.array} dispatch={this.props.dispatch} data={single}  ReactQuill={ReactQuill}/>;
            case "membershipheader":
                return <Membershipheader array={this.props.array} dispatch={this.props.dispatch} data={single}  ReactQuill={ReactQuill}/>;
            case "sctevision":
                return <ScteVision array={this.props.array} dispatch={this.props.dispatch} data={single}  ReactQuill={ReactQuill}/>;
            case "livelearning":
                return <LiveLearning array={this.props.array} dispatch={this.props.dispatch} data={single}  ReactQuill={ReactQuill}/>;
            case "knowledgebase":
                return <KnowledgeBase array={this.props.array} dispatch={this.props.dispatch} data={single}  ReactQuill={ReactQuill}/>;
            case "resourcetrainer":
                return <ResourceTrainer array={this.props.array} dispatch={this.props.dispatch} data={single}  ReactQuill={ReactQuill}/>;
            case "sctebookstore":
                return <ScteBook array={this.props.array} dispatch={this.props.dispatch} data={single}  ReactQuill={ReactQuill}/>;
            case "companysponsored":
                return <CompanySponsored array={this.props.array} dispatch={this.props.dispatch} data={single}  ReactQuill={ReactQuill}/>;
            case "cardcategories":
                return <Cardcategories array={this.props.array} dispatch={this.props.dispatch} data={single}  ReactQuill={ReactQuill}/>;
            case "standardprogram":
                return <Standardprogram array={this.props.array} dispatch={this.props.dispatch} data={single}  ReactQuill={ReactQuill}/>;
            case "projectrejister":
                return <Projectrejister array={this.props.array} dispatch={this.props.dispatch} data={single}  ReactQuill={ReactQuill}/>;
            case "publicreview":
                return <Publicreview array={this.props.array} dispatch={this.props.dispatch} data={single}  ReactQuill={ReactQuill}/>;
            case "viewarchive":
                return <Viewarchive array={this.props.array} dispatch={this.props.dispatch} data={single}  ReactQuill={ReactQuill}/>;
            case "workforce":
                return <Workforce array={this.props.array} dispatch={this.props.dispatch} data={single}  ReactQuill={ReactQuill}/>;
            case "partnership":
                return <Partnership array={this.props.array} dispatch={this.props.dispatch} data={single} ReactQuill={ReactQuill}/>;
            case "engineersection":
                return <Engineersection array={this.props.array} dispatch={this.props.dispatch} data={single}  ReactQuill={ReactQuill}/>;
            case "positionsection":
                return <Positionsection array={this.props.array} dispatch={this.props.dispatch} data={single} ReactQuill={ReactQuill}/>;
            case "downloadscteapproved":
                return <Downloadscteapproved array={this.props.array} dispatch={this.props.dispatch} data={single} ReactQuill={ReactQuill}/>;
            case "standardstand":
                return <Standardstand array={this.props.array} dispatch={this.props.dispatch} data={single} ReactQuill={ReactQuill}/>;
            case "digitalbasics":
                return <Digitalbasics array={this.props.array} dispatch={this.props.dispatch} data={single}  ReactQuill={ReactQuill}/>;
            case "placeholder":
                return <Placeholder/>;
            default:
                return;
        }
    }

    render(){
        let { connectDragSource, connectDropTarget, connectDragPreview, isDragging } = this.props;
        return connectDropTarget(connectDragPreview(
            <div className="single-block">
                <div className="upper-area"/>
                <div className="drabbing-icon">
                    {connectDragSource(<i className={"fas fa-arrows-alt "+ (!isDragging ? "grab" : "grabbing")}/>)}
                </div>
                {
                    this.renderBlock()
                }
                <div className="bottom-area"/>
            </div>
        ))
    }

}

const dropTarget = {
    drop(props, monitor, component) {
        const dragIndex = monitor.getItem().data.uuid;
        const hoverIndex = props.single.uuid;
        const dom = findDOMNode(component);
        const clientOffset = monitor.getClientOffset();
        const hoverBoundingRect = dom.getBoundingClientRect();
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        const allbottom = $(".bottom-area");
        const allupper = $(".upper-area");
        allupper.css({backgroundColor: ''});
        allbottom.css({backgroundColor: ''});
        if (dragIndex === hoverIndex)return;
        if(monitor.getItem().type === "existing"){
            if (hoverClientY < hoverMiddleY) {
                props.setOrder(dragIndex, hoverIndex, "before");
            }else{
                props.setOrder(dragIndex, hoverIndex, "after");
            }
        }
        else{
            props.setBlockOnPlaceholder();
        }
    },
    hover(props, monitor, component){
        const dragIndex = monitor.getItem().data.uuid;
        const hoverIndex = props.single.uuid;
        const dom = findDOMNode(component);
        const clientOffset = monitor.getClientOffset();
        const hoverBoundingRect = dom.getBoundingClientRect();
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        const upper = $(dom).find(".upper-area");
        const allupper = $(".upper-area");
        const bottom = $(dom).find(".bottom-area");
        const allbottom = $(".bottom-area");
        if (dragIndex === hoverIndex)return;
        if(monitor.getItem().type === "existing"){
            if(hoverClientY < hoverMiddleY) {
                allupper.css({backgroundColor: ''});
                allbottom.css({backgroundColor: ''});
                upper.css({backgroundColor: 'cyan'});
            }else{
                allupper.css({backgroundColor: ''});
                allbottom.css({backgroundColor: ''});
                bottom.css({backgroundColor: 'cyan'});
            }
        }
        else{
            if(props.single.type !== "placeholder"){
                $(".placeholder-block").css({border: "1px dashed lightgrey"});
                if(hoverClientY < hoverMiddleY) {
                    props.setTemp(hoverIndex, "before");
                }else{
                    props.setTemp(hoverIndex, "after");
                }
            }
            else{
                $(dom).find(".placeholder-block").css({border: "1px dashed #F17B29"});
            }
        }
    }
};

function collectTarget(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

const cardSource = {
    beginDrag(props) {
        return {
            data: props.single,
            type: "existing"
        };
    },
    endDrag(props){
        return{
            single: props.single
        }
    }
};

function collectSource(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
        connectDragPreview: connect.dragPreview()
    };
}



export default DragSource("same", cardSource, collectSource)(DropTarget("same", dropTarget, collectTarget)(RenderBlocks));