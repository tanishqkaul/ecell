import React from 'react';
import { styles } from "../styles";
import { motion } from "framer-motion";
const SectionWrapper = (WrappedComponent, idName) => {
    return function HOC(props) {
        return (
            <motion.section  initial='hidden'
            whileInView='show' id={idName} className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
                <WrappedComponent {...props} />
            </motion.section>
        );
    };
};

export default SectionWrapper;
