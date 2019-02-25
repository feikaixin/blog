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
  componentDidMount() {
    this.layLoad();
  }
  layLoad() {
    let imageArr = Array.prototype.slice.call(
      document.querySelectorAll(".bg_img")
    );
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
          // 如果元素可见
          if (entry.isIntersecting) {
            let Image = entry.target;
            Image.src = Image.dataset.src;
            Image.classList.remove(".bg_img");
            lazyImageObserver.unobserve(Image);
          }
        });
      });
      imageArr.forEach(item => {
        lazyImageObserver.observe(item);
      });
    } else {
      this.inViewShow();
      this._throttleFn = this.throttle(this.inViewShow);
      document.addEventListener("scroll", this._throttleFn);
    }
  }
  throttle(fn, delay = 15, mustRun = 30) {
    let t_start = null;
    let timer = null;
    let context = this;
    return function() {
      let t_current = +new Date();
      let args = Array.prototype.slice.call(arguments);
      clearTimeout(timer);
      if (!t_start) {
        t_start = t_current;
      }
      if (t_current - t_start > mustRun) {
        fn.apply(context, args);
        t_start = t_current;
      } else {
        timer = setTimeout(() => {
          fn.apply(context, args);
        }, delay);
      }
    };
  }

  inViewShow() {
    const imageArr = Array.prototype.slice.call(
      document.querySelectorAll(".bg_img")
    );
    let len = imageArr.length;
    for (let i = 0; i < len; i++) {
      let currentImage = imageArr[i];
      const rect = currentImage.getBoundingClientRect();
      // 出现在视野的时候加载图片
      if (rect.top < document.documentElement.clientHeight) {
        currentImage.src = currentImage.dataset.src;
        // 移除掉已经显示的
        imageArr.splice(i, 1);
        len--;
        i--;
        if (imageArr.length === 0) {
          // 全部加载完，移除滚动事件监听
          document.removeEventListener("scroll", this._throttleFn);
        }
      }
    }
  }
  componentDidUpdate() {
    this.layLoad();
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this._throttleFn);
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
