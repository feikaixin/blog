
import React, { Component } from 'react'
import Article from '../../components/Article';
import request from '../../utils/request';
export default class Index extends Component {
  static async getInitialProps({query}) {
    let data = null;
    let id;
    const res = await request(`/api/article/detail/${query.id}`);
    data = res.data;
    return {
      data
    };
  }
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        {
          data ? <Article.Detail title={data.title} content={this.content}></Article.Detail> : ''
        }
      </div>
    )
  }
}
