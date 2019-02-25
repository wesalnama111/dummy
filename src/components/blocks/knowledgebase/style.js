import React from 'react';
export default () => (
    <style jsx="true">{`
    #fullsection {
        background-color: black;
    }
    .Knowledge-section {
        background-repeat: no-repeat;
        background-size: cover;
        height: 520px;
        margin-bottom: 20px;
    }
    .Knowledge-section .trainers-container {
        height: 520px;
    }
    .Knowledge-section .trainers {
        width: 100%;
    }
    .Knowledge-section .visit-btn button {
        min-width: 20%;
    }
    .Knowledge-section .trainers h4 {
        line-height: 1.31;
        letter-spacing: normal;
        color: #ffffff;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    font-weight: 400!important;
        margin-top: 3rem !important;
    }
    .Knowledge-section .visit-btn .btn-orange-light:hover {
        background-color: #e8950a;
    }
    .Knowledge-section .visit-btn .btn-orange-light {
        background-color: #f5a623;
    }
    .Knowledge-section .visit-btn .btn-grey-dark:hover {
        background-color: #21283a;
    }
    .Knowledge-section .visit-btn .btn-grey-dark {
        background-color: #323b52;
    }
    `}</style>
);