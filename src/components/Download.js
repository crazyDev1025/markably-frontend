import React from 'react';
import { motion, useInView } from 'framer-motion';

function Download() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      ref={ref}
      id="Download"
      className="bg-[#0f3460] flex flex-col items-center py-[80px] px-[10%]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div 
        className="text-[40px] md:text-[40px] lg:text-[50px] text-white font-semibold mb-[60px]"
        variants={itemVariants}
      >
        Download Markably Today
      </motion.div>
      <motion.div 
        className="text-white text-[20px] mb-[60px]"
        variants={itemVariants}
      >
        Try all features for free.
      </motion.div>
      <motion.div 
        className="bg-[#0da3fb] py-[15px] px-[30px] w-[181px] h-[62px] rounded-full flex items-center justify-center"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src="./imgs/app-store-logo.png" alt="App Store" className="w-full h-full object-contain" />
      </motion.div>
    </motion.div>
  );
}

export default Download;