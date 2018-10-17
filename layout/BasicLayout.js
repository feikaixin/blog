import React from "react";
import Head from "../components/Head";
import ToTop from "../components/ToTop";
import Article from "../components/Article";
import Search from "../components/Search";
import Footer from "../components/Footer";
import PageProgress from '../components/PageProgress'
export default class BasicLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange = () => {
    console.log("a");
  };

  render() {
    const { title } = this.props;
    const list = [1, 2, 3, 4, 5, 6, 7];
    return (
      
      <div className="wrapper">
        <PageProgress/>
        <Head title={title || "博客"} />
        <div className="head_search">
          <Search onChange={this.handleChange} />
        </div>
        <div className="artical">
          {list.map((item, index) => (
            <Article key={index} isLeft={index % 2 === 0 ? true : false} />
          ))}
        </div>
        <ToTop />
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
