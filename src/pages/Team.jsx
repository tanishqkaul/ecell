

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { TeamNames } from "../constants";
import { SectionWrapper2 } from "../hoc/index2";
import { fadeIn, textVariant } from "../utils/motion";
import { StarsCanvas } from "../components/canvas";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const Team = () => {
    return (
        <>
        <div className="pt-10"></div>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Ecell Navi Mumbai</p>
            <h2 className={styles.sectionHeadText}> Our Team </h2>
          </motion.div>
    
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
          "This is our team, a diverse group of individuals united by a shared vision and purpose. We bring together a wide range of skills, backgrounds, and perspectives, each contributing their unique strengths to our collective mission. Together, we strive for excellence, collaboration, and innovation as we work towards our common goals. With unwavering dedication and a commitment to supporting one another, this team is more than just a group of people – it's a dynamic force ready to overcome challenges and achieve success."
          </motion.p>
    
          <div className="mt-20 flex flex-wrap gap-10">
            {TeamNames.map((name, index) => (
              <ServiceCard key={name.title} index={index} {...name} />
            ))}
          </div>
          <StarsCanvas />
        </>
      );
};

// export default Team;
export default SectionWrapper2(Team, "team");