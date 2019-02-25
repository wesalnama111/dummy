import React,{ Component } from 'react';
export default () => (
    <style jsx="true">{`
    #memebership-center-back {
        // background: url(/static/images/mem.jpg);
        background-size: cover;
        position: relative;
        z-index: 1;
    }
    .genericheader {
        background-color: black;
        position: relative;
    }
    .wrapper-overlay div {
        // background-image: url(/static/images/overly.png);
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
    center-back .svg-img {
        padding-top: 88px!important;
    }
    .svg-img {
        margin-top: 50%!important;
        margin-left: 10%;
    }
    .svg-img span {
        font-size: 120px;
    }
    .genericheader #genericheader .middle-header-cert .chapters {
        padding: 14% 0 0 5%;
    }
    #memebership-center-back .chapters {
        padding-top: 88px!important;
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
    #memebership-center-back .chapters .d-flex button {
        margin-right: 5px!important;
        padding: 14px 13px!important;
    }
    #arrow-section {
        padding: 27px 0px;
    }
    .membershipheader-quill .quill{
        position:relative;
    }
    .membershipheader-quill .ql-toolbar.ql-snow {
        position: absolute;
        top: -50px;
    }
    .membershipheader-quill .ql-editor {
        box-sizing: unset !important;
        line-height: unset!important;
        height: unset!important;
        outline:auto!important;
        outline-color: white!important;
        overflow-y: auto!important;
        padding: 0 80px 8px 0 !important;
        tab-size: unset!important;
        -moz-tab-size: unset!important;
        text-align: unset!important;
        white-space: unset!important;
        word-wrap: break-word!important;
    }
    .membershipheader-quill .ql-container {
        font-family: unset;
    }
    .membershipheader-quill .ql-container.ql-snow {
        border: none!important;
    }
    `}</style>
);