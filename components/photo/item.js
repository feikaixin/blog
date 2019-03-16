import React, { Component } from 'react';
const Style = () => (
  <>
    <style jsx='true'>{`
      body {
        background: #000;
        overflow: hidden;
        /*内容不能被选中*/
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      #perspective {
        perspective: 800px; /*景深*/
      }
      #wrap {
          position: relative;
          width: 150px;
          height: 178px;
          margin: 200px auto;
          transform-style: preserve-3d; /*构建3d场景*/
          transform: rotateX(-20deg) rotateY(0deg);
      }
      #wrap .image-block {
          position: absolute;
          transform: rotateY(0deg);
          /*transition: 1s;值的改变有一个过渡的过程*/
      }
      #wrap .image-block img{
          width: 150px;
          height: 178px;
      }
      .pic {
          border: 2px solid #fff;
          padding: 5px;
          -moz-box-shadow: 0px 0px 8px 2px #fdfdfd; /*firefox*/
          -webkit-box-shadow: 0px 0px 8px 2px #fdfdfd; /*webkit*/
          box-shadow: 0px 0px 8px 2px #fdfdfd; /*opera或ie9*/
      }
      /*倒影效果 s*/
      .reflection {
          position: relative;
          padding-left: 8px;
      }
      .reflection img {
          -webkit-transform: scaleY(-1);
          -moz-transform: scaleY(-1);
          -ms-transform: scaleY(-1);
          -o-transform: scaleY(-1);
          transform: scaleY(-1);
          filter: flipv;
          opacity: 0.50;
          filter: alpha(opacity='50');
      }
      .reflection .overlay {
          position: absolute;
          top: 0px;
          left: 8px;
          width: 150px;
          height: 178px;
          background-image: -moz-linear-gradient(center bottom, rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 75%);
          background-image: -o-linear-gradient(rgba(0, 0, 0, 0) 25%, rgb(0, 0, 0) 40%);
          background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.60, rgb(0, 0, 0)), color-stop(0.75, rgba(0, 0, 0, 0)));
          filter: progid:DXImageTransform.Microsoft.Gradient(gradientType=0, startColor=0, EndColorStr=#000000);
      }
    `}</style>
  </>
)
class Item extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var oImg = document.getElementsByClassName("image-block");
    var deg = 360 / 12; //旋转的单位度数
    var nowX, nowY, lastX, lastY, minsX, minsY, roX = -20, roY = 0;
    Array.prototype.forEach.call(oImg, function (el, index) {
      el.style.transform = "rotateY(" + index * deg + "deg) translateZ(400px)";
      el.style.transition = "1s " + (12 - index) * 0.05 + "s"
    });
    document.onmousedown = function (e) {
      var e = e || window.event;
      lastX = e.clientX;
      lastY = e.clientY;
      this.onmousemove = function (e) {
        var e = e || window.event;
        nowX = e.clientX;
        nowY = e.clientY;
        minsX = nowX - lastX;
        minsY = nowY - lastY;
        roX -= minsY * 0.2;
        roY += minsX * 0.2;
        wrap.style.transform = "rotateX(" + roX + "deg) rotateY(" + roY + "deg)"
        lastX = nowX;
        lastY = nowY;
      }
      this.onmouseup = function (e) {
        this.onmousemove = null;
        this.onmouseup = null;
      }
    }
  }
  render() {
    const { imgArrs } = this.props;
    return (
      <div id='perspective'>
        <div id='wrap'>
          {
            imgArrs.map((item, index) => (
              <div className="image-block" key={index}>
              {console.log(typeof item)}
                <img className="pic" src={"http://feikaixin.oss-cn-beijing.aliyuncs.com/Photo/"+item} />
                <div className="reflection">
                  <img src={"http://feikaixin.oss-cn-beijing.aliyuncs.com/Photo/"+item} />
                <div className="overlay"></div>
              </div>
          </div>
            ))
          }
        </div>
        <Style />
      </div>
    );
  }
}

export default Item;