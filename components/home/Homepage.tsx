"use client"
import Footerbox from "../footer/Footerbox";
import Header from "../header/Header";
import Subscribe from "../subscribe/Subscribe";
// import Subscribe from "../subscribe/Subscribe";
import Banner from "./Banner";

const Homepage = () => {
  return (
    <>
      <div className="main-wrp">
          <Header />
          <Banner />
      </div>
      <Subscribe/>
      {/* <Footerbox  /> */}

    </>
  );
};

export default Homepage;
