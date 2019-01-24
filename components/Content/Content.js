import React from 'react';
const markDown = require('markdown-it');
const emoji = require('markdown-it-emoji');
export default class Content extends React.Component {
  render() {
    const { content } = this.props;
    const md = new markDown();
    md.use(emoji);
    const html = content && md.render(content);
    return (
      <div className='content'>
        <div dangerouslySetInnerHTML={{__html: html}}></div>
        <style jsx='true' global>{`
          .content {
            width: 60%;
            margin: 40px auto 0;
          }
          blockquote {
            padding: 10px 20px;
            margin: 20px 0;
            font-size: 17.5px;
            border-left: 10px solid #eee;
          }

          p{
            margin: 6px 0;
          }
          pre {
            display: block;
            padding: 9.5px;
            margin: 0 0 10px;
            font-size: 13px;
            line-height: 1.42857143;
            color: #333;
            word-break: break-all;
            word-wrap: break-word;
            background-color: #f5f5f5;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-top: 10px;
          }
          pre code {
            padding: 0;
            font-size: inherit;
            color: inherit;
            white-space: pre-wrap;
            background-color: transparent;
            border-radius: 0;
          }
          code {
            padding: 2px 4px;
            font-size: 90%;
            color: #c7254e;
            background-color: #f9f2f4;
            border-radius: 4px;
          }
          a {
            color: blue;
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
          img {
            width: 90%;
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
