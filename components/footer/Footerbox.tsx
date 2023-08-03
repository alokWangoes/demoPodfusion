import "./Footerbox.css"
const Footerbox = () => {
  return (
    <div className="footer-main">
        <div className="container">

      <div className="row">
        <div className="col-md-3 mt-4 ">
          <img src="/logo.svg" alt="" />
          <div className="mt-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              odit?
            </p>
          </div>
        </div>
        <div className="col-md-9">
            <div className="box-wrp mt-5 ">
                <span className="text-white">Quick link</span>
                <span className="text-white">Update </span>
            </div>
        </div>
      </div>
        </div>
    </div>
  );
};

export default Footerbox;
