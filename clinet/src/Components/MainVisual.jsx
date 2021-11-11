import React from "react";
import PropTypes from "prop-types";

const MainVisual = (props) => {
  const [dataMv] = props.data;
  return (
    <div className="c-mainvisual">
      <div className="l-container c-mainvisual__inner">
        <h2 className="c-ttl">{dataMv.title}</h2>
        <p>{dataMv.decription}</p>
      </div>

      <div className="c-videomv">
        <video
          src={dataMv.video}
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

MainVisual.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MainVisual;
