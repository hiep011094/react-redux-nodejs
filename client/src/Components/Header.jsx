import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// import { dataMainNav } from "../FakeData/FakeMenu";
import {fetchCustomerByName} from "../api"

// let useClickOutside = (handler) => {
//   let domNode = useRef();
//   useEffect(() => {
//     let maybehandler = (e) => {
//       if (
//         !domNode.current.contains(e.target) &&
//         !document.querySelector(".c-menutoggle").contains(e.target)
//       ) {
//         handler();
//       }
//     };
//     document.addEventListener("mousedown", maybehandler);
//     return () => {
//       document.removeEventListener("mousedown", maybehandler);
//     };
//   });
//   return domNode;
// };

const Header = (props) => {

  const [dataMainNavs,setDataMainNavs] = useState();

  const [activeMenu, setActiveMenu] = useState();

  const activeMenuSun = useRef([]);
  

  const checkItem = dataMainNavs.findIndex(item =>item.slug === props.location.pathname.replace('/',''));
  // console.log(checkItem);
  
  useEffect(() => {
    fetchCustomerByName("menuMain").then(data =>{   
      setDataMainNavs(data.data);
      console.log(data.data);
    }).catch(error =>{
      console.log(error);
    })    
  }, [])
  
  console.log(dataMainNavs);

  const handleMouseOn = (index,cate) => {
    if(cate){
      let count = activeMenuSun.current[index].childNodes.length;
      let _height = activeMenuSun.current[index].childNodes[0].clientHeight;
      activeMenuSun.current[index].classList.add('active');
      activeMenuSun.current[index].style.height = count * _height + 35 + "px";
    }    
  }
  const handleMouseOff = (index,cate) => {
    if(cate){
      activeMenuSun.current[index].classList.remove('active');
      activeMenuSun.current[index].style.height = 0;
    }
  }

  return (
    <div className="c-header">
      <div className="l-container">
        <div className="c-header__left">
          <h1 className="c-logo">
            <Link to="/">Xi Store</Link>
          </h1>
          <span className="c-caption">SINCE 2019</span>
        </div>
        <div id="gnavi" className={`c-gnavi`}>
          <ul>
            {dataMainNavs && dataMainNavs.map((item, index) => (
              <li
                key={index}
                className={`${item.category ? "over " : ""} ${checkItem === index && "active"}`}
                onMouseEnter={() =>( handleMouseOn(index,item.category))} 
                onMouseLeave={() => (handleMouseOff(index,item.category))} 
              >
                <Link to={item.slug}>
                  {item.name}
                </Link>
                {item.category && (
                  <ul  ref={(element) => {activeMenuSun.current[index] = element}}
                    className="c-gnavi__sub"
                  >
                    {item.category.map((itemChild, index) => (
                      <li key={index}>
                        <Link
                          to={`${item.slug}/${itemChild.slug}`}
                        >
                          {itemChild.nameCate}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className={`c-menutoggle`} >
          <span></span>
        </div>
      </div>
    </div>
  );
};





export default Header;
