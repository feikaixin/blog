import React, { Component } from "react";
import Tag from './Tag';
export default class Item extends Component {
  render() {
    const { time, children, tag } = this.props;
    let href, tagName;
    if (Object.prototype.toString.call(tag) === "[object Object]") {
      href = tag.link;
      tagName = tag.name;
    } else if (tag) {
      tagName = tag;
    }
    return (
      <div>
        <div>
          <li>
            <span className="time">{time}</span>
            <span className="content">{children}</span>
            <span className="tag">
              {tag ? <Tag href={href}>{tagName}</Tag> : ""}
            </span>
          </li>
        </div>
        <style jsx>{`
          li span {
            display: inline-block;
          }
          .time {
            width: 30%;
            font-size: 14px;
          }
          .content {
            width: 40%;
            margin-left: -28px;
            text-align: center;
          }
          li {
            position: relative;
            line-height: 1.7;
            list-style: circle;
            text-indent: 10px;
            overflow: hidden;
            padding: 5px 0px;
            font-size: 15px;
          }
          li span.tag {
            float: right;
          }
        `}</style>
      </div>
    );
  }
}
