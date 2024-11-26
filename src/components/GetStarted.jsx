import React from 'react'
import Title from './common/Title'
import { div } from 'framer-motion/client'
import Styletext from './common/Styletext'
import Description from './common/Description'
import { LuArrowUpRight } from 'react-icons/lu'
import { Button } from '@nextui-org/button'

function GetStarted() {
    return (
        <div className='bg-bg-primary'>
            <div className=' py-[96px] text-white w-[640px] flex flex-col gap-[23px] mx-auto' >
                <Title className="text-[20px] leading-[24px] font-normal tracking-[-5%] text-primary text-center">GET STARTED</Title>
                <Title className="text-[36px] font-bold leading-[24px] gap-[10px] tracking-[-5%] text-white text-center  flex"><Styletext className="text-[36px]">Embrace</Styletext> the new era of <Styletext className="text-[36px]">outbound</Styletext>.</Title>
                <Description className="text-center">Wizia lets you train, activate, and optimize aiDRs. <br />
                    Take your outbound to new levels of performance and efficiency.</Description>
                <Button className="bg-primary inline-flex items-center w-[216px] px-4 mx-auto">
                    Sign Up for the Beta
                    <LuArrowUpRight className="text-[12px] bg-black/25 border-2 border-black" />
                </Button>


            </div>
        </div>
    )
}

export default GetStarted