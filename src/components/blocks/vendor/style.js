import React from 'react'

export default () => (
    <style jsx="true">{`
#fullsection {
    background-color: black;
    position:relative;
}
.vendor-display{
    position:relative;
    z-index:2;
}
.vendor-section {
    margin-top: 20px;
    margin-bottom: 20px;
    background-size: cover;
    height: 550px;
}
#fullsection .first-inside h1 {
    font-size: 36px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.31;
    letter-spacing: normal;
    color: #ffffff;
    margin-bottom: 0px;
}
#fullsection .first-inside h2 {
    font-size: 36px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.31;
    letter-spacing: normal;
    color: #ffffff;
    margin-bottom: 0px;
}

.outsideClick{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width:100%;
    height:100%;
    z-index:1;
    }
#fullsection .first-inside p {
    line-height: 1.83;
    color: #ffffff;
    font-size: 19px;
    opacity: 1;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    font-weight: normal !important;
    font-family: 'Montserrat', sans-serif;
}
.normal-text-prop {
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
}
#fullsection .inside {
    display: flex;
    align-items: flex-end;
}
.vendor-section .golden-color {
    color: #f5a623;
    cursor: pointer;
}
.vendor-section .blue-color {
    color: #00aeef;
    cursor: pointer;
}
    `}</style>
);
