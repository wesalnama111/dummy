import React from 'react';
export default () => (
    <style jsx="true">{`
    #fullsection {
        background-color: black;
    }
    .fundamantal-section {
        padding:0 30px;
        margin-top: 20px;
        background-size: cover;
        min-height: 600px;
    }
    .fundamantal-section .first-inside {
        width: 100%!important;
    }
    #fullsection .first-inside p {
        line-height: 1.83;
        color: #ffffff;
        font-size: 18px;
        opacity: 1;
    }
    .fundamantal-section .share-color {
        color: #f5a623;
        line-height: 1.64;
        cursor: pointer;
        font-size:18px;
    }
    #fullsection .first-inside h1 {
        font-size: 36px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.31;
        letter-spacing: normal;
        color: #ffffff;
        margin-bottom: 5px;
    }
    .fundamantal-section .basic-fundamantal {
        width: 750px;
    }
    #fullsection .first-inside p {
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        line-height: 1.83;
        color: #ffffff;
        font-size: 18px;
        opacity: 1;
        font-weight: normal;
        margin-bottom: 5px;
        font-family: 'Montserrat', sans-serif!important;

    }
    .fundamantal-section .funda-text {
        width: 630px;
    }
    #fullsection .inside {
        display: flex;
        align-items: flex-end;
    }
    .fundamantal-section .inside {
        width: 100%;
        height: 505px!important;
    }
    .btn-grey-color {
        background-color: #323b52;
    }
    .feature-event-heading {
       color: #323b52;
       line-height: 1.31;
       padding-left:20px;
     }
     .btn-blue{
       background-color: #048fc2!important;
     }
    `}</style>
);