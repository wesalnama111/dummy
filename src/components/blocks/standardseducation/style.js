import React from 'react';
export default () => (
    <style jsx="true">{`
    #img-txt {
        padding: 100px 0px;
        position:relative;
    }
    .media-center {
        background-size: cover;
        background-position: top;
        margin-bottom: 20px;
    }
    .media-center .text-primary {
        justify-content: flex-end;
        display: flex;
    }
    .media-center .text-primary>div {
        width: 68%;
        margin-right: 54px;
        position:relative;
        z-index:1;
    }
.outsideClick{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width:100%;
    height:100%;
    }
    #img-txt .text-primary h1 {
        font-size: 36px;
        color: #ffffff;
        margin-bottom: 22px;
        font-weight: normal;
        margin-top: 3rem !important;
    }
    #img-txt .text-primary h2 {
        font-size: 36px;
        color: #ffffff;
        margin-bottom: 22px;
        font-weight: normal;
        margin-top: 3rem !important;
    }
    #img-txt .text-primary input {
        font-size: 36px;
        color: #ffffff;
        margin-bottom: 22px;
        font-weight: normal;
        border:none;
        border-bottom: 1px solid #ffffff;
        background:transparent;
        width: 100%;
        line-height: 1.2;
            margin-top: 3rem!important;
    }
    #img-txt .text-primary input:focus{
        outline:none;
    }
    #img-txt .text-primary p {
        font-size: 18px;
        color: #ffffff;
        font-weight: normal;
        line-height: 1.7;
        padding-right: 90px;
    }
    .media-center p {
        padding-right: 0px!important;
    }
    #img-txt .text-primary .abt-wrapper {
        justify-content: flex-start;
    }
    .abt-wrapper {
        display: flex;
        justify-content: flex-end;
        width: 84%;
    }
    #img-txt .text-primary .abt-wrapper button:nth-child(1) {
        margin-left: 0px!important;
    }
    `}</style>
);