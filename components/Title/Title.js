export default ({ data }) => (
  <div className="title">
    <span>{data.date}</span>
    <h2>{data.title}</h2>
    <p>{data.content}</p>
    <style jsx="true">{`
      .title {
        width: 70%;
        height: 60%;
      }
      .title span {
        color: #999;
        font-size: 12px;
      }
      .title h2 {
        font-size: 30px;
        color: #333;
        line-height: 1.4;
        font-weight: normal;
      }
      .title p {
        color: #555;
        font-size: 14px;
        line-height: 1.8;
      }
    `}</style>
  </div>
);
