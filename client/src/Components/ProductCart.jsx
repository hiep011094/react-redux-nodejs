import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import numberWithCommas from "../utils/numberWithCommas";

const ProductCart = ({ img01, img02, name, price, priceOld, slug }) => {
  return (
    <div className="c-product">
      <Link to={`/catalog/${slug}`}>
        <div className="c-product__img">
          <img src={img01} alt={name} />
          <img src={img02} alt={name} />
        </div>
        <div className="c-product__txt">
          <p className="ttl">{name}</p>
          <div className="price">
            <span className="price_news">
              {numberWithCommas(price)} <span>vnđ</span>
            </span>
            <span className="price_old">
              {numberWithCommas(priceOld)} <span>vnđ</span>
            </span>
          </div>
        </div>
      </Link>
      <div className="c-product__btn">
        <button className="c-btncart">
          <FontAwesomeIcon icon={faShoppingCart} /> Chọn Mua
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
