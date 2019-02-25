import React from 'react';
export default () => (
    <style jsx="true">{`
.about-fullsection-back {
    background-blend-mode: normal, multiply;
    // background: url(../../../assets/images/blks.jpg)no-repeat;
    background-size: cover;
    background-position: top;
}
.main-div{
position:relative
}
.absolute{
    position:absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
    width:100%;
    height:100%;

}
#fullsection .first-height {
    display: flex;
    justify-content: center;
    align-items: center;
}
.about-fullsection-back .col-7 {
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
}
#fullsection .first-inside h1 {
    font-size: 36px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.31;
    letter-spacing: normal;
    color: #ffffff;
      margin-bottom: 0.25rem !important;
    margin-top:0px!important;
}
#fullsection .first-inside h2 {
    font-size: 36px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.31;
    letter-spacing: normal;
    color: #ffffff;
    margin-bottom: 0.25rem !important;
    margin-top:0px!important;
}
#fullsection .first-inside input:focus {
    outline: none;
}

#fullsection .first-inside input {
    font-size: 36px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.31;
    letter-spacing: normal;
    color: #ffffff;
    background:transparent;
    border:none;
    border-bottom:1px solid #ffffff;
}

#fullsection .first-inside p {
    line-height: 1.83;
    color: #ffffff;
    font-size: 18px;
    opacity: 1;
}
    `}</style>
);