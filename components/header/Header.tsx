import Link from "next/link";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="container" style={{zIndex: "999"}}>
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
                <img src="/flat-color-icons_settings.svg" alt="icon-settign" />
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 col-xl-3 right-section">
<<<<<<< HEAD
            <div className="btn-group">
              <Link href="/login">
                <span className="button-primary">Login</span>
              </Link>

=======
            {/* <div className="btn-group"> */}
              <a href="#" className="button-primary">
                Log in
              </a>
>>>>>>> f438341690e3ba403fc9f8b848e6f03a0f18df18
              <a href="#" className="button">
                SIGN UP
              </a>
            {/* </div> */}
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
                <img src="/flat-color-icons_settings.svg" alt="icon-settign" />
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
