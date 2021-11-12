import React from "react";

const MainVisual = ({data}) => {  

  return (
    <div className="c-mainvisual">
      <div className="l-container c-mainvisual__inner">
        <h2 className="c-ttl">{data&&data.title}</h2>
        <p>{data&&data.decription}</p>
      </div>

      <div className="c-videomv">
        <video
          src={data&&data.video}
          controls={true}
          type="video/mp4"
          loop
          muted
          autoPlay
        ></video>
      </div>
    </div>
  );
};


export default MainVisual;
