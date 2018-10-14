import React from "react";
import WithLink from "../withLink";

const Style = () => (
  <style jsx="true">{`
    a.button {
      color: #ff6633;
      font-size: 16px;
      font-family: PingFangSC-Regular, sans-serif;
    }
    a.button:hover{
      color: red;
      text-decoration: underline;
    }

  `}</style>
);
export default class IndexButton extends React.Component {
  renderButton = () => {
    const { children } = this.props;
    return <div className="button">{children}</div>;
  };

  renderLink = () => {
    const { children, href, paramsData } = this.props;
    return (
      <WithLink href={href} paramsData={paramsData}>
        <a className="button">{children}</a>
      </WithLink>
    );
  };

  render() {
    const { href } = this.props;
    return (
      <div>
        {href ? this.renderLink() : this.renderButton()}
        <Style />
      </div>
    );
  }
}
