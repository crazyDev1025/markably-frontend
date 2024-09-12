import Navbar from "./Navbar.js";

function Home() {
  return (
    <div id="Home" class="home_back pt-20">
      <Navbar />
      <div class="flex flex-wrap md:flex-col lg:flex-row px-[15px] md:mx-[9px] lg:mx-[27.5px] 2xl:mx-[10%]">
        <div class="mb-[50px] md:w-[100%] md:mb-[80px] lg:w-[58%]">
          <div class="text-[40px] md:text-[40px] lg:text-[50px] text-white font-medium pt-32 text-left leading-tight mb-[20px]">
            Your Marking, Made Easy
          </div>
          <div class="text-white text-left my-[20px]">
            Effortlessly Create Assessments, Evaluations and Rubric Assignments
            in a mobile first, touch optimized Interface that is intuitive and
            easy to use.
          </div>
          <div className="w-[330px] pr-16 mt-[30px]">
            <div class="bg-[#35e2fc] rounded-full py-[14px] px-[40px]">
              <a href="#download" class="text-white text-normal font-bold">
                DOWNLOAD MARKABLY
              </a>
            </div>
          </div>
        </div>
        <img
          src="./imgs/iphone_img_ipads5.png"
          alt="png"
          class="w-[100%] lg:w-[35.3%] h-auto 2xl:pt-14"
        />
      </div>
    </div>
  );
}

export default Home;
