import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";


const PolicyCart = ({ name, description, icon }) => {


 
  return (
    <div className="c-policycart">
      <div className="c-policycart__icon">
        <FontAwesomeIcon icon={Icons[icon]} />
      </div>
      <div className="c-policycart__txt">
        <p>{name}</p>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default PolicyCart;
