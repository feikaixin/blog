import React from 'react';
import Head from '../components/Head';
import Nav from '../components/Nav';
export default class BasicLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title } = this.props;
    return (
      <div className='wrapper'>
        <Head title={title || '博客'} />
        <div className='nav'>
          <Nav title={title}></Nav>
        </div>
      </div>
    )
  }
}
