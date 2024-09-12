import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

function ExportandShare() {
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
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  const carouselVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const carouselItems = [
    {
      title: "Export And Share Rich Feedback To Students Quickly",
      description: "The PDF formatted Feedback can provide timely critique to help students improve their project and assignment work."
    },
    {
      title: "Streamline Your Grading Process",
      description: "Our tools help you grade faster and more efficiently, giving you more time to focus on teaching."
    },
    {
      title: "Enhance Student Learning with Detailed Feedback",
      description: "Provide comprehensive feedback that helps students understand their strengths and areas for improvement."
    }
  ];

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage(([prevPage]) => [
      (prevPage + newDirection + carouselItems.length) % carouselItems.length,
      newDirection
    ]);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      ref={ref}
      className="flex flex-row flex-wrap justify-between px-[15px] mx-[20px] md:mx-[9px] lg:mx-[27.5px] 2xl:mx-[10%] py-[80px]"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.img 
        src="./imgs/data_7.png" 
        className="w-full h-auto md:w-[48%]"
        variants={imageVariants}
      />
      <motion.div 
        className="w-full md:w-[52%] md:mt-[80px] pl-[60px] pr-[50px] relative"
        variants={textVariants}
      >
        <div className="w-[80px] h-[80px] bg-[#0da3fb] rounded-full p-[22px]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" className="size-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
        </div>
        <div className="h-[300px] overflow-hidden relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={carouselVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full"
            >
              <div className="text-[40px] md:text-[40px] lg:text-[50px] font-bold text-left mt-[20px] leading-tight">
                {carouselItems[page].title}
              </div>
              <div className="border-dashed border-[1px] border-[#0da3fb] w-[80px] my-[20px]"></div>
              <div className="text-left">
                {carouselItems[page].description}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-6">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setPage([index, index > page ? 1 : -1])}
              className={`h-3 w-3 mx-1 rounded-full ${
                page === index ? 'bg-[#0da3fb]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ExportandShare;