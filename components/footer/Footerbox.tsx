import "./Footerbox.css";
const Footerbox = () => {
  return (
    // <div className="container row  mt-5 mx-5 inline footer-main">
    //   <div className="col-md-4  ">
    //     <img src="/logo.svg" alt="" width={250} /> <br />
    //     <p className="">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
    //       expedita odio veritatis eos similique. Officia repellendus nihil dicta
    //       pariatur quisquam!
    //     </p>
    //   </div>

    //   <div className="col-md-8   ">
    //     <div className="input-box row text-light">
    //       <span className="quick-link col-md-4 ">
    //         <p className="quick-link-typography">Quick link</p>
    //       </span>
    //       <span className="stay-updated col-md-4">
    //         <p className="quick-link-typography">Stay updated </p>
    //       </span>{" "}
    //       <span className="icons col-md-4"></span>
    //     </div>
    //     <div className="row">
    //       <div className="col-md-2">
    //         <ul className="footer-links">
    //           <li>Home</li>
    //           <li>Home</li>
    //           <li>Home</li>
    //           <li>Home</li>
    //           <li>Home</li>
    //           </ul>
    //       </div>
    //       <div className="col-md-2">
    //       <ul className="footer-links">
    //           <li>Home</li>
    //           <li>Home</li>
    //           <li>Home</li>
    //           <li>Home</li>
    //           <li>Home</li>
    //           </ul>
    //       </div>
    //       <div className="col-md-8"></div>
    //     </div>
    //   </div>
    // </div>

    <div className="footer-main row text-center">
      <div className="col-md-3">
        <div className="footer-logo ">
          <img src="/logo.svg" alt="" />
        </div>
        <div className="footer-text">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
            rerum illo officiis debitis necessitatibus, sapiente quasi modi
            cumque labore nulla maxime recusandae harum quae corporis, quibusdam
            nesciunt consectetur omnis nihil.
          </p>
        </div>
      </div>
      <div className="col-md-9">
        <div className="footer-box text-white">
            <span>Quick links</span>
            <span>Stay updated</span>

        </div>
        <div className="row flex">
          <span className="footer-links">
            <ul>
                <li>Home</li>
                <li>Home</li>
            </ul>
          </span>
          <span className="footer-links2"></span>
        </div>
      </div>
    </div>
  );
};

export default Footerbox;
