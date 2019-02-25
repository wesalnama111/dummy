import React from 'react';

export default () => (
    <style jsx="true">{`
#public-section {
    height: 100%;
    padding-bottom: 100px;
    padding-top: 50px;
}
#public-section .employment-content h5 {
    font-size: 24px;
    letter-spacing: normal;
    color: #404960;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    font-weight: 800!important;
    padding-bottom:2px;

}
#public-section .employment-content ul {
    list-style: none;
    padding-left: 0px;
    width: 100%;
}
#public-section .employment-content ul li {
    margin: 25px 0px 5px 0px;
    border-bottom: 1px solid #d9d9d9;
    display: flex;
    justify-content: space-between;
}
#public-section .employment-content ul li:nth-child(1) span {
    cursor: unset;
}
#public-section .employment-content ul li p {
    font-family:  ;
    font-size: 17px;
    font-weight: normal;
    line-height: 1.63;
    letter-spacing: normal;
    color: #5e6a6e;
    padding-left: 0px;
    margin-bottom: 6px;
}
#public-section .employment-content ul li span {
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: normal;
    color: #00aeef;
    padding-left: 0px;
    cursor: pointer;
}
    `}</style>
);
