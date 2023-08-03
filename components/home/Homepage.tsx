"use client"
import Footerbox from "../footer/Footerbox";
import Header from "../header/Header";
import Subscribe from "../subscribe/Subscribe";
// import Subscribe from "../subscribe/Subscribe";
import Banner from "./Banner";
import Mainsection from "./Mainsection";

const Homepage = () => {
  return (
    <>
      <div className="main-wrp">
          <Header />
          <Banner />
      </div>
<<<<<<< HEAD
      <Subscribe/>
      {/* <Footerbox  /> */}

=======
          <Mainsection/>
>>>>>>> f438341690e3ba403fc9f8b848e6f03a0f18df18
    </>
  );
};

export default Homepage;
