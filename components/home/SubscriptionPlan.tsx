"use client";
import React from "react";
import "./subscriptionPlan.css";

const SubscriptionPlan = () => {
  const subscriptionData = [
    {
      key: 0,
      currency: "$",
      price: 0,
      period: "Monthly",
      planType: "Free",
      title1: "5 daily tasks ( Uplaod, Design, Product, etc...)",
      title2: "No need to download anything, it runs completely in the cloud.",
      title3:
        "Lorem ipsum dolor sit amet consectetur. Consequat pellentesque magna et amet.",
      title4: "",
      title5: "",
      title6: "",
      title7: "",
    },
    {
      key: 1,
      currency: "$",
      price: 9.99,
      period: "Monthly",
      planType: "Premium",
      title1: "5 daily tasks ( Uplaod, Design, Product, etc...)",
      title2: "Access to all marketplaces",
      title3: "Basic support",
      title4: "No need to download anything, it runs completely in the cloud.",
      title5: "",
      title6: "",
      title7: "",
    },
    {
      key: 2,
      currency: "$",
      price: 19.99,
      period: "Monthly",
      planType: "Pro",
      title1: "150 Daily tasks ( Upload, Design,Product.. etc.)",
      title2:
        "In a post-apocalyptic world, a determined protagonist embarks on a perilous journey, battling enemies and forging unlikely alliances in search of sanctuary.",
      title3: "3 days guarantee support",
      title4: "Automatically check your listing for trademark infringement",
      title5: "One more: Access to all marketplaces",
      title6: "",
      title7: "",
    },
    {
      key: 3,
      currency: "$",
      price: 49.99,
      period: "Monthly",
      planType: "Enterprise",
      title1: "Unlimited daily tasks",
      title2:
        "Boost productivity and quality with production automation's efficiency and precision",
      title3: "API Access",
      title4: "Automatically check your listing for trademark infringement",
      title5: "One more: Access to all marketplaces",
      title6: "No need to download anything, runs completely in the cloud",
      title7: "24h support",
    },
  ];

  return (
    <div className="subscription-plan-container">
      <div className="container">
        <div className="row main-pricing">
          <div className="col-md-12 col-xl-12 col-sm-12">
            <h3>Choose the Plan that Fits Your Business</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Id vitae semper sed risus.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row pricing-wrapper">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="pricingTable">
              <div className="pricingTable-header">
                <span className="currency">$</span>
                <span className="amount">0</span>
                <span className="duration">Monthly</span>
                <div className="price-value">
                  <span>Free</span>
                  <span className="line-1">
                    <hr />
                  </span>
                </div>
              </div>
              <ul className="pricing-content">
                <li>5 daily tasks ( Uplaod, Design, Product, etc...)</li>
                <li>
                  No need to download anything, it runs completely in the cloud.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur. Consequat pellentesque
                  magna et amet.
                </li>
              </ul>
              <div className="pricingTable-signup">
                <button className="try-now-btn">Try Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="pricingTable">
              <div className="pricingTable-header">
                <span className="currency">$</span>
                <span className="amount">9.99</span>
                <span className="duration">Monthly</span>
                <div className="price-value-premium">
                  <span>Premium</span>
                  <span className="line-1">
                    <hr />
                  </span>
                </div>
              </div>
              <ul className="pricing-content-second-child">
                <li>5 daily tasks ( Uplaod, Design, Product, etc...)</li>
                <li>Access to all marketplaces</li>
                <li>Basic support</li>
                <li>
                  No need to download anything, it runs completely in the cloud.
                </li>
              </ul>

              <div className="pricingTable-signup-premium">
                <button className="try-now-btn-premium">Try Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-12">
            <div className="pricingTable">
              <div className="pricingTable-header">
                <span className="currency">$</span>
                <span className="amount-pro">19.99</span>
                <span className="duration">Monthly</span>
                <div className="price-value-pro">
                  <span>Pro</span>
                  <span className="best-seller">
                    <p>Best Seller</p>
                  </span>
                  <span className="line-1">
                    <hr />
                  </span>
                </div>
              </div>
              <ul className="pricing-content-third-child">
                <li>150 Daily tasks ( Upload, Design,Product.. etc.)</li>
                <li>
                  In a post-apocalyptic world, a determined protagonist embarks
                  on a perilous journey, battling enemies and forging unlikely
                  alliances in search of sanctuary.
                </li>
                <li>3 days guarantee support</li>
                <li>
                  Automatically check your listing for trademark infringement
                </li>
                <li>One more: Access to all marketplaces</li>
              </ul>

              <div className="pricingTable-signup-pro">
                <button className="try-now-btn-pro">Try Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="pricingTable">
              <div className="pricingTable-header">
                <span className="currency">$</span>
                <span className="amount">49.99</span>
                <span className="duration">Monthly</span>
                <div className="price-value-enterprise">
                  <span>Enterprise</span>
                  <span className="line-1">
                    <hr />
                  </span>
                </div>
              </div>
              <ul className="pricing-content-fourth-child">
                <li>Unlimited daily tasks</li>
                <li>
                  Boost productivity and quality with production automation`s
                  efficiency and precision
                </li>
                <li>API Access</li>
                <li>
                  Automatically check your listing for trademark infringement
                </li>
                <li>One more: Access to all marketplaces</li>
                <li>
                  No need to download anything, runs completely in the cloud
                </li>
                <li>24h support</li>
              </ul>

              <div className="pricingTable-signup-enterprise">
                <button className="try-now-btn-enterprise">Try Now</button>
              </div>
            </div>
          </div>
          <span className="vector-ellipse-2">
            <img src="pricing-vector-ellipse.svg" />
          </span>
          <span className="vector-ellipse-1">
            <img src="pricing-vector-ellipse.svg" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
