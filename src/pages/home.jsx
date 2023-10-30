import React from "react";
import heroImg01 from "../assets/images/hero_img01.jpg";
import heroImg02 from "../assets/images/hero_img02.jpeg";
import heroImg03 from "../assets/images/hero_img03.jpg";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/about/about";
import ServiceList from "../components/services/serviceList";

const home = () => {
    return <>
    {/* hero section */}
    
    <section className="hero_section pt-[60px] 2xl:h-[800px]">
     <div className="container ml-[-200px]">
        <div className="flex flex-col lg:flex-row-gap-[90px] items-center justify-between">
            {/* hero content */}
            <div className="ml-[-420px]">
                <div className="lg:w-[570px]">
                    <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                        We help patients live a healthy, longer life.
                    </h1>
                    <p className="text_para mt-8 mb-8">
                    Medicare is a government national health insurance program in the United States, 
                    begun in 1965 under the Social Security Administration (SSA) and now administered by 
                    the Centers for Medicare and Medicaid Services (CMS). It primarily provides health insurance 
                    for Americans aged 65 and older, but also for some younger people with disability status as 
                    determined by the SSA, including people with end stage renal disease and amyotrophic lateral 
                    sclerosis (ALS or Lou Gehrig's disease).

                    </p>
                    <button className="btn bg-blue-600 py-2 px-6 text-white font-[600] h-[44px] flex
                        items-center justify-center rounded-[50px] ">
                        Request an appointment

                    </button>

                </div>
                {/* hero counter */}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellow-400 rounded-full block mt-[-14px]"></span>

                    <p className="text_para">
                   Years Of Experience
                    </p>
                </div>

                <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                    </h2>
                    <span className="w-[100px] h-2 bg-purple-700 rounded-full block mt-[-14px]"></span>

                    <p className="text_para">
                   Clinic Location
                    </p>
                </div>

                <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                    </h2>
                    <span className="w-[100px] h-2 bg-pink-700 rounded-full block mt-[-14px]"></span>

                    <p className="text_para">
                   Patient Satisfaction
                    </p>
                </div>

                </div>
            </div>
            {/* hero content */}
            <div className="flex gap-[30px] justify-end mt-[-500px] ml-[840px]">
                <div>
                    <img className="w-[700px] h-[400px]" src={heroImg01} alt=""/>
                </div>

                <div className="mt-[30px]">
                <img className="w-[450px] h-[200px] mb-[30px] mt-[-40px]" src={heroImg02} alt=""/>
                <img className="w-[450px] h-[200px]" src={heroImg03} alt=""/> 
                </div>

            </div>
           

        </div>

     </div>
    </section>
     {/* hero section end */}
     <section>
        <div className="container">
            <div className="lg:w-[470px] mx-auto">
                <h2 className="heading text-center text-[40px] leading-9 mt-[-70px] mb-10">
                         Providing the best medical services
                </h2>
                <p className="text_para text-center">
                    Medicare is a government national health insurance program in the United States, 
                    begun in 1965 under the Social Security Administration (SSA) and now administered by 
                    the Centers for Medicare and Medicaid Services (CMS). 
                </p>

            </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] ml-[50px] lg:mt-[55px]"> 
            <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                    <img src={icon01} alt=""/>
                </div>
                <div className="mt-[30px]">
                    <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Doctor</h2>
                        <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                        Medicare is a government national health insurance program in the United States, 
                    begun
                        </p>
                        <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid 
                        border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-700
                        hover:boder-none">
                            <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                        </Link>
                </div>

            </div>

            <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                    <img src={icon02} alt=""/>
                </div>
                <div className="mt-[30px]">
                    <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Location</h2>
                        <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                        Medicare is a government national health insurance program in the United States, 
                    begun
                        </p>
                        <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid 
                        border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-700
                        hover:boder-none">
                            <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                        </Link>
                </div>

            </div>

            <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                    <img src={icon03} alt=""/>
                </div>
                <div className="mt-[30px]">
                    <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Book Appointment</h2>
                        <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                        Medicare is a government national health insurance program in the United States, 
                    begun
                        </p>
                        <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid 
                        border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-700
                        hover:boder-none">
                            <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                        </Link>
                </div>

            </div>

         </div>
        </div>
     </section>
    <About/>

    {/* Service section start  */}
    <section>
        <div className="container">
            <div className="xl:w-[470px] mx-auto">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center mt-20">Our medical services</h2>
                 <p className="text_para text-center">
                 Medicare is a government national health insurance program in the United States.
                 
                 </p>
            </div>

            <ServiceList />
            
        </div>
    </section>

    {/* Service section end */}
    </>
};

export default home;