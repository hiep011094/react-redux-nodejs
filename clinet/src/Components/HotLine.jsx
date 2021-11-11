import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMobileAlt, faArrowsAltH } from "@fortawesome/free-solid-svg-icons";

library.add(faMobileAlt, faArrowsAltH);

const HotLine = (props) => {
  return (
    <div className="c-hotline">
      <p className="ttl">HOTLINE</p>
      <div className="phone">
        {props.dataHotLine.map((item) => (
          <div className="phone__item" key={item.id}>
            <FontAwesomeIcon icon={faArrowsAltH} fill="6b2800" />
            <a href={"tel:" + item.phone}>
              <FontAwesomeIcon icon={faMobileAlt} />
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

HotLine.propTypes = {
  dataHotLine: PropTypes.array.isRequired,
};

export default HotLine;
