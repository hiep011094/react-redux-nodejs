import React,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Helmet from "./Helmet";
import Section, { SectionTitle, SectionBody } from "../Components/Section";
import List from "../Components/List";
import MainVisual from "../Components/MainVisual";
import Social from "../Components/Social";
import SlideHero from "../Components/SlideHero";
import PolicyCart from "../Components/PolicyCart";
import ProductCart from "../Components/ProductCart";
import Blog from "../Components/Blog";

import { getPolicies } from "../redux/actions/policiesAction";
import { policiesState$ } from "../redux/selectors/policiesSelectors";
import { getProducts } from "../redux/actions/productsAction"
import {productsState$} from "../redux/selectors/productsSelectors"

// import { dataMainVisual } from "../FakeData/FakaMainvisual";
import FakeblogData from "../FakeData/FakeBlog";

import {fetchCustomerByName} from "../api"

const Home = () => { 
  const dispatch = useDispatch();

  const [maivisual,setMaivisual] = useState();

  useEffect(() => {
    fetchCustomerByName("maivisual").then(data =>{   
      setMaivisual(data.data);
    }).catch(error =>{
      console.log(error);
    })    
  }, [])

  useEffect(() => {    
    dispatch(getPolicies.getPoliciesReq());
  }, [dispatch]);  
  const policies = useSelector(policiesState$);

  useEffect(() => {
    dispatch(getProducts.getProductsReq());
  }, [dispatch])  
  const products = useSelector(productsState$);

  const getCount = (count,products) => {
    const max = products.length - count;
    const min = 0;
    const start = Math.floor(Math.random() * (max - min) + min);
    return products.slice(start, start + count);
  }; 
  
    
  return (
    <Helmet title="Trang chủ">
      <div className="p-top">
        {/** Hero MainVisual */}
        <MainVisual data={maivisual} />
        {/** end MainVisual */}

        <div className="p-top__inner">
          {/** Social */}
          <Social />
          {/** end Social */}
          {/** SlideHero  */}
          <SlideHero autoPlay={true} speed={5000} />
          {/** end  */}
          {/** PolicyCart  */}
          <Section>
            <SectionBody>
              <List col={4}>
                {policies.map((item, index) => (
                  <div key={index}>
                    <PolicyCart
                      name={item.name}
                      description={item.description}
                      icon={item.icon}
                    />
                  </div>
                ))}
              </List>
            </SectionBody>
          </Section>
          {/** end Slide */}
          {/** Product  */}
          <Section className="p-top__product1">
            <SectionTitle>Top sản Phẩm Bán Chạy Trong Tuần</SectionTitle>
            <SectionBody>
              <List col={4}>
                {getCount(4,products).map((item, index) => (
                  <div key={index}>
                    <ProductCart
                      name={item.title}
                      img01={item.images[0]}
                      img02={item.images[1]}
                      price={item.price_news}
                      priceOld={item.price_old}
                      slug={item.slug}
                    />
                  </div>
                ))}
              </List>
            </SectionBody>
          </Section>
          <Section className="p-top__product2">
            <SectionTitle>Sản Phẩm Mới</SectionTitle>
            <SectionBody>
            <List col={4}>
                {getCount(4,products).map((item, index) => (
                  <div key={index}>
                    <ProductCart
                      name={item.title}
                      img01={item.images[0]}
                      img02={item.images[1]}
                      price={item.price_news}
                      priceOld={item.price_old}
                      slug={item.slug}
                    />
                  </div>
                ))}
              </List>
            </SectionBody>
          </Section>
          {/** end  */}
          {/** Blog  */}
          <Section className="p-top__blog">
            <SectionTitle>Bài Viết Blog</SectionTitle>
            <SectionBody>
              <List col={2}>
                {FakeblogData.getblogs(4).map((item, index) => (
                  <div key={index}>
                    <Blog
                      name={item.title}
                      img={item.image01}
                      slug={item.slug}
                      description={item.description}
                      cate={item.cate}
                    />
                  </div>
                ))}
              </List>
            </SectionBody>
          </Section>
          {/** end  */}
        </div>
      </div>
    </Helmet>
  );
};

export default Home;
