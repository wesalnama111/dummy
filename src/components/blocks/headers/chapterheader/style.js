/**
 * Created by FaZi on 1/29/2019.
 */
import React from "react";
export default () => (
    <style jsx="true">{`
    .chapterheader{
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    }
    .chapter-buttons{
      margin-top: 3rem!important;
    }
    #archive {
           min-height:600px;
           color: black;
           background-repeat: no-repeat;
           background-size: cover;
    }
    #archive #genericheader .middle-header-cert .col-7 button{
            width: 39%;
            margin: 0px 35px 0 0px;
            float: left;
    }
    #archive #genericheader .middle-header-cert .col-7 {
             padding: 14% 8px 0 0%;
    }
    .genericheader #genericheader .middle-header-cert .archive-btn button{
            min-width: 285px;
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
          .genericheader #genericheader .middle-header-cert {
           padding-bottom: 71px;
    }
    .genericheader #genericheader .middle-header-cert .chapters {
             padding: 14% 0 0 5%;
    }
    .svg-img {
           margin-top: 50%!important;
           margin-left: 10%;
    }
    .svg-img span {
           font-size: 120px;
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
        margin-bottom: 0;
    }
    .genericheader #genericheader .middle-header-cert .chapters h2 {
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
    #archive .wrapper-overlay div {
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
    .chapter-quill .quill{
        position:relative;
    }
    .chapter-quill .ql-toolbar.ql-snow {
        display: flex;
        position: absolute;
        top: -42px;
    }
    .chapter-quill .ql-toolbar.ql-snow .ql-formats {
        display: flex;
    }
    .chapter-quill .ql-snow.ql-toolbar button, .chapter-quill .ql-snow .ql-toolbar button {
        min-width:0 !important;
    }
    .chapter-quill .ql-toolbar.ql-snow .ql-formats {
        margin-right: 0;
    }
    .chapter-quill .ql-editor {
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
    }
    .chapter-quill .ql-container {
        font-family: unset;
    }
    .chapter-quill .ql-container.ql-snow {
        border: none!important;
    }
`}</style>
)