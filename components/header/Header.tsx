"use client";
import Link from "next/link";
import "./Header.css";
import { useState } from "react";
import Image from "next/image";
const Header = () => {
  const [open, setOpen] = useState<any>(false);
  const [language, setLanguage] = useState<any>("EN");

  const languageSellector = (val : String )=>{
    setLanguage(val)
    setOpen(!open)
  }
  return (
    <>
      <div className="container" style={{ zIndex: "999" }}>
        <div className="row">
          <div className="col-md-3 col-sm-12 col-xl-3">
            <div className="logo-img">
              <img src="/logo.svg" alt="logo-img" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-xl-6">
            <div className="top-wrp">
              <div className="social-icons">
                <img src="/bxl_linkedin.svg" alt="linkedlin" />
                <img src="/ri_facebook-fill.svg" alt="linkedlin" />
                <img src="/mdi_twitter.svg" alt="linkedlin" />
              </div>
              <div className="flag-wrp">
                {language == "EN" ? (
                  <img src="/Flags.png" alt="flag" />
                ) : language == "NL" ? (
                  <img src="/flag-1.svg" alt="flag" />
                ) : language == "FR" ? (
                  <img src="/flag-2.svg" alt="flag" />
                ) : language == "DE" ? (
                  <img src="/flag-3.svg" alt="flag" />
                ) : (
                  <img src="/Flags.png" alt="flag" />
                )}
                <h4
                  style={{ fontFamily: "Aclonica" }}
                  onClick={() => setOpen(!open)}
                >
                  {language}
                </h4>
                <img src="/flat-color-icons_settings.svg" alt="icon-settign" />
                <div className=" " style={{ display: open ? "block" : "none" }}>
                  <div className="languages-header">
                    <div
                      className="inner-language-div"
                      onClick={() => {
                        languageSellector("NL");
                      }}
                    >
                      <img
                        width={18}
                        height={14}
                        src="/flag-1.svg"
                        className="mt-1"
                      />
                      <span>NL</span>
                    </div>
                    <div className="inner-language-div" 
                      onClick={() => {
                        languageSellector("FR");
                      }}>
                      <img
                        width={18}
                        height={14}
                        src="/flag-2.svg"
                        className="mt-1"
                      />
                      <span>FR</span>
                    </div>{" "}
                    <div className="inner-language-div"
                      onClick={() => {
                        languageSellector("DE");
                      }}>
                      <img
                        width={18}
                        height={14}
                        src="/flag-3.svg"
                        className="mt-1"
                      />
                      <span>DE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 col-xl-3 right-section">
            <Link href="/" className="button-primary">
              Log in
            </Link>
            <Link href="/" className="button">
              SIGN UP
            </Link>
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
