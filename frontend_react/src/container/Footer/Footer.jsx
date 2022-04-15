import React from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { SocialMedia } from '../../components';
import ContactForm from '../../components/ContactForm';
import './Footer.scss';

const Footer = () => {
  return (
    <>
      <h2 className="head-text">Reach Out <span>&</span> Let's Talk</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:contact@tuckerbrady.com" className="p-text">tuck.al.brady@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+1 (123) 456-7890" className="p-text">+1 (123) 456-7890</a>
        </div>
      </div>
      <ContactForm />
      <div className="copyright">
        <SocialMedia />
        <p className="p-text">© 2022 <span>Tucker Brady</span></p>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'Contact',
  'app__whitebg'
)