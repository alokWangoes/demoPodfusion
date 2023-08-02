import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="">
        <div className="row">
          <div className="col-md-3 col-sm-12 col-xl-3">
            <div className="logo-img">
              <img src="/logo.svg" alt="logo-img" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-xl-6">
            <div className="top-wrp">
              <div className="social-icons">
                <img src="/linkdin.svg" alt="linkedlin" />
                <img src="/facebook.svg" alt="linkedlin" />
                <img src="/twitter.svg" alt="linkedlin" />
              </div>
              <div className="flag-wrp">
                <img src="/Flags.png" alt="flag" />
                <h4>EN</h4>
                <img src="/flat-color-icons_settings.png" alt="icon-settign" />
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 col-xl-3 right-section">
            <div className="btn-group">
              <a href="#" className="button-primary">
                Login
              </a>
              <a href="#" className="button">
                Sign Up
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-xl-3"></div>
          <div className="bottom-wrp col-md-6 col-xl-6">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">How it works</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-xl-3"></div>
        </div>
      </div>
    </>
  );
};
export default Header;
