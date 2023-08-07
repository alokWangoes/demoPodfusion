import Copyright from "../footer/Copyright";
import Footerbox from "../footer/Footerbox";
import Header from "../header/Header";
import Banner from "./Banner";
import Mainsection from "./Mainsection";
import SubscriptionPlan from "./SubscriptionPlan";

const Homepage = () => {
  return (
    <>
      <div className="main-wrp">
        <Header />
        <Banner />
      </div>
      <Mainsection />
      <SubscriptionPlan />
      <Footerbox />
      <Copyright />
    </>
  );
};

export default Homepage;
