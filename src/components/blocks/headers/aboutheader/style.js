
import React from 'react';

export default () => (
    <style jsx="true">{`
    .genericheader {
        background-color: black;
        position: relative;
    }
    .about-header-background {
        background-size: cover;
        position: relative;
        z-index: 1;
    }
    .wrapper-overlay div {
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
    .genericheader #genericheader .middle-header-cert {
        padding-bottom: 71px;
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
    .about-header-background .chapters {
        padding-top: 10%!important;
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
    }.genericheader #genericheader .middle-header-cert .chapters h2 {
        text-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
        font-size: 45px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.82;
        letter-spacing: normal;
        color: #ffffff;
        margin-bottom: 0;
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
        padding-right: 99px;
    }
    .about-header-background .chapters p {
        padding-right: 30px!important;
    }
    .genericheader #genericheader .middle-header-cert .chapters button {
        margin: 5% 4% 0 0!important;
    }
    .about-header-background .chapters p span {
      color: #bfcd31;
    }
    .about-header-background .chapters p span:first-child {
        font-weight: 600;
        color: #fff;
        font-style: normal;
    }
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
    .about-quill .quill{
        position:relative;
    }
    .about-quill .ql-toolbar.ql-snow {
        display: flex;
        position: absolute;
        top: -50px;
    }
    .about-quill .ql-toolbar.ql-snow .ql-formats {
        display: flex;
    }
    .about-quill .ql-snow.ql-toolbar button, .chapter-quill .ql-snow .ql-toolbar button {
        min-width:0 !important;
    }
    .about-quill .ql-toolbar.ql-snow .ql-formats {
        margin-right: 0;
    }
    .about-quill .ql-editor {
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
    .about-quill .ql-container {
        font-family: unset;
    }
    .about-quill .ql-container.ql-snow {
        border: none!important;
    }
    `}</style>
);
