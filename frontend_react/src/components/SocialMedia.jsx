import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href="https://www.linkedin.com/in/tucker-a-brady/" target="_blank" rel="noreferrer">
              <BsLinkedin />
            </a>
        </div>
        <div>
            <a href="https://www.instagram.com/tucker_al/" target="_blank" rel="noreferrer">
              <BsInstagram />
            </a>
        </div>
        <div>
        <a href="https://www.facebook.com/tucker.a.brady" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
        </div>
    </div>
  )
}

export default SocialMedia