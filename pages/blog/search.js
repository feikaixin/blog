import React, { Component } from 'react';
import Head from '../../components/Head';
import request from "../../utils/request";
import Article from "../../components/Article";
import Footer from "../../components/Footer";
class Search extends Component {
  static async getInitialProps({ query }) {
    const { q = '' } = query;
    const articleList = request("/api/article/search", {
      body: JSON.stringify({
        search: q
      })
    });
    const [ { data } ] = await Promise.all([articleList]);
    return data;
  }
  render() {
    const { list } = this.props;
    return (
      <div className='wrap'>
        <Head title='博客' />
        <div className="artical" style={{marginTop: '30px'}}>
          {list.length !== 0 ? list.map((item, index) => (
            <Article key={index} isLeft={index % 2 === 0 ? true : false} data={item}/>
          )) : <img src='/static/images/blank.png' style={{width:'960px',display:'block',margin:'0 auto'}}/>}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Search;