import React, { PureComponent } from "react";
import Link from "next/link";

//判断是不是站内链接
const isLink = path =>
  path && (typeof path === "string" && !path.includes("http"));

const isHref = path =>
  path && (typeof path === "string" && path.includes("http"));

export default class extends PureComponent {
  handleClick = () => {
    const { onClick, clickParams } = this.props;
    if (onClick) {
      onClick(clickParams);
    }
  };

  render() {
    const { href, children, paramsData } = this.props;
    if (isLink(href)) {
      return (
        <div>
          <Link
            prefetch
            href={{
              pathname: href,
              query: paramsData
            }}
          >
            {children}
          </Link>
          <style jsx>{`
            div {
              width: 100%;
              height: 100%;
            }
            a {
              line-height: 160%;
              height: 100%;
              width: 100%;
              display: inline-block;
              text-decoration-style: none;
            }
          `}</style>
        </div>
      );
    }
    if (isHref) {
      return <a href={href}>{children}</a>;
    }

    return (
      <div
        onClick={this.onClick}
        tabIndex="0"
        role="button"
        onKeyDown={this.handleClick}
        className={className}
        style={style}
      >
        {children}
      </div>
    );
  }
}
