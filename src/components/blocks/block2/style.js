import React from 'react';
export default () => (
    <style jsx="true">{`
#img-txt {
    padding: 100px 0px;
    position:relative;
}
.initiatives-section {
    background-color: #fff!important;
    position:relative;
}
.mainrelative{
    position:relative;
}
.text-primary {
    width:77%;
}
.initiatives-section .text-primary{
    position:relative;
    z-index:1;
}
.para-div{
    color:black;
    min-height: 50px;
}
#img-txt .text-primary h1 {
    font-size: 36px;
    color: #ffffff;
    margin-bottom: 22px;
    font-weight: normal;
}
#img-txt .text-primary h2 {
    font-size: 36px;
    color: #ffffff;
    margin-bottom: 22px;
    font-weight: normal;
}
#img-txt .text-primary input {
    font-size: 36px;
    color: #f17a28;
    margin-bottom: 22px;
    font-weight: normal;
    border: none;
    border-bottom: 1px solid #f17a28;
}
#img-txt .text-primary input:focus{
    outline:none;
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
.initiatives-section h1 {
    color: #f17a28!important;

}
.initiatives-section h2 {
    color: #f17a28!important;

}
#img-txt .text-primary p {
    font-size: 18px;
    color: #ffffff;
    font-weight: normal;
    line-height: 1.7;
    padding-right: 90px;
}
.initiatives-section p {
    color: #4a4a4a!important;
    padding-right: 0px!important;
}
.initiatives-section .text-primary .abt-wrapper {
    justify-content: flex-end!important;
    width: 100%;
}
.abt-wrapper {
    display: flex;
    justify-content: flex-end;
    width: 84%;
}

    `}</style>
)