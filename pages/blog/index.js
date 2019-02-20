import React from "react";
import BasicLayout from "../../layout/BasicLayout";
import request from "../../utils/request";
export default class BlogPage extends React.Component {
  static async getInitialProps({ query }) {
    const { page = 1 } = query;
    const articleList = request("/api/article/list", {
      body: JSON.stringify({
        page
      })
    });
    const [
      {
        data: { pagination, list }
      }
    ] = await Promise.all([articleList]);
    return { pagination, list };
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this._throttleFn);
  }
  render() {
    const data = this.props;
    return (
      <>
        <BasicLayout title="博客" data={data} />
      </>
    );
  }
}
