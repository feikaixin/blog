import React from 'react';
const markDown = require('markdown-it');
export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { content } = this.props;
    const md = new markDown();
    const html = content && md.render(content);
    return (
      <div className='content'>
        <div dangerouslySetInnerHTML={{__html: html}}></div>
        <style jsx='true' global>{`
          .content {
            width: 60%;
            margin: 40px auto 0;
          }
          .middle::selection {
              background:maroon; 
              color:#fff;
          }
          .middle::-moz-selection {
              background:maroon; 
              color:#fff;
          }
          
          .middle::-webkit-selection {
              background:maroon; 
              color:#fff;
          }
          p img {
            width: 90%;
            height: 440px;
            margin-top: 30px;
          }
          p:nth-of-type(1) {
            font-size:13px;
            color: #666;
          }
          h5 {
            display: inline-block;
            margin-right: 20px !important;
            background: rgba(102,128,153,0.075);
            padding: 10px 5px !important;
          }
          table thead tr th{
            padding: 20px;
            background: #ddd;
            text-align: center;
          }
          table tbody tr td {
            padding: 8px;
            line-height: 1.42857143;
            vertical-align: top;
            border-top: 1px solid #ddd;
          }
        `}</style>
      </div>
    )
  }
}
