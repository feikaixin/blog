import React from "react";
import Head from "components/Head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
const Button = dynamic(import("../components/Button"));
// library.add(faGhost);
const Style = () => (
  <>
    <style jsx>{`
      .index-page {
        width: 100vw;
        height: 100vh;
        text-align: center;
      }
      .blog_bg {
        width: 100vw;
        height: 50vh;
        vertical-align: middle;
      }
      .avator {
        border-radius: 50%;
        margin-top: -50px;
      }
      h1 {
        letter-spacing: 4px;
        color: #663300;
        font-family: "STXingkai";
      }
      p {
        color: #ff6633;
        font-family: "STXingkai";
        font-size: 20px;
      }
      .show {
        display: flex;
        width: 100vw;
        height: 10vh;
        margin-top: 20px;
        justify-content: center;
        align-items: center;
      }
      li {
        display: inline-block;
        margin: 10px;
      }
      a {
        text-decoration: none;
      }
    `}</style>
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
      }
      body {
        font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
      }
    `}</style>
  </>
);

const ButtonData = [
  {
    name: "HOME",
    icon: "home",
    href: "/"
  },
  {
    name: "BLOG",
    icon: "home",
    href: "/blog"
  },
  {
    name: "RESUME",
    icon: "home",
    href: "/resume"
  },
  {
    name: "ABOUT",
    icon: "ghost",
    href: "/about"
  },
  {
    name: "GITHUB",
    icon: ['fab', 'github'],
    href: "https://github.com/feikaixin"
  }
];
export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="index">
        <Head title="主页" />
        <Style />
        <div className="index-page">
          <img
            className="blog_bg"
            src="/static/images/blog_background.png"
            alt="/"
          />
          <img className="avator" src="/static/images/avator.png" alt="/" />
          <h1>雨中·漫步</h1>
          <p>最想去的地方怎能在半路返航</p>
          <div className="show">
            {ButtonData.map(item => (
              <li>
                <Button href={item.href}>
                  <FontAwesomeIcon icon={item.icon} style={{marginRight:'4px'}}/>
                  {item.name}
                </Button>
              </li>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
