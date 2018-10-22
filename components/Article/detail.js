import React from "react";
import PageProgress from "../../components/PageProgress";
import ToTop from "../../components/ToTop";
import Head from "../../components/Head";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
export default class Article extends React.Component {
  render() {
    return (
      <div>
        <div className="common">
          <Head title="博客" />
          <PageProgress />
          <ToTop />
        </div>
        <div className="header">
          <Nav />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
