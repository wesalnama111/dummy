import React from 'react'

export default () => (
    <style jsx="true">{`
    #chapter-card-section{
        padding-bottom: 50px;
    }
    #chapter-card-section .card-wrapper .number{
        position: absolute;
        top: 13px;
        right: 20px;
        background: #fff;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        padding-top:1px;
    }
    #chapter-card-section .card-wrapper .clr-org{
        color:#F17A28;
    }
    #chapter-card-section .card-wrapper .clr-b{
        color:#01C2C4;
    }
    #chapter-card-section .card-wrapper .clr-o{
        color:#f5a623;
    }
    #chapter-card-section .card-wrapper .clr-bd{
        color:#01C2C4;
    }

    #chapter-card-section .card-wrapper .clr-dg{
        color:#90989C;
    }
    #chapter-card-section .card-wrapper .number span{
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 900;
    }
    #chapter-card-section .card-wrapper{
        height: 169px;
        padding: 36px 0;
        margin-bottom: 4px;
        margin-right: 4px;
        cursor: pointer;
    }
    #chapter-card-section .card-wrapper:hover{
        opacity: 0.8;
    }
    #chapter-card-section .card-wrapper .img-wrp{
        display: flex;
        justify-content: center;
    }
    #chapter-card-section .card-wrapper .img-wrp div span{
        font-size: 50px;
    }
    #chapter-card-section .card-wrapper .img-wrp div{
        height:50px;
        width:67px;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
    }
    #chapter-card-section .card-wrapper .img-wrp img{
        height:100%;
    }

     #chapter-card-section .card-wrapper .txt-wrp h1{
        font-size: 14px;
        font-weight: bold;
        line-height: 1.43;
        text-align: center;
        color: #ffffff;
    }
    #chapter-card-section .learning img{
         width:100%;
     }
    #chapter-card-section .sky-blue{
        background-color: #00aeef;
    }
    #chapter-card-section .btn-org{
        background-color: #f5a623;
    }
    #chapter-card-section .btn-gren{
        background-color: #bfcd31;
    }
    #chapter-card-section .btn-drk{
        background-color: #90989c;
    }
    #chapter-card-section .btn-org-drk{
        background-color: #f17a28;
    }
    #chapter-card-section .btn-blue-drk{
        background-color: #01c2c4;
    }

    `}</style>
)