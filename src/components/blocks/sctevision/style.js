
import React from 'react'
export default () => (
    <style jsx="true">{`
    #img-txt {
        padding: 100px 0px;
    }
    .over-vision .text-primary {
        display: flex;
        justify-content: space-between;
    }
    .over-vision .text-primary>div:nth-child(1) {
        width: 49%;
        height: 514px;
    }
    .over-vision .text-primary div:nth-child(1) img {
        width: 100%;
        height: 100%;
    }
    .cke{
        width:100%!important;
        overflow:hidden
    }
    .over-vision .text-primary>div:nth-child(2) {
        width: 46%!important;
        height: 479px;
        padding-top: 48px;
        position:relative;
        z-index:1;
    }
    #img-txt .text-primary h1 {
        font-size: 36px;
        color: #ffffff;
        margin-bottom: 0px;
        font-weight: normal;
        overflow:hidden;
    }
    #img-txt .text-primary h2 {
        font-size: 36px;
        color: #ffffff;
        margin-bottom: 0px;
        font-weight: normal;
        overflow:hidden;
    }
    .ck-content{
        width:100%!important;
    }
    #img-txt .text-primary input {
        font-size: 36px;
        color: #323b52;
        margin-bottom: 22px;
        font-weight: normal;
        background:transparent;
        border:none;
        border-bottom: 1px solid #323b52;
    }
    #img-txt .text-primary p {
        font-size: 18px;
        color: #ffffff;
        font-weight: normal;
        line-height: 1.7;
        padding-right: 90px;
    }
    .over-vision .text-primary p {
        color: #323b52!important;
        font-size: 16px;
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
    #img-txt .text-primary .abt-wrapper .btn-grey-light {
        background-color: #9b9b9b!important;
    }
    #img-txt .text-primary p span {
        color: #f17a28;
    }
    .over-vision .text-primary h1 {
        color: #323b52!important;
    }
    .over-vision .text-primary h2 {
        color: #323b52!important;
    }
    `}</style>
);
