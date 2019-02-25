import React from "react"
export default () =>(
    <style jsx="true">{`
    #header-about{
        background-color: black;
     }
     
       #header-about{
     
         padding:10px;
         position: relative;
         z-index: 1;
     }
    
       #header-about .opacitic-background{
         position: absolute;
         left:0;
         right:0;
         top:0;
         bottom:0;
         opacity:0.5;
         z-index: -1;
     }
       #header-about .opacitic-background1{
         position: absolute;
         left: 0;
         right: 0;
         top: 0;
         bottom: 0;
         background-color: black;
         opacity: 0.6;
         z-index: -1;
         height: 65px;
     }
     
       #header-about .primary-wrapper{
         display:flex;
         justify-content: space-between;
         align-items: center;
     }
  
       #header-about .main-wrapper{
         display: flex;
         padding-left: 20px;
     }
       #header-about .btn-wrapper{
         padding-top:14px;
     }
       #header-about .cmn-btn{
         padding:6px 24px;
        
         color: #ffffff;
         border-radius: 3px;
         font-size: 12px;
         margin-right:8px;
     }
       #header-about .btn-transparent{
         border:1px solid #fff;
         background-color: transparent;
       
     }
       #header-about .btn-dark{
         border-radius: 3px;
         background-color: #f17a28;
     }
       #header-about .icon-wrapper{
         padding-top:20px;
         display: flex;
     }
       #header-about .icon-wrapper img{
         margin-left: 20px;
         cursor: pointer;
     }
       #header-about .svg-img img{
         padding: 30% 26% 26% 26%;
     }
       #header-about .svg-img img.webinar-image{
         padding-bottom: 0px;
     }
       #header-about .middle-header-cert .col-7 {
         padding: 17% 0 0 0%;
     }
       #header-about .middle-header-cert{
         padding-bottom: 71px;
     }
       #header-about .middle-header-cert.webinars{
         padding-bottom: 0px;
     }
       #header-about .middle-header-cert .col-7 p{
         text-shadow: 0 0 16px #000000;
        
         font-size: 19px;
         font-weight: normal;
         font-style: normal;
         font-stretch: normal;
         line-height: 1.74;
         letter-spacing: 0.2px;
         color: #ffffff;
         padding-right: 99px;
     }
       #header-about .middle-header-cert .col-7 button.ORANGE
     {
         background-color: #f5a623;
     }
     
     
       #header-section .middle-header-cert .col-7 button
     {
         border-radius: 3px;
         background-color: #00aeef;
        
         font-size: 16px;
         font-weight: normal;
         font-style: normal;
         font-stretch: normal;
         line-height: normal;
         letter-spacing: 0.5px;
         text-align: center;
         color: #ffffff;
         float: right;
         padding: 17px 40px;
         margin: 3% 17% 0 0;
     }
       #header-about .middle-header-cert .col-7 h1{
         text-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
        
         font-size: 38px;
         font-weight: normal;
         font-style: normal;
         font-stretch: normal;
         line-height: 1.82;
         letter-spacing: normal;
         color: #ffffff;
         opacity:0.9;
         margin-left:54px;
     }
     
     #header-about{
      // background-image: url(/static/images/webinarheader.png);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
  }
  .chapter-webinar-section{
    height: 197px;
  background-color: #d8d8d8;
}
.chapter-webinar-section .btn span{
    opacity: 0.9;
}
.white-section{
    background-color: #ecebeb!important;
}
.chapter-webinar-section .chapter-inner{
    height: 197px;
}
.chapter-webinar-section .chapters-btn{
    height: 197px;
}
.chapter-webinar-section .chapter-inner p{
    line-height: 2.19;
    letter-spacing: normal;
  }
#header-about .middle-header-cert .col-7 h1{
    padding-left:0!important;
    margin-left: 19px!important;
    font-size:45px;
}
.chapter-webinar-section .chapter-inner p sup{
    color:#fff;
    font-weight: 200;
    margin-left:20px;
    opacity:0.4;
}

  .chapter-webinar-section .chapter-inner .first-color{
    color: #f17a28;
    font-weight: bold;
  }
  .chapter-webinar-section .chapter-inner .second-color{
    color: #54585a;
  }
  .chapter-webinar-section .chapter-inner .third-color{
    font-style: italic;
    color: #9b9b9b;
  }
  .svg-img img{
      padding-left: 10%!important;
  }

  .register-udpate{
    height: 116px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.executive-img{
    width: 280px;
}
.executive-img img{
    width: 100%;
}
    
    `}</style>
)