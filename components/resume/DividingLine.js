import React from "react";
import Icon from "../Icon";
export default class DividingLine extends React.Component {
  render() {
    const { children, title } = this.props;
    return (
      <div className="wrapper">
        <div className="dividing">
          <span className="line line-1"></span>
          <h2>
           <span>{title}</span>
          </h2>
          <span className="line line-2"></span>
        </div>
        <div className="content">
          {children}
        </div>
        <style jsx>{`
          div {
            width: 100%;
          }
          .wrapper {
            padding-bottom: 20px;
          }
          .dividing {
            width: 100%;
            position: relative;
            margin-bottom: 25px;
            padding: 0 10px;
            box-sizing: border-box;
          }
          h2 {
            color: rgb(36, 36, 36);
            text-indent: 20px;
            line-height: 1;
            background-color: #fff;
            z-index: 200;
            text-align: center;
            font-weight: normal;
          }
          h2 i {
            line-height: 1;
            width: 15px;
            text-indent: 0px;
            display: inline-block;
            vertical-align: -3%;
            text-indent: 0px;
          }
          h2 span {
            text-indent: 0;
            padding: 8px 10px;
            border-radius: 18px;
            font-size: 16px;
            background-color: #fff;
            line-height: 1;
            background-color: #eee;
            text-align: center;
            display: inline-block;
            width: 20%;   
          }
          span.line {
            display: inline-block;
            width: 30%;
            height: 1px;
            border-top: 1px solid #ededed;
            position: absolute;
            top: calc(50% - 1px);
          }
          .line-1 {
            left: 0;
          }
          .line-2 {
            right: 0;
          }
          .content {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
  }
}
