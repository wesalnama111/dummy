import React from 'react';
export default () => (
    <style jsx="true">{`
    #fullsection {
        background-color: black;
    }
    .bookstore-section {
        background-repeat: no-repeat;
        background-size: cover;
        height: 500px;
    }
    .bookstore h4{
        color: #fff !important;
        font-weight: 400 !important;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        font-family: 'Montserrat', sans-serif;
    }
    .bookstore-section .first-inside {
        height: 520px;
    }
    .bookstore-section .inside {
        height: 320px!important;
    }
    .bookstore-section .inside p {
        color: #ffffff;
        line-height: 1.83;
        font-size: 18px !important;
        font-weight: normal !important;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: normal;
        font-family: 'Montserrat', sans-serif;
    }
    #fullsection .inside {
        display: flex;
        align-items: flex-end;
    }
    .bookstore-section .inside {
        height: 320px!important;
    }
`}</style>
);