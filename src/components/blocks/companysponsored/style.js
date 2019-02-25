/**
 * Created by FaZi on 1/29/2019.
 */
import React from 'react';
export default () => (
    <style jsx="true">{`
    #corpo-section {
        background-color: #00b2b3;
        padding:30px 0;
    }
    #corpo-section span.msg,
    #corpo-section span.choose {
        color: #555;
        padding: 5px 0 10px;
        display: inherit
    }
    #corpo-section .dropdown {
        width: 300px;
        display: inline-block;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 2px rgb(204, 204, 204);
        transition: all .5s ease;
        position: relative;
        font-size: 14px;
        color: #474747;
        height: 100%;
        text-align: left
    }
    #corpo-section .dropdown .select {
        border-radius: 2px;
        background-color: #019596;
        cursor: pointer;
        display: block;
        padding: 10px;
        border: 1px solid #a8d6e0;
    }
    #corpo-section .dropdown .select .default-showi{
        font-size: 16px;
        font-weight: lighter;
        color: #e9ecef;
    }
    #corpo-section .dropdown .select i {
        font-size: 13px;
        color:#e9ecef;
        cursor: pointer;
        transition: all .3s ease-in-out;
        float: right;
        line-height: 20px
    }
    #corpo-section .dropdown:hover {
        box-shadow: 0 0 4px rgb(204, 204, 204)
    }
    #corpo-section .dropdown:active {
        background-color: #f8f8f8
    }
    #corpo-section .dropdown.active:hover,
    #corpo-section .dropdown.active {
        box-shadow: 0 0 4px rgb(204, 204, 204);
        border-radius: 5px 5px 0 0;
        background-color: #f8f8f8
    }
    #corpo-section .dropdown.active .select i {
        transform: rotate(-180deg)
    }
    #corpo-section .dropdown .dropdown-menu {
        position: absolute;
        background-color: #fff;
        width: 100%;
        left: 0;
        margin-top: 1px;
        box-shadow: 0 1px 2px rgb(204, 204, 204);
        border-radius: 0 1px 5px 5px;
        overflow: hidden;
        display: none;
        max-height: 144px;
        overflow-y: auto;
        z-index: 9
    }
    #corpo-section .dropdown .dropdown-menu li {
        padding: 10px;
        transition: all .2s ease-in-out;
        cursor: pointer
    }
    #corpo-section .dropdown .dropdown-menu {
        padding: 0;
        list-style: none
    }
    #corpo-section .dropdown .dropdown-menu li:hover {
        background-color: #f2f2f2
    }
    #corpo-section .dropdown .dropdown-menu li:active {
        background-color: #e2e2e2
    }
    #corpo-section .headi h1{
        text-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
        font-size: 25px;
        font-weight: 100;
        letter-spacing: normal;
        color: #ffffff;
        margin-bottom:0px;
        opacity:0.9;
                overflow:hidden;
                    margin-top: 4px;
    }
    #corpo-section .headi h2{
        text-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
        font-size: 25px;
        font-weight: 100;
        letter-spacing: normal;
        color: #ffffff;
        margin-bottom:0px;
        opacity:0.9;
        overflow:hidden;
            margin-top: 4px;
    }
    #corpo-section  .dropi{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    #corpo-section  .dropi .dropi-in{
        display: flex;
        align-items:center;
    }

    #corpo-section  .col-5{
        display: flex;
        align-items:center;
    }
    #corpo-section  .dropi button{
        border-radius: 2px;
        background-color: #04e3e6;
        font-size: 16px;
        margin-left: 18px;
        text-align: center;
        color: #019596;
        padding: 9px 26px;
    }

    `}</style>
)
