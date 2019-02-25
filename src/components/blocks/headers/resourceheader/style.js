import React from 'react';
export default () => (
    <style jsx="true">{`
    .resources {
        padding-bottom: 70px!important;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .homepages #header-section {
        height: 650px;
        padding: 10px;
        position: relative;
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
    .homepages #header-section .after-top-nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 6%;
    }
    .resources .text-icon {
        position: relative;
        width: 100%;
    }
    .homepages #header-section .after-top-nav img {
        cursor: pointer;
        padding: 5px;
        margin: 70px 0 20px 0;
    }
    .resources .text-icon img {
        position: absolute;
        left: 10%;
    }
    .homepages #header-section .after-top-nav h1 {
        font-size: 44px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.67;
        letter-spacing: -0.6px;
        text-align: center;
        color: #ffffff;
        margin: 150px 0 42px 0;
    }
    .homepages #header-section .after-top-nav h2 {
        font-size: 44px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.67;
        letter-spacing: -0.6px;
        text-align: center;
        color: #ffffff;
        margin: 150px 0 42px 0;
    }
    .resources .input-div {
        width: 63%;
        height: 73px;
        color: #ffffff;
        text-align: left;
        font-size: 26px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.04;
        letter-spacing: 1.1px;
        text-shadow: 0 0 16px #000000;
        background: rgba(0, 0, 0, 0.5);
        border: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 18px;
    }
    .homepages #header-section .after-top-nav input {
        width: 800px;
        height: 73px;
        background-color: rgba(0, 0, 0, 0.8);
        color: #ffffff;
        text-align: center;
        font-size: 26px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.04;
        letter-spacing: 1.1px;
        text-shadow: 0 0 16px #000000;
        border: none;
    }
    .resources .input-div input {
        background-color: transparent!important;
        text-align: left!important;
    }
    .resources .input-div button {
        border-radius: 3px;
        background-color: #bfcd31;
        color: #fff;
        border: none;
        font-size: 16px;
        padding: 9px 12px;
        width: 100px;
        margin-right: 20px;
        cursor: pointer;
    }
    .resources .button-wrp {
        margin-top: 50px;
        width: 55%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    .resources .button-wrp .btn {
        border-radius: 3px;
        color: #e4dddd;
        padding: 3px 18px 3px 8px;
        text-transform: lowercase;
        border: 1px solid #e4dddd;
        margin: 0 10px 10px 0;
        font-size:14px;
    }
    .homepages #header-section .after-top-nav input::placeholder{
        color:#fff;
    }
    .homepages #header-section .after-top-nav input:focus{
       outline:none;
    }
    .resource-quill .quill{
        position:relative;
    }
    .resource-quill .ql-toolbar.ql-snow {
        position: absolute;
        top: -42px;
    }
    .resource-quill .ql-editor {
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
    .resource-quill .ql-container {
        font-family: unset;
    }
    .resource-quill .ql-container.ql-snow {
        border: none!important;
    }
    `}</style>
);