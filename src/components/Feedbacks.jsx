import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { socialLinks } from "../constants";

const SocialCard = ({ index, platform, url, logo, handle }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full hover:bg-black-300 transition-all duration-300'
  >
    <div className='flex justify-between items-center gap-4'>
      <img
        src={logo}
        alt={`${platform} logo`}
        className='w-10 h-10 rounded-full object-cover'
      />
      <div className='flex-1 flex flex-col'>
        <a href={url} target="_blank" rel="noopener noreferrer" className='text-white font-medium text-[16px] hover:underline'>
          {handle}
        </a>
        <p className='mt-1 text-secondary text-[12px]'>
          {platform}
        </p>
      </div>
    </div>
  </motion.div>
);
const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Connect With Me.</p>
          <h2 className={styles.sectionHeadText}>Development Footprint</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {socialLinks.map((link, index) => (
          <SocialCard key={link.platform} index={index} {...link} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");