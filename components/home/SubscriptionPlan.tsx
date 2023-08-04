"use client"
import React from 'react'
import './subscriptionPlan.css'
import Image from '../../public/flat-color-icons_settings.png'

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
            title3: "Lorem ipsum dolor sit amet consectetur. Consequat pellentesque magna et amet.",
            title4: "",
            title5: "",
            title6: "",
            title7: ""
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
            title7: ""
        },
        {
            key: 2,
            currency: "$",
            price: 19.99,
            period: "Monthly",
            planType: "Pro",
            title1: "150 Daily tasks ( Upload, Design,Product.. etc.)",
            title2: "In a post-apocalyptic world, a determined protagonist embarks on a perilous journey, battling enemies and forging unlikely alliances in search of sanctuary.",
            title3: "3 days guarantee support",
            title4: "Automatically check your listing for trademark infringement",
            title5: "One more: Access to all marketplaces",
            title6: "",
            title7: ""
        },
        {
            key: 3,
            currency: "$",
            price: 49.99,
            period: "Monthly",
            planType: "Enterprise",
            title1: "Unlimited daily tasks",
            title2: "Boost productivity and quality with production automation's efficiency and precision",
            title3: "API Access",
            title4: "Automatically check your listing for trademark infringement",
            title5: "One more: Access to all marketplaces",
            title6: "No need to download anything, runs completely in the cloud",
            title7: "24h support"
        },
    ]


    return (
        <div className='subscription-plan-container'>
            <div className="container">
                <div className="row main-pricing">
                    <div className="col-md-12 col-xl-12 col-sm-12">
                        <h3>
                            Choose the Plan that Fits Your Business              </h3>

                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur. Id vitae semper sed risus.</p>
                </div>
            </div>
            <div className='container-fluid'>
                {/* <div className='subscription-cards-wrapper'>
                    {
                        subscriptionData.map((data, index) => {
                            return (
                                <div className='subscription-card-inner-wrapper' key={data.key}>
                                    <div className='subscription-card-contents'>
                                        <div className='frame-59'>
                                            <span className='currency'>{data.currency}</span>
                                            <span className="price">
                                                {data.price}
                                            </span>
                                            <span className='period'>{data.period}</span>
                                        </div>
                                        <div className='subscription-types'>
                                            {data.planType}
                                        </div>

                                    </div>
                                    <div className='subscription-description'>
                                        <ul>
                                            <li>{data.title1}
                                            </li>
                                            <li>{data.title2}
                                            </li>
                                            <li>{data.title3}
                                            </li>
                                            <li>{data.title4}
                                            </li>
                                            <li>{data.title5}
                                            </li>
                                            <li>{data.title6}
                                            </li>
                                            <li>{data.title7}
                                            </li>
                                        </ul>
                                    </div>

                                    <div className='subscription-buy-button'>
                                        <button className='btn'>
                                            <span>Try now</span>
                                        </button>
                                    </div>
                                </div>

                            )
                        })
                    }
                   
                </div> */}

                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="pricingTable">
                            <div className="pricingTable-header">
                                <span className="currency">$</span>
                                <span className="amount">9.99</span>
                                <span className="duration">Monthly</span>
                                <div className="price-value">
                                    <span>Free</span>
                                    <span className='line-1'><hr /></span>
                                </div>
                            </div>
                            <ul className="pricing-content">
                                <li>50GB Disk Space</li>
                                <li>50 Email Accounts</li>
                                <li>50GB Bandwidth</li>
                                <li className="disable">Maintenance</li>
                                <li className="disable">15 Subdomains</li>
                            </ul>
                            {/* <div className="pricingTable-signup">
                                <a href="#">Sign Up</a>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="pricingTable green">
                            <div className="pricingTable-header">
                                <h3 className="title">Business</h3>
                            </div>
                            <div className="price-value">
                                <span className="amount">$19.99</span>
                                <span className="duration">per month</span>
                            </div>
                            <ul className="pricing-content">
                                <li>50GB Disk Space</li>
                                <li>50 Email Accounts</li>
                                <li>50GB Bandwidth</li>
                                <li>Maintenance</li>
                                <li className="disable">15 Subdomains</li>
                            </ul>
                            <div className="pricingTable-signup">
                                <a href="#">Sign Up</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="pricingTable green">
                            <div className="pricingTable-header">
                                <h3 className="title">Business</h3>
                            </div>
                            <div className="price-value">
                                <span className="amount">$19.99</span>
                                <span className="duration">per month</span>
                            </div>
                            <ul className="pricing-content">
                                <li>50GB Disk Space</li>
                                <li>50 Email Accounts</li>
                                <li>50GB Bandwidth</li>
                                <li>Maintenance</li>
                                <li className="disable">15 Subdomains</li>
                            </ul>
                            <div className="pricingTable-signup">
                                <a href="#">Sign Up</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="pricingTable green">
                            <div className="pricingTable-header">
                                <h3 className="title">Business</h3>
                            </div>
                            <div className="price-value">
                                <span className="amount">$19.99</span>
                                <span className="duration">per month</span>
                            </div>
                            <ul className="pricing-content">
                                <li>50GB Disk Space</li>
                                <li>50 Email Accounts</li>
                                <li>50GB Bandwidth</li>
                                <li>Maintenance</li>
                                <li className="disable">15 Subdomains</li>
                            </ul>
                            <div className="pricingTable-signup">
                                <a href="#">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SubscriptionPlan