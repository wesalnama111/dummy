import React from 'react';
export default () => (
    <style jsx="true">{`
     .header-content{
        margin-top:64px;
      }
    .wrapper-overlay div {
        background-image: url(/static/images/overly.png);
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
    #standard-header-back .standard-developent-middle-header .svg-img {
        justify-content: space-between!important;
    }
    .svg-img span {
        font-size: 120px;
    }
    .header-content h1 {
        font-size: 45px;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        font-weight: normal;
        margin-bottom: 0px;
        margin-top: 5px;
        color: #fff;
        font-family: Montserrat;
    }
    .header-content p {
        line-height:1.83;
        font-size: 18px;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        font-weight: normal;
        margin-bottom: 0px;
        margin-top: 5px;
        color: #fff;
        font-family: Montserrat;
    }
    #standard-header-back .standard-developent-middle-header .header-content ul {
        list-style: none;
    }
    #standard-header-back .standard-developent-middle-header .header-content ul li {
        line-height: 1.74;
        letter-spacing: 0.2px;
        color: #ffffff;
        text-shadow: 0 0 16px #000000;
        font-family: Montserrat;
        font-size: 18px;
    }
    #standard-header-back {
        // background-image: url(static/images/man.jpg);
        background-size: cover;
        position: relative;
        z-index: 1;
    }
     #arrow-section {
     padding: 27px 0px;
    }
    #arrow-section .arrow-container {
        display: flex;
        justify-content: center;
    }
    .development-quill .quill{
        position:relative;
    }
    .development-quill .ql-toolbar.ql-snow {
        position: absolute;
        top: -43px;
    }
    .development-quill .ql-snow .ql-editor h1 {
        font-size: 45px
    }
    .development-quill .ql-editor {
        box-sizing: unset !important;
        line-height: unset!important;
        height: unset!important;
        outline:auto!important;
        outline-color: white!important;
        overflow-y: auto!important;
        padding: 0px 0 0 0!important;
        tab-size: unset!important;
        -moz-tab-size: unset!important;
        text-align: unset!important;
        white-space: unset!important;
        word-wrap: break-word!important;
    }
    .development-quill .ql-container {
        font-family: unset;
    }
    .development-quill .ql-container.ql-snow {
        border: none!important;
    }
    `}</style>
);