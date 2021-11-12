import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import HotLine from "./HotLine";

import { dataHotLine } from "../FakeData/FakeHotline";
import { dataInfo, dataMenuFooter } from "../FakeData/FakeFooter";
import List from "./List";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const totop = useRef();
  const scrollFooter = useRef();
  useEffect(() => {
    const toggleToTop = ()=>{
      let _i = 0;      
      (window.outerWidth > 768) ? _i=85: _i=45;
      let checkScrollFooter = scrollFooter.current.getBoundingClientRect().top  -  window.outerHeight + _i;      
      if (window.scrollY > 100) {
        totop.current.classList.add('active');
        if(checkScrollFooter < 0){
          scrollFooter.current.classList.add('active');
        }else{
          scrollFooter.current.classList.remove('active');
        }
      }else{
        totop.current.classList.remove('active'); 
      } 
    }
    document.addEventListener('scroll',toggleToTop);
    return () => {
      document.removeEventListener('scroll',toggleToTop);
    }
  })

  const handleScrollTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  return (
    <div className="c-footer" ref={scrollFooter}>
      <div className="l-container">
        <List col={3}>
          <div>
            <div className="c-logo">
              <Link to="/">Xi Store</Link>
            </div>
            <span className="c-caption">SINCE 2019</span>
            <div
              dangerouslySetInnerHTML={{ __html: dataInfo[0].content }}
            ></div>
          </div>
          <div>
            <h3>Danh sách trang</h3>
            <ul>
              {dataMenuFooter.map((item) => (
                <li key={item.id}>
                  <Link to={item.slug}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div
              dangerouslySetInnerHTML={{ __html: dataInfo[1].content }}
            ></div>
            <HotLine dataHotLine={dataHotLine} />
          </div>
        </List>
      </div>
      <div className="coppy">
        <p>Copyright (C) 2020 Xi Store All Rights Reserved.</p>
      </div>
      <button ref={totop} onClick={handleScrollTop} className="c-totop"><FontAwesomeIcon icon={faArrowUp} /></button>
    </div>
  );
};

export default Footer;
