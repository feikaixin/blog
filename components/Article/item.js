import React from "react";
import Title from "../Title";
import WithLink from "../withLink";
const Style = () => (
  <style jsx="true">{`
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70%;
      height: 320px;
      margin: 0 auto;
      cursor: pointer;
    }
    .left {
      width: 60%;
      height: 100%;
    }
    .right {
      width: 40%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .middle_line {
      width: 1px;
      height: 70px;
      background: #ccc;
      margin: 0 auto;
    }
    .left img {
      width: 100%;
      height: 320px;
    }
    .order {
      order: 2;
    }
  `}</style>
);

export default class Artical extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isLeft, data } = this.props;
    return (
      <WithLink href='/blog/article' as={`/blog/${data.article_id}`} paramsData={{id: data.article_id}}>
        <div>
          <div className="item">
            <div className={isLeft ? "left" : "left order"}>
              <img src='/static/images/default.jpg' data-src={data.bg_img} className='bg_img' alt="/" />
            </div>
            <div className="right">
              <Title data={data} />
            </div>
          </div>
          <div className="middle_line" />
          <Style />
        </div>
      </WithLink>
    );
  }
}
