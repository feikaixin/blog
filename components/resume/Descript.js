import React, { Component } from 'react'

export default class Descript extends Component {
  render() {
    const { children, isItem } = this.props
    return (
      <div>
        <p className={isItem ? 'item1 descript' : 'descript'}>{children}</p>
        <style jsx>{`
          p {
            padding: 5px 10px;
            text-align: justify;
            line-height: 2.30;
            word-break: break-all;
            position: relative;
            font-size: 13.5px;
          }
          .item1 {
            padding-left: 25px;
          }
          .item1::after {
            content: "";
            display: block;
            width: 3px;
            height: 3px;
            border: 1px solid #000;
            border-radius: 50%;
            position: absolute;
            top: 19px;
            left: 10px;
          }
        `}</style>
        <style jsx global>{`
          p.descript span {
            background-color: #eee;
            padding: 0px 5px;
          }
        `}</style>
      </div>
    )
  }
}
