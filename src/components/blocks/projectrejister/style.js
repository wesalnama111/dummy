import React from 'react';
export default () => (
    <style jsx="true">{`
    .project-section {

        background-size: cover;
        min-height: 600px;
    }
    .project-section .first-inside {
        width: 100%!important;
    }
    #fullsection .first-inside h1 {
        font-family: 'Montserrat', sans-serif!important;

        font-size: 36px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.31;
        letter-spacing: normal;
        color: #ffffff;
        margin-bottom: 70px;
    }
    #fullsection .first-inside p {
        font-family: 'Montserrat', sans-serif!important;
        font-style: normal;
        font-weight: normal!important;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        line-height: 1.83;
        color: #ffffff;
        font-size: 18px;
        opacity: 1;
    }
    #fullsection .inside {
        display: flex;
        align-items: flex-end;
    }
    #fullsection .inside button {
        text-align: center;
    }
    .project-section .btn {
        position: relative;
        top: 35px;
    }
    .btn-blue {
        background-color: #00aeef!important;
    }
    `}</style>
);