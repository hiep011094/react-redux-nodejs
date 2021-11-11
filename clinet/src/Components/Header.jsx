import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { dataMainNav } from "../FakeData/FakeMenu";

let useClickOutside = (handler) => {
  let domNode = useRef();
  useEffect(() => {
    let maybehandler = (e) => {
      if (
        !domNode.current.contains(e.target) &&
        !document.querySelector(".c-menutoggle").contains(e.target)
      ) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybehandler);
    return () => {
      document.removeEventListener("mousedown", maybehandler);
    };
  });
  return domNode;
};

const Header = (props) => {
  const headerRef = useRef(null);
  const [menuToggle, setMenuToggle] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("active");
      } else {
        headerRef.current.classList.remove("active");
      }
    });
    return () => window.removeEventListener("scroll", () => {});
  }, []);

  useEffect(() => {
    if (menuToggle === false) {
      const div = document.querySelector(".c-gnavi__sub");
      div.classList.remove("active");
      div.style.height = 0;
    }
  }, [menuToggle]);

  function handelToggle() {
    setMenuToggle(!menuToggle);
  }

  let domNode = useClickOutside(() => {
    setMenuToggle(false);
  });

  return (
    <div ref={headerRef} className="c-header">
      <div className="l-container">
        <div className="c-header__left">
          <h1 className="c-logo">
            <Link to="/">Xi Store</Link>
          </h1>
          <span className="c-caption">SINCE 2019</span>
        </div>
        <Menu
          onToggleClick={handelToggle}
          gnavi={domNode}
          data={dataMainNav}
          active={menuToggle === true ? " active" : ""}
        />
        <div
          className={`c-menutoggle${menuToggle === true ? " active" : ""}`}
          onClick={handelToggle}
        >
          <span></span>
        </div>
      </div>
    </div>
  );
};

//menu

const Menu = ({ data, active, gnavi, onToggleClick }) => {
  const { pathname } = useLocation();

  const activeNav = data.findIndex((e) => e.slug === pathname.replace("/", ""));

  const hoverToggle = useRef([]);

  function onMouseOver(index, dataSub) {
    if (window.outerWidth > 768 && dataSub) {
      let h =
        35 +
        hoverToggle.current[index].firstChild.offsetHeight * dataSub.length;
      hoverToggle.current[index].style.height = h + "px";
      hoverToggle.current[index].classList.add("active");
    }
  }

  function onMouseOut(index, dataSub) {
    if (window.outerWidth > 768 && dataSub) {
      hoverToggle.current[index].style.height = 0;
      hoverToggle.current[index].classList.remove("active");
    }
  }

  let clickSubRef = -1;
  function onClickSubMenu(index, dataSub) {
    if (dataSub) {
      hoverToggle.current[index].classList.toggle("active");
      if (clickSubRef !== -1) {
        if (clickSubRef !== index) {
          hoverToggle.current[clickSubRef].classList.remove("active");
          hoverToggle.current[clickSubRef].style.height = 0;
        }
      }
      if (hoverToggle.current[index].classList.contains("active") === true) {
        let h =
          hoverToggle.current[index].firstChild.offsetHeight * dataSub.length;
        hoverToggle.current[index].style.height = h + "px";
      } else {
        hoverToggle.current[index].style.height = 0;
      }
    }
    clickSubRef = index;
  }

  return (
    <div id="gnavi" ref={gnavi} className={`c-gnavi ${active}`}>
      <ul>
        {data.map((item, index) => (
          <li
            key={index}
            onMouseOver={() => onMouseOver(index, item.category)}
            onMouseOut={() => onMouseOut(index, item.category)}
            onClick={() => onClickSubMenu(index, item.category)}
            className={`
                ${item.category ? "over " : ""}
                ${index === activeNav ? "active" : ""}
              `}
          >
            <Link onClick={onToggleClick} to={item.slug}>
              {item.name}
            </Link>
            {item.category && (
              <ul
                ref={(element) => {
                  hoverToggle.current[index] = element;
                }}
                className={`c-gnavi__sub`}
              >
                {item.category.map((itemChild, index) => (
                  <li key={index}>
                    <Link
                      onClick={onToggleClick}
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
  );
};

export default Header;
