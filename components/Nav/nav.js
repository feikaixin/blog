import React from "react";
import WithLink from "../withLink";
import Icon from "../Icon";
const Style = () => (
  <style jsx="true">{`
    .nav {
      width: 100%;
      height: 60px;
      position: fixed;
      left: 0;
      top: 0;
      display: flex;
      justify-content:center;
      align-items: center;
    }
    .home{
      flex-grow: 0.5;
      text-align: center;
    }
    .home a{
      color: #666;
    }
    .music{
      flex-grow: 0.5;
      color: #666;
      cursor: pointer;
    }
    .title {
      width: 70%;
      text-align: center;
      color: #666;
      font-size: 14px;
    }
    .qr_code{
      flex-grow: 1;
      text-align: right;
      padding-right:20px;
      color: #666;
      cursor: pointer;
    }
    .music {
      font-weight: 10px;
    }
    .home
  `}</style>
);
export default class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isplay: false
    }
  }

  changeStatus = () => {
    this.setState(prevState => ({
      isplay: !prevState.isplay
    }))
  }
  getQrcode = () => {
    console.log('a')
  }

  render() {
    const { href, paramsData, children } = this.props;
    const { isplay } = this.state;
    return (
      <>
        <div className="nav">
          <div className="home">
            <WithLink href="/index">
              <a>
                <Icon icon="home" />
              </a>
            </WithLink>
          </div>
          <div className="music">
            <i title='播放/暂停' onClick={this.changeStatus}><Icon icon={isplay?'pause':'play'} /></i>
          </div>
          <div className="title">
            <span>{this.props.title}</span>
          </div>
          <div className="qr_code">
            <i title='获取二维码' onClick={this.getQrcode}><Icon icon='qrcode'/></i>
          </div>
        </div>
        <Style />
      </>
    );
  }
}
