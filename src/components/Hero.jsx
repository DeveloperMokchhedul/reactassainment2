import React from 'react'
import Title from './common/Title'
import Description from './common/Description'
import Button from './common/Button'
import { LuArrowUpRight } from "react-icons/lu";


function Hero() {
  return (
    <div style={{
        backgroundImage:"url('/images/herobg.png')",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
    }}
    className=' text-center md:text-start pt-[44px] pb-[72px] md:py-[110px] px-[16px] md:px-[40px] xl:px-[120px]'
    >
        <h3 className='text-[16px] md:text-[24px] leading-[19px] md:leading-[30px] text-primary'>AI SDRs (aiDRs)</h3>
        <Title className="text-[40px] md:text-[64px] leading-[44px] md:leading-[78px] md:tracking-[-1px]">More <span className='italic'>leads</span> ,<br /> less <span className='italic'>leads</span>.</Title>
        <Description className="md:w-[450px] text-[18px] md:font-normal font-thin md:text-[20px]">Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</Description>
        <Button className="flex text-center mx-auto md:mx-0  gap-[5px] mt-[40px] px-[72px] md:px-[18px] py-[16.5px] items-center  ">Sign Up for the Beta  <LuArrowUpRight className='text-[12px] bg-black/25 border-2 border-black' /></Button>

    </div>
  )
}

export default Hero