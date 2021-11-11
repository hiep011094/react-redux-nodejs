import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSocials } from '../redux/actions/socialsActions'
import { socialsState$ } from "../redux/selectors/socialsSelectors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const Social = () => {
  const dispatch = useDispatch();

  const socials = useSelector(socialsState$);

  useEffect(() => {    
    dispatch(getSocials.getSocialsReq());
  }, [dispatch]);

  const socialDatafun = () => {
    const social = [];
    if(socials){
      socials.forEach((item) => {
        const dt = { ...item, icon: item.name.toLowerCase() };
        social.push(dt);
      });
    }
    return social;
  }
  const social = socialDatafun();  
  

  return (
    <ul className="c-social">
      {social.map((item,index) => (
        <li key={index}>
          <a href={item.url} className={item.icon}>
            <FontAwesomeIcon icon={["fab", item.icon]} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
