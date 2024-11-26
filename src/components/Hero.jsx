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
    className='py-[110px] px-[120px]'
    >
        <h3 className='text-[24px] leading-[30px] text-primary'>AI SDRs (aiDRs)</h3>
        <Title className="text-[64px] leading-[78px] tracking-[-1px]">More <span className='italic'>leads</span> ,<br /> less <span className='italic'>leads</span>.</Title>
        <Description className="w-[450px]">Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</Description>
        <Button className="mt-[40px]"><div className='flex items-end gap-[4px] justify-center'>Sign Up for the Beta <LuArrowUpRight className='text-[12px] bg-black/25 border-2 border-black' /> </div></Button>

    </div>
  )
}

export default Hero