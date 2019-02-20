import React from "react";
import Router from 'next/router';
import Head from "../components/Head";
import ToTop from "../components/ToTop";
import Article from "../components/Article";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
export default class BasicLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  handleKeydown = (value, e) => {
    if(e.keyCode !== 13) return;
    Router.push({
      pathname: '/blog/search',
      query: {q: value}
    })
  };

  render() {
    const { title, data:{ pagination, list } } = this.props;
    return (
      <div className="wrapper">
        <Head title={title || "博客"} />
        <div className="head_search">
          <Search 
            onKeyDown={this.handleKeydown} 
          />
        </div>
        <div className="artical">
          {list.map((item, index) => (
            <Article key={index} isLeft={index % 2 === 0 ? true : false} data={item}/>
          ))}
        </div>
        <Pagination
          pagination={pagination}
          domain="/blog"
          paramName="page"
        />
        <ToTop />
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
