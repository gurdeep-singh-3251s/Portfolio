import React from "react";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Define the motion variant function for the heading text animation
const textVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } }
};

const Tech = () => {
  return (
    <>
      {/* Apply the motion variant to animate the heading text */}
      <motion.div variants={textVariant} initial="initial" animate="animate">
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Tech Stack.
        </h2>
      </motion.div>
      {/* Add a horizontal line */}
      <hr style={{ borderColor: 'rgba(128, 128, 128, 0.5)', borderStyle: 'solid', borderWidth: '1px', margin: '20px 0', opacity: 0.5 }} />
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {/* Render technology icons */}
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
