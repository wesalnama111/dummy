/**
 * Created by FaZi on 1/29/2019.
 */
import React from 'react';
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
    .happening-section {

        margin-top: 20px;
        background-size: cover;
        height: 580px;
        padding-bottom: 76px;
    }
    .happening-section .first-inside {
        width: 100%!important;
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
    #fullsection .first-inside h1 {
        font-size: 36px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.31;
        letter-spacing: normal;
        color: #ffffff;
        margin-bottom: 70px;
    }
    #fullsection .first-inside h2 {
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
        line-height: 1.83;
        color: #ffffff;
        font-size: 18px;
        opacity: 1;
        font-weight:normal;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
    }
    .happening-section p {
        line-height: 1.83;
        opacity: 0.9;
        padding-right: 30px;
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
    .happening-section .inside {
        position: relative;
        top: 40px;
        right: 66px;
    }
    // .ex-inside .btn{
    //   padding-left:50px!important;
    //   padding-right:50px!important;
    // }
    `}</style>
);
