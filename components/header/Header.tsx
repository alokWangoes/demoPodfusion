import Link from "next/link";
import "./Header.css";
import { useState } from "react";
const Header = () => {
 
  const [open , setOpen] = useState <any> (false)
  return (
    <>
      <div className="container" style={{ zIndex: "999" }}>
      <div className="text-right mx-5 " style={{display : open ? "block" : "none" , }} >
            
      </div>
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
                <h4 onClick={ ()=>setOpen(!open)}>EN</h4>
                <img src="/flat-color-icons_settings.svg" alt="icon-settign" />
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 col-xl-3 right-section">
            {/* <div className="btn-group"> */}
            <Link href="/" className="button-primary">
              Log in
            </Link>
            <Link href="/" className="button">
              SIGN UP
            </Link>
            {/* </div> */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-xl-3"></div>
          <div className="bottom-wrp col-md-6 col-xl-6">
            <ul>
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/how-it-works">How it works</Link>
                <img src="/flat-color-icons_settings.svg" alt="icon-settign" />
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
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
