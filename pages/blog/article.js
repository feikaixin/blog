
import React, { Component } from 'react'
import Article from '../../components/Article';

const data = [1,2];
export default class Index extends Component {
  // static async getInitialProps({query}) {
  //   console.log(query.article_id);
  // }
  render() {
    return (
      <div>
        {
          data ? <Article.Detail data={data}></Article.Detail> : ''
        }
      </div>
    )
  }
}
