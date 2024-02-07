

// import React from 'react';
// import { Experience } from '../components';

// const Archives = () => {
//   return (
//     <>
//     <div className='flex pt-2'>
//       <div className='flex-1'>
//         <Experience />
//       </div>
//     </div>
//     </>
//   );
// };

// export default Archives;
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { Archives } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { StarsCanvas } from "../components/canvas";
import Slider from "../components/Slider";
const ExperienceCard = ({ Archives }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={Archives.date}
    iconStyle={{ background: Archives.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={Archives.icon}
          alt={Archives.company_name}
          className="w-[70%] h-[70%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-whie text-[24px] font-bold  bg-tertiary py-2 px-4 rounded underline underline-offset-8 hover:text-blue-500  text-blue-500 sm:text-blue-200 sm:no-underline sm:hover:underline ">
        <a href={Archives.link} target="_blank" rel="noopener noreferrer" className=" ">
          {Archives.title}
        </a>
      </h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        // style={{ margin: 0 }}
      >
        {Archives.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {Archives.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px]"
          pl-1
          tracking-wider
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const ArchiveS = () => {
  return (
    <>
      <Slider />
      <motion.div variants={textVariant()}>
      <div className="pt-10"></div>
        <p className={styles.sectionSubText}>Some Important Events so far or...</p>
        <h2 className={styles.sectionHeadText}>Happenings!</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {Archives.map((Archives, index) => (
            <ExperienceCard key={index} Archives={Archives} />
          ))}
        </VerticalTimeline>
      </div>
      <StarsCanvas />
    </>
  );
};

export default SectionWrapper(ArchiveS, "work");
