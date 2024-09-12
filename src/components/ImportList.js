import React from 'react';
import { motion, useInView } from 'framer-motion';

function ImportList() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        when: "beforeChildren",
        delayChildren: 0.2,
      },
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

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <div>
      <motion.div 
        ref={ref}
        className="flex flex-row justify-between px-[15px] md:mx-[9px] lg:mx-[27.5px] 2xl:mx-[10%] py-[80px]"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex flex-wrap flex-row justify-between w-full">
          <motion.div 
            className="w-full md:w-[45%] flex justify-center pl-8"
            variants={imageVariants}
          >
            <img src="./imgs/app-screen_csv_import.png" alt="importimg" />
          </motion.div>
          <motion.div 
            className="w-full md:w-[50%] text-left pt-[50px] md:pt-[0px]"
            variants={textVariants}
          >
            <div className="text-[40px] md:text-[40px] lg:text-[50px] text-left text-cs font-bold ">
              Import or Airdrop®
            </div>
            <div className="text-[40px] md:text-[40px] lg:text-[50px] text-cs font-bold ">
              Multiple Class Lists
            </div>
            <div className="leading-normal text-normal mt-5">
              It's never been so easy with Markably™ to import or wirelessly
              Airdrop® class lists between devices and share with faculty. Follow
              our spreadsheet format template and easily manage class list.
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="h-[100px] overflow-hidden">
        <img
          src="./imgs/bg-elements_4.png"
          alt="logo_markably"
          className="w-full h-[160px]"
        />
      </div>
    </div>
  );
}

export default ImportList;