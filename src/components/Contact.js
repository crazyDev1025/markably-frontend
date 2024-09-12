import HCaptcha from '@hcaptcha/react-hcaptcha';

function Contact() {
    const onVerifyCaptcha = ( token ) => {
        console.log("Verified: " + token);
    }
    return (
        <div id="Contact" class="px-[15px] md:mx-[9px] lg:mx-[27.5px] 2xl:mx-[10%] py-[80px]">
            <div class="flex flex-wrap">
                <div class="py-[30px] px-[15px] mx-[15px] bg-[#0f3460] w-full md:w-[262px] h-[128px mb-[30px] md:mb-[0px] rounded-md">
                    <div class="text-[18px] font-medium text-white my-[10px]">General Inquires</div>
                    <div class="text-[16px] text-white">hello@markablyapp.com</div>
                </div>
                <div class="py-[30px] px-[15px] mx-[15px] bg-[#2ca46d] w-full md:w-[262px] h-[128px] rounded-md">
                    <div class="text-[18px] font-medium text-white my-[10px]">App Support</div>
                    <div class="text-[16px] text-white">support@markablyapp.com</div>
                </div>
            </div>
            <div class="flex flex-wrap mt-[200px]">
                <div class="w-full md:w-[30%] px-[15px]">
                    <div class="text-[45px] md:text-[50px] text-bold text-[#1d293e] font-medium text-left leading-9">Get In</div>
                    <div class="text-[45px] md:text-[50px] text-[#1d293e] font-medium text-left">Touch</div>
                    <div class="text-[#1d293e] text-left mb-[100px] t-[20px]">We love to heard stories on how Markably has changed the way you give feedback to students</div>
                </div>
                <div class="w-full md:w-[70%] px-[15px]">
                    <form action="your_backend_script" method="POST">
                        <div class="flex justify-between mb-[15px]">
                            <div class="w-[48%]">
                                <div class="text-[10px] text-left mb-[5px]">Name <span class="text-red">*</span></div>
                                <input type="text" class="rounded w-[100%]" placeholder="eg. Jane Doe"/>
                            </div>
                            <div class="w-[48%]">
                                <div class="text-[10px] text-left mb-[5px]">Email <span class="text-red">*</span></div>
                                <input type="text" class="rounded w-[100%]" placeholder="eg. janed@gmail.com"/>
                            </div>
                        </div>
                        <div class="w-full mb-[15px]">
                            <div class="text-[10px] text-left mb-[5px]">Subject <span class="text-red">*</span></div>
                            <input type="text" class="rounded w-[100%]" placeholder="Subject"/>
                        </div>
                        <div class="w-full mb-[15px]">
                            <div class="text-[10px] text-left mb-[5px]">Message <span class="text-red">*</span></div>
                            <textarea class="w-full rounded p-[5px]" rows="4"></textarea>
                        </div>
                        <div class="w-full mb-[15px]">
                            <HCaptcha sitekey="ee5eb7c0-5ab4-4032-ba74-05509396983c" onVerify={onVerifyCaptcha} />
                        </div>
                        <div class="flex justify-center">
                            <div class="bg-[#35e2fc] rounded-full py-[14px] px-[40px] w-[250px]">
                                <input type="submit" class="text-[14px] text-white text-normal font-bold" value="SUBMIT YOUR MESSAGE!" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    );
}

export default Contact;