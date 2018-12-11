import React from "react";
import PageProgress from "../../components/PageProgress";
import ToTop from "../../components/ToTop";
import Head from "../../components/Head";
import Nav from "../../components/Nav";
import Content from '../../components/Content';
import Footer from "../../components/Footer";

const Style = () => (
  <style jsx='true'>{`
    .header {
      width: 100%;
      height: 60px;
    }
  `}</style>
)
export default class Article extends React.Component {
  render() {
    const { title, content, bg_music } = this.props.data;
    return (
      <div>
        <div className="common">
          <Head title="博客" />
          <PageProgress />
          <ToTop />
        </div>
        <div className="header">
          <Nav title={title} bg_music={bg_music}/>
        </div>
        <div className='middle'>
          <Content content={content}/>
        </div>
        <div className="footer">
          <Footer />
        </div>
        <Style/>
      </div>
    );
  }
}
