/**
 * Created by FaZi on 1/29/2019.
 */
import React from 'react';
export default () => (
    <style jsx="true">{`
    .genericheader {
        background-color: black;
        position: relative;
    }
    .categories-header {
        // background: url(static/images/shade.jpg)no-repeat center;
        min-height: 649px;
        background-size: cover;
    }
    .categories-header .wrapper-overlay div {
        z-index: 1;
    }
    .wrapper-overlay div {
        background-image: url(static/images/overly.png);
        position: absolute;
        right: 0px;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: -1;
    }
    .genericheader #genericheader {
        padding: 10px;
        position: relative;
        z-index: 1;
    }
    .category-content .image-section {
        background-repeat: no-repeat;
        height: 150px;
        width: 100%;
        margin-left: 20px;
        margin-top: 55%;
    }
    .category-content .standard-section {
        width: 100%;
        height: 200px;
        padding-bottom: 30px;
        margin-top:5%;
    }
    .category-content .standard-section h2 {
        text-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
        color: #fff;
    }
    .category-content .leadership-content p {
        line-height: 1.74;
        font-family: 'Montserrat', sans-serif!important;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        letter-spacing: 0.2px;
        color: #ffffff;
        font-size: 18px;
        font-weight: normal;
    }
     #arrow-section {
     padding: 27px 0px;
    }
    #arrow-section .arrow-container {
        display: flex;
        justify-content: center;
    }
    .categoriesheader-quill .quill{
        position:relative;
        width:100%;
    }
    .categoriesheader-quill .ql-toolbar.ql-snow {
        position: absolute;
        top: -42px;
    }
    .categoriesheader-quill .ql-editor {
        box-sizing: unset !important;
        line-height: unset!important;
        height: unset!important;
        outline:auto!important;
        outline-color: white!important;
        overflow-y: auto!important;
        padding: 0 0!important;
        tab-size: unset!important;
        -moz-tab-size: unset!important;
        text-align: unset!important;
        white-space: unset!important;
        word-wrap: break-word!important;
        margin-bottom: 0.5rem;
    }
    .categoriesheader-quill .ql-container {
        font-family: unset;
    }
    .categoriesheader-quill .ql-container.ql-snow {
        border: none!important;
    }
    .categoriesheader-quill .ql-snow .ql-editor h2 {
        font-size: 2rem; 
        overflow: hidden;
    }
    `}</style>
);