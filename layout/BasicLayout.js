import React from 'react';
import Head from '../components/Head';

export default class BasicLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Head title={title || '博客主页'} />
      </div>
    )
  }
}
