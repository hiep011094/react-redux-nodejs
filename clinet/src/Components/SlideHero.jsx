import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getSliderHeros } from "../redux/actions/sliderHerosAction"
import {sliderHerosState$} from "../redux/selectors/sliderHerosSelectors"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";


library.add(fab, faAngleLeft, faAngleRight);

const SlideHero = ({autoPlay, speed }) => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSliderHeros.getSliderHerosReq())
  }, [dispatch])


  const data = useSelector(sliderHerosState$);

  const speedAf = speed ? speed : 3000;

  const [active, setActive] = useState(0);

  const onNext = useCallback(() => {
    const iEnd = data.length - 1;
    setActive(active === iEnd ? 0 : active + 1);
  }, [active, data]);

  const onPrev = () => {
    const iEnd = data.length - 1;
    setActive(active === 0 ? iEnd : active - 1);
  };

  useEffect(() => {
    if (autoPlay) {
      const autoSlider = setInterval(() => {
        onNext();
      }, speedAf);
      return () => {
        clearInterval(autoSlider);
      };
    }
  }, [active, onNext, speedAf, autoPlay]);

  return (
    <div className="c-slider01">
      {data.map((item, index) => (
        <SlideHeroItem key={index} data={item} active={index === active} />
      ))}
      {data.length !== 1 && (
        <ul className="c-slider01__control">
          <li onClick={onPrev} className="prev">
            <FontAwesomeIcon icon={faAngleLeft} />
          </li>
          <li>
            {active + 1}/{data.length}
          </li>
          <li onClick={onNext} className="next">
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
        </ul>
      )}
    </div>
  );
};


const SlideHeroItem = (props) => {
  const divStyle = {
    color: {
      color: props.data.color,
    },
    bg: {
      background: props.data.color,
    },
  };
  //   console.log(props.active);

  return (
    <div className={`c-slider01__item ${props.active ? "active" : ""}`}>
      <div className="c-slider01__info">
        <div className={`c-ttl01 ani`}>
          <span style={divStyle.color}>{props.data.title}</span>
        </div>
        <div className={`description`}>
          <span>{props.data.description}</span>
        </div>
        <div style={divStyle.bg} className="c-btn01">
          <Link to={props.data.path}>Xem Chi Tiết</Link>
        </div>
      </div>
      <div className="c-slider01__img">
        <img src={props.data.image} alt={props.data.title} />
        <div style={divStyle.bg} className="shape"></div>
      </div>
    </div>
  );
};

export default SlideHero;
