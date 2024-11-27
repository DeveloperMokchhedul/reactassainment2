import React from 'react'
import Title from './common/Title'
import { div } from 'framer-motion/client'
import Styletext from './common/Styletext'
import Description from './common/Description'
import { LuArrowUpRight } from 'react-icons/lu'
import { Button } from '@nextui-org/button'

function GetStarted() {
    return (
        <div className='bg-bg-primary '>
            <div className='py-[80px] px-[24px]  md:py-[96px] text-white md:w-[640px] flex flex-col md:gap-[23px] mx-auto' >
                <Title className="text-[20px] leading-[24px] font-normal tracking-[-5%] text-primary text-center">GET STARTED</Title>
                <Title className="text-[35px] my-[23px]  md:text-[36px] font-bold leading-[43px] md:leading-[24px] md:gap-[10px] md:tracking-[-5%] text-white text-center  flex flex-col md:flex-row"><Styletext className="text-[36px]">Embrace</Styletext> the new era of <Styletext className="text-[36px]">outbound.</Styletext></Title>
                <Description className="text-center text-[18px] md:text-[20px] ">Wizia lets you train, activate, and optimize aiDRs. <br />
                    Take your outbound to new levels of performance and efficiency.</Description>
                <Button className="bg-primary inline-flex items-center w-[327px] md:w-[216px] px-4 mx-auto mt-[23px]">
                    Sign Up for the Beta
                    <LuArrowUpRight className="text-[12px] bg-black/25 border-2 border-black" />
                </Button>


            </div>
        </div>
    )
}

export default GetStarted