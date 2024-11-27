import React from 'react'
import Title from './common/Title'
import Styletext from './common/Styletext'
import Description from './common/Description'

function TrainAidr() {
    return (
        <div className='bg-bg-primary'>
            <div
                className=' md:py-[114px] rounded-[24px]'
                style={{
                    backgroundImage: "url('/images/train.png')",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    margin: "0px 24px", // Reduced margin for small screens
                }}
            >
                <div className='w-full xl:w-3/5 mx-auto md:ml-[20px] xl:ml-[486px] md:px-4 py-[32px] md:py-[0px] px-[24px]'>
                    <Title className="  font-bold text-[32px] md:text-[40px]">
                        Train your aiDR on your...
                    </Title>
                    <Styletext className="text-primary text-[24px] md:text-[40px] leading-[32px] md:leading-[48px]">
                        prefered email st|
                    </Styletext>
                    <Description className="mt-[24px] md:mt-[30px]">
                        You’re in control. Train your aiDR on <br /> elements of your Marketing strategy.
                    </Description>
                    <div className='mt-[30px] md:mt-[64px] text-white grid grid-cols-1 md:grid-cols-2 gap-[8px] md:gap-[48px]'>
                        <div className='flex flex-col md:flex-col gap-[8px] md:gap-0 '>
                            <div className='flex gap-[10px]'>
                                <img src="/images/check.png" alt="" />
                                <p>Quick to ramp</p>
                            </div>
                            <div className='flex gap-[10px] md:mt-[24px]'>
                                <img src="/images/check.png" alt="" />
                                <p>Easy to optimize</p>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-col gap-[8px] md:gap-0 '>
                            <div className='flex gap-[10px]'>
                                <img src="/images/check.png" alt="" />
                                <p>Quick to scale up</p>
                            </div>
                            <div className='flex gap-[10px] md:mt-[24px]'>
                                <img src="/images/check.png" alt="" />
                                <p>Works with all your existing tools</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainAidr
