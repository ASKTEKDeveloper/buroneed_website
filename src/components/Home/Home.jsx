import React from "react";
import PromotionalTwo from "./Promotional";
import Banner from "./Banner";
import ProductSlider from "./ProductSlider";
import PromotionalOneBuroNeel from "../../templateComponents/PromotionalOneBuroNeel";
import FeaturedOneHome from "../../templateComponents/FeaturedOneHome";
import PromotionalBanner1 from "./PromotionalBanner1";
import Promotional2 from "./Promotional2";

const Home = () => {
  return (
    <>
      <Banner />
      <PromotionalOneBuroNeel />
      <FeaturedOneHome title="Stationeries" categoryid={2} />     
      <Promotional2 />
      <ProductSlider title="Stationeries" categoryid={1} />
      <PromotionalBanner1 />
      <ProductSlider title="Computer Accessories" categoryid={3} />
    </>
  );
};

export default Home;
