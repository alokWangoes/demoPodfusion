import React from 'react'
import "./Footerbox.css"
const Footerbox = () => {
  return (
    <div className='footer-container'>
      <div className='footer-container-inner'>
        <div className='footer-logo'>
          <img src="/logo.svg" />
        </div>
        <div className='footer-socials'>
          <div className='footer-quick'><span> Quick Links</span></div>
          <div className='footer-stay'><span> Stay updated</span></div>
          <div className='footer-icons'>
            <div>
              <img src="/linkdin.svg" alt="linkedlin" className='footer-social-icons-img' />
            </div>
            <div>

              <img src="/facebook.svg" alt="linkedlin" className='footer-social-icons-img' />
            </div>
            <div>

              <img src="/twitter.svg" alt="linkedlin" className='footer-social-icons-img' />
            </div>

          </div>
        </div>
      </div>
      <div className='footer-body'>
        <div className='footer-body-title'>
          <span>Lorem ipsum dolor sit amet consectetur. Luctus tincidunt neque quis sit tristique. Elementum a vitae augue condimentum augue ipsum nec. </span>
        </div>
        <div className='footer-body-list'>
          <span>
            Home
          </span>
          <span>
            Contact
          </span>
          <span>
            FAQs
          </span>
          <span>
            Pricing
          </span>
          <span>
            Documentation
          </span>
        </div>
        <div className='footer-body-list-etsy'>
          <span>
            Etsy
          </span>
          <span>
            Walmart
          </span>
          <span>
            eBay
          </span>
          <span>
            Lorem
          </span>
        </div>
        <div >
          <span className='footer-input-title'>Please enter your email</span>
          <div>
            <div className='footer-input'>
              <input type='email' placeholder='Email' />
              <button>SEND</button>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-copyryt'>
        <p className='footer-copyryt-title'>
          <span><img src='/Vector.svg' alt='copy' className='footer-copyryt-img' /></span>
          2023 PODfusion. All rights preserved.
        </p>
        <p className='footer-copyryt-subs'>
          Intellectual Property Policy
        </p>
        <p className='footer-copyryt-subs'>
          Terms of service
        </p>
        <p className='footer-copyryt-subs'>
          Privacy Policy
        </p>
        <p className='footer-copyryt-subs'>
          Security
        </p>
      </div>
    </div>
  )
}

export default Footerbox