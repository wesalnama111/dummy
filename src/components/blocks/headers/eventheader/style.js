import React from 'react';
export default () => (
    <style jsx="true">{`
     .genericheader {
        background-color: black;
        position: relative;
    }
    .chapter-section {
        // background: url(./static/images/events.jpg)no-repeat center;
        min-height: 649px;
        background-size: cover;
    }
    .chapter-section .wrapper-overlay div {
        z-index: 1;
    }
    .wrapper-overlay div {
        background-image: url(./static/images/overly.png);
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
    .chapter-section .middle-header-cert .events-image {
        margin-top: -40%!important;
    }
    .chapter-section .middle-header-cert .events-image span {
        font-size: 98px;
        margin-left: 10%;
    }
    .genericheader #genericheader .middle-header-cert .chapters {
        padding: 14% 0 0 5%;
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
        padding:0px;
        margin-bottom:5px;
    }
    .genericheader #genericheader .middle-header-cert .chapters button {
        text-align: center;
        float: right;
    }
    .chapter-section .chapter-buttons .btn-grey-light {
        background-color: #90989c!important;
    }
    .container-s{
      margin-top:65px;
    }
    #arrow-section {
         padding: 27px 0px;
    }
    #arrow-section .arrow-container {
            display: flex;
            justify-content: center;
    }
    .event-quill .quill{
        position:relative;
    }
    .event-quill .ql-toolbar.ql-snow {
        position: absolute;
        top: -68px;
    }
    .event-quill .ql-editor {
        box-sizing: unset !important;
        line-height: unset!important;
        height: unset!important;
        outline:auto!important;
        outline-color: white!important;
        overflow-y: auto!important;
        padding: 0 0 8px 0!important;
        tab-size: unset!important;
        -moz-tab-size: unset!important;
        text-align: unset!important;
        white-space: unset!important;
        word-wrap: break-word!important;
    }
    .event-quill .ql-container {
        font-family: unset;
    }
    .event-quill .ql-container.ql-snow {
        border: none!important;
    }
    `}</style>
);