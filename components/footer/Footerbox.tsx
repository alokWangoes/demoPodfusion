"use client";
import React from "react";
import "./Footerbox.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Footerbox = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const sendEmail = (data: any) => {
    console.log(data);
  };
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row">
          <div className="footer-left-section">
            <div className="footer-logo">
              <img src="/logo.svg" />
              <div className="footer-right-section">
                <div className="quick-links">
                  <span> Quick Links</span>
                </div>
                <div className="footer-stay">
                  <span> Stay updated</span>
                </div>
                <div className="footer-icons">
                  <span>
                    <img
                      src="/linkdin.svg"
                      alt="linkedlin"
                      className="footer-social-icons-img"
                    />
                  </span>
                  <span>
                    <img
                      src="/facebook.svg"
                      alt="linkedlin"
                      className="footer-social-icons-img"
                    />
                  </span>
                  <span>
                    <img
                      src="/twitter.svg"
                      alt="twitterIn"
                      className="footer-social-icons-img"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-second">
            <span>
              Lorem ipsum dolor sit amet consectetur. Luctus tincidunt neque
              quis sit tristique. Elementum a vitae augue condimentum augue
              ipsum nec.
            </span>
            <div className="footer-link">
              <ul className="footer-links-1">
                <li>Home</li>
                <li>Contact</li>
                <li>FAQs</li>
                <li>Pricing</li>
                <li>Documentation</li>
              </ul>
              <ul className="footer-links-2">
                <li>Etsy</li>
                <li>Walmart</li>
                <li>eBay</li>
                <li>Lorem</li>
              </ul>

              <div className="email-input-wrapper">
                <div className="email-title-heading">
                  Please enter your email
                </div>
                <form>
                  <div className="input-tab">
                    <input
                      {...register("email")}
                      type="email"
                      className="email-input"
                      placeholder="Email"
                      alt="email-input"
                    />
                    <button
                      onClick={handleSubmit((data) => {
                        sendEmail(data);
                      })}
                      type="submit"
                      className="btn-send"
                    >
                      SEND
                    </button>
                  </div>
                  <div className="text-danger"> {errors.email?.message}</div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <span className="footer-vector-bg">
          <img src="footer-vector-svg2.svg" />
        </span>
      </div>
    </div>
  );
};

export default Footerbox;
