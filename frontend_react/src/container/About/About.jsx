import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [aboutList, setaboutList] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]'
    client.fetch(query)
      .then((data) => setaboutList(data))
  }, []);
  

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Development</span> <br /> means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {aboutList.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={aboutList.title + index}
          >

            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ margin: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ margin: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about') ,
  'About',
  "app__whitebg"
);