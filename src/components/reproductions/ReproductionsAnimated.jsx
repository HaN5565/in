import React from 'react';
import { motion } from 'framer-motion'

const ReproductionsAnimated = ({ children }) => {

    const animations = {
        initial: { opacity: 0, },
        animate: { opacity: 1, },
        exit: { opacity: 0, },
    }

    return (
        <motion.div
            variants={animations}
            initial='iniitial'
            animate='animate'
            exit='exit'
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
};

export default ReproductionsAnimated;