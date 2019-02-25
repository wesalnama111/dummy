/**
 * Created by FaZi on 1/29/2019.
 */
import React from 'react';
export default () => (
    <style jsx="true">{`

        .corporate-section .wrapper-overlay div {
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
    .corporate-section {
        // background: url(static/images/corporate.jpg)no-repeat center;
        min-height: 649px;
        background-size: cover;
    }
    .genericheader {
        background-color: black;
        position: relative;
    }
    .genericheader #genericheader {
        padding: 10px;
        position: relative;
        z-index: 1;
    }
    .svg-img1 {
        margin-top: 28%!important;
        margin-left: 10%;
    }
    .svg-img1 span {
        font-size: 120px;
    }
    .genericheader #genericheader .middle-header-cert .chapters {
        padding: 14% 0 0 5%;
    }
    .corporate-section .corporate-container {
        padding-top: 12%!important;
    }
    .genericheader #genericheader .middle-header-cert .chapters h1 {
        text-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
        font-size: 45px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.82;
        letter-spacing: normal;
        color: #ffffff;
        padding-bottom:3px;
    }
    .corporate-section .corporate-head {
        line-height: normal!important;
    }
    .genericheader #genericheader .middle-header-cert .chapters p {
        text-shadow: 0 0 16px #000000;
        font-size: 19px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.7;
        letter-spacing: 0.2px;
        color: #ffffff;
        padding-right: 18px;
    }
    // .genericheader #genericheader .middle-header-cert .chapters button {
        // margin-right: 76px!important;
    // }
    .genericheader #genericheader .middle-header-cert .chapters button {
        text-align: center;
        float: right;
        margin: 3% 17% 0 0;
    }
     #arrow-section {
     padding: 27px 0px;
    }
    #arrow-section .arrow-container {
        display: flex;
        justify-content: center;
    }
    .corporate-quill .quill{
        position:relative;
    }
    .corporate-quill .ql-toolbar.ql-snow {
        display: flex;
        position: absolute;
        top: -50px;
    }
    .corporate-quill .ql-toolbar.ql-snow .ql-formats {
        display: flex;
    }
    .corporate-quill .ql-snow.ql-toolbar button, .chapter-quill .ql-snow .ql-toolbar button {
        min-width:0 !important;
        margin-right: 0!important;
    }
    .corporate-quill .ql-toolbar.ql-snow .ql-formats {
        margin-right: 0;
    }
    .corporate-quill .ql-editor {
        box-sizing: unset !important;
        line-height: unset!important;
        height: unset!important;
        outline:auto!important;
        outline-color: white!important;
        overflow-y: auto!important;
        padding: 0px 30px 8px 0!important;
        tab-size: unset!important;
        -moz-tab-size: unset!important;
        text-align: unset!important;
        white-space: unset!important;
        word-wrap: break-word!important;
    
    }
    .corporate-quill .ql-container {
        font-family: unset;
    }
    .corporate-quill .ql-container.ql-snow {
        border: none!important;
    }
    `}</style>
);