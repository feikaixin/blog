
import React, { Component } from 'react'
import Article from '../../components/Article';
import request from '../../utils/request';
export default class Index extends Component {
  static async getInitialProps({query}) {
    let data = null;
    const res = await request(`/api/article/detail`,{
      body: JSON.stringify({
        id: query.id
      })
    });
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
          data ? <Article.Detail data={data}></Article.Detail> : ''
        }
      </div>
    )
  }
}
