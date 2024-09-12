import React from 'react';
import { motion, useInView } from 'framer-motion';

function SimpleWay() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.3 }); // Removed 'once: true'

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <motion.div 
      ref={ref}
      className="flex flex-row flex-wrap justify-between px-[15px] md:mx-[9px] lg:mx-[27.5px] 2xl:mx-[10%] py-[80px]"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div 
        className="w-full pb-[50px] md:max-w-[43%]"
        variants={itemVariants}
      >
        <motion.div variants={itemVariants} className="font-bold text-cs text-[40px] md:text-[40px] lg:text-[50px] text-left leading-tight mt-[100px]">
          Simplest way to build Marking Experiences.
        </motion.div>
        <motion.p variants={itemVariants} className="text-normal text-left pt-[20px] pb-[40px] pr-10">
          The touch optimized interface has been designed to help educators
          build rubric marking experience quickly with rich criteria in an easy
          to read format.
        </motion.p>
        <motion.div variants={itemVariants} className="w-[250px] pr-9">
          <div className="bg-[#35e2fc] rounded-full py-4 px-3">
            <a href="#download" className="text-white text-normal font-semibold">
              DOWNLOAD NOW
            </a>
          </div>
        </motion.div>
      </motion.div>
      <motion.img 
        src="./imgs/mockup3-ipadpen.png" 
        className="w-full md:max-w-[56.6%] h-auto"
        variants={imageVariants}
      />
    </motion.div>
  );
}

export default SimpleWay;