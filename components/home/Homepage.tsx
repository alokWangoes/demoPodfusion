import Footerbox from "../footer/Footerbox";
import Header from "../header/Header";
import Banner from "./Banner";
import Mainsection from "./Mainsection";

const Homepage = () => {
  return (
    <>
      <div className="main-wrp">
          <Header />
          <Banner />
      </div>
          <Mainsection/>
    </>
  );
};

export default Homepage;
