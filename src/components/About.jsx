import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { work } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ExperienceCard = ({ index, title, company, duration, description }) => {
  const cardStyle = {
    width: '320px',
    padding: '20px',
    margin: '10px',
    borderRadius: '20px',
    backgroundColor: '#1a1a2e',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const cardTitleStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: '10px'
  };

  const cardCompanyStyle = {
    fontSize: '16px',
    color: '#aaa',
    textAlign: 'center',
    marginBottom: '10px'
  };

  const cardDescriptionStyle = {
    fontSize: '14px',
    color: '#bbb',
    lineHeight: '1.5',
    textAlign: 'left'
  };

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      style={cardStyle}
    >
      <h3 style={cardTitleStyle}>
        {title}
      </h3>
      <p style={cardCompanyStyle}>
        {company} - {duration}
      </p>
      <ul style={cardDescriptionStyle}>
        {description.map((desc, idx) => (
          <li key={idx} style={{ marginTop: '10px' }}>
            {desc}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};


const About = () => {
  const sectionStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px'
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
        <p className={styles.sectionSubText}><u>Software Developer</u></p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Software development is one of the many fields I'm passionate about. <br />
        I primarily specialise in Web development (MERN Stack). In my free time, I play around with different Data structures and Algorithms with <a
          href="https://leetcode.com/u/Moonlight_Coder/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white hover:underline transition duration-300"
        >
          Moonlight_Coder
        </a>, My alias name ;) .
      </motion.p>
      <motion.div variants={textVariant()}>
        <h2 className='text-white font-black font-500 md:text-[30px] sm:text-[30px] xs:text-[30px] text-[20px]'>Stuff I Experienced.</h2>
        
        <hr style={{ borderColor: 'rgba(128, 128, 128, 0.5)', borderStyle: 'solid', borderWidth: '1px', margin: '20px 0', opacity: 0.5 }} />
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {work.map((item, index) => (
          <ExperienceCard key={item.title} index={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");