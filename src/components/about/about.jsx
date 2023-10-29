import React from "react";
import aboutImg from "../../assets/images/about.jpg"
import aboutCardImg from "../../assets/images/aboutCard.jpg"
import { Link } from "react-router-dom";


const about = () => {
    return(
        <section>
            <div className="container ml-[50px]">
                <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                    {/* about img */}
                    <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                        <img src={aboutImg} alt=""/>
                        <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[7%]
                        lg:right-[-3%]">
                            <img src={aboutCardImg} alt=""/>

                        </div>

                    </div>

                    {/* about content */}
                    <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                        <h2 className="heading text-[30px] leading-4">Proud to be one of the nations best</h2>
                        <p className="text_para mt-8">
                        Medicare is a government national health insurance program in the United States, 
                        begun in 1965 under the Social Security Administration (SSA) and now administered by 
                        the Centers for Medicare and Medicaid Services (CMS).
                        </p>

                        <p className="text_para mt-[8px] mb-[30px]">
                        Medicare is a government national health insurance program in the United States, 
                        begun in 1965 under the Social Security Administration (SSA) and now administered by 
                        the Centers for Medicare and Medicaid Services (CMS).
                        </p>

                        <Link to='/'>
                        <button className="btn bg-blue-600 py-2 px-6 text-white font-[600] h-[44px] flex
                        items-center justify-center rounded-[50px] ">Learn More</button>
                        </Link>

                    </div>

                </div>

            </div>
        </section>
    )
}
 
export default about;