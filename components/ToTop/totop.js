import React from "react";
import Icon from "../Icon";

const Style = () => (
  <style jsx="true">{`
    div.wraper {
      cursor: pointer;
      transition: 300ms all ease;
      position: fixed;
      right: 30px;
      bottom: 30px;
      opacity: 0;
      transition: all 0.3s;
    }
    div.toTop {
      width: 40px;
      height: 40px;
      background-color: #663300;
      border-radius: 50%;
      color: #fff;
      text-align: center;
      line-height: 40px;
      transition: all 0.3s;
      font-size: 0;
    }
    div.display {
      opacity: 1;
    }
    div.toTop i {
      vertical-align: middle;
      font-size: 14px;
    }
    div.toTop:hover {
      background-color: #ff6633;
    }
  `}</style>
);
export default class ToTop extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    display: false
  };

  handleTop = () => {
    let timer = null;
    timer = setInterval(() => {
      // 获取顶部距离
      const osTop = parseInt(
        document.documentElement.scrollTop || document.body.scrollTop,
        10
      );
      const ispeed = 4;
      const scrollDistance = Math.floor(-osTop / ispeed);
      const nowDistance = osTop + scrollDistance;
      document.documentElement.scrollTop = document.body.scrollTop = nowDistance;
      // 清除定时器
      if (scrollDistance + scrollDistance === 0) clearInterval(timer);
    }, 30);
  };

  handleScroll = e => {
    const nowHeight = window.pageYOffset;
    let display = nowHeight !== 0 ? true : false;
    this.setState({
      display
    });
  }

  componentDidMount() {
    const nowHeight = window.pageYOffset;
    let display = nowHeight !== 0 ? true : false;
    this.setState({
      display
    });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { display } = this.state;
    return (
      <div
        className={display ? "wraper display" : "wraper"}
        onClick={this.handleTop}
      >
        <div className="toTop">
          <i>
            <Icon icon="chevron-up" />
          </i>
        </div>
        <Style />
      </div>
    );
  }
}
