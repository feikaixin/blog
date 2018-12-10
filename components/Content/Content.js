import React from 'react';
import markDown from 'markdown-it';
export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { content } = this.props;
    const html = content && markDown({html: true, linkify: true, typographer: true}).render(content);
    return (
      <div className='content'>
        <div dangerouslySetInnerHTML={{__html: html}}></div>
        <style jsx='true'>{`
          .content {
            width: 84%;
            margin: 40px auto 0;
          }
        `}</style>
      </div>
    )
  }
}
