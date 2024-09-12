import React from 'react';

function AffordablePrice() {
  return (
    <div id="Pricing" className="bg-[#1d293e]">
      <div className="px-[15px] md:mx-[9px] lg:mx-[27.5px] 2xl:mx-[10%] py-[80px]">
        <div className="text-[25px] sm:text-[35px] md:text-[40px] lg:text-[50px] font-bold text-white">
          Affordable <span className="text-[#0da3fb] border-dashed border-b-[1px] border-[#777] pb-[5px]">Pricing</span> For All
        </div>
        <div className="text-[18px] md:text-[22px] text-white mb-[60px]">
          Unlock free demo license with our in-app subscriptions.
        </div>
        <div className="flex flex-wrap flex-row justify-between">
          {['Starter', 'Value', 'Premium'].map((plan, index) => (
            <div 
              key={plan}
              className={`w-full rounded ${index === 2 ? 'bg-[#0da3fb]' : 'bg-white'} px-[20px] py-[40px] md:w-[31.5%] mb-6 md:mb-0 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className={`text-[26px] ${index === 2 ? 'text-white' : 'text-[#1d293e]'} text-center font-medium`}>{plan} Plan</div>
              <div className="flex flex-row justify-center">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={`w-[6px] h-[6px] rounded-full ${index === 2 ? 'bg-white' : 'bg-[#0da3fb]'} mt-[15px] mb-[20px] mx-[2px]`}></div>
                ))}
              </div>
              <div className={`text-[50px] ${index === 2 ? 'text-white' : 'text-[#1d293e]'} text-center font-semibold`}>
                ${index === 0 ? '8.99' : index === 1 ? '18.99' : '23.99'}
              </div>
              <div className={`font-medium text-[15px] ${index === 2 ? 'text-white' : 'text-[#1d293e]'}`}>
                {index === 0 ? 'Monthly' : index === 1 ? 'Three Months' : 'Six Months'} in-app subscription
              </div>
              <ul className="mt-[30px] mb-[20px]">
                {['All Marking Features', 'Unlimited Class list Import', 'Unlimited Marking Export'].map((feature, i) => (
                  <li key={i} className={`leading-8 ${index === 2 ? 'text-white' : ''}`}>{feature}</li>
                ))}
              </ul>
              <div className="flex justify-center">
                <div className="rounded-full bg-gradient-to-r from-[#35e2fc] to-[#0da3fb] px-[40px] py-[14px] w-[180px] cursor-pointer hover:shadow-md transition-all duration-300">
                  <a className="text-white text-normal font-semibold">GET STARTED</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AffordablePrice;