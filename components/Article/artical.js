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
      margin-bottom: 70px;
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
    const { isLeft } = this.props;
    const data = {
      date: 1539760495845,
      title: '费凯鑫最帅',
      content: '最想去的地方怎么能在半路返航'
    }
    return (
      <WithLink href='/index'>
        <div className="item">
          <div className={isLeft ? "left" : "left order"}>
            <img src="/static/images/blog_img_1.png" alt="/" />
          </div>
          <div className="right">
            <Title data={data}/>
          </div>
          <Style />
        </div>
      </WithLink>
    );
  }
}
