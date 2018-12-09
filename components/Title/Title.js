import moment from "moment";
export default ({ data }) => (
  <div className="title">
    <span>{moment(data.update_time).format("MMMM Do,YYYY")}</span>
    <h2>{data.title}</h2>
    <p>{data.description}</p>
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
        font-size: 24px;
        color: #333;
        line-height: 1.4;
        font-weight: normal;
      }
      .title p {
        color: #555;
        font-size: 14px;
        line-height: 1.8;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
    `}</style>
  </div>
);
