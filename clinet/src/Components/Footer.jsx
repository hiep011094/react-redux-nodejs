import React from "react";
import { Link } from "react-router-dom";
import HotLine from "./HotLine";

import { dataHotLine } from "../FakeData/FakeHotline";
import { dataInfo, dataMenuFooter } from "../FakeData/FakeFooter";
import List from "./List";

const Footer = () => {
  return (
    <div className="c-footer">
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
    </div>
  );
};

export default Footer;
