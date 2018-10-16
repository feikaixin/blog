import React from 'react';
import Head from '../components/Head';
import Search from '../components/Search';
import Footer from '../components/Footer';
export default class BasicLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange = () => {
    console.log('a')
  }
  render() {
    const { title } = this.props;
    return (
      <div className='wrapper'>
        <Head title={title || '博客'} />
        <div className='head_search'>
          <Search onChange={this.handleChange}/>
        </div>
        <div className='footer'>
          <Footer/>
        </div>
      </div>
    )
  }
}
