import React from 'react'

function Partner() {
  return (
    <div className='bg-bg-secondary pt-[24px] md:pt-[32px] pb-[24px] md:pb-[40px]'>
        <div className='md:w-[764px] mx-auto'>
            <h3 className='text-[16px] font-montserrat text-primary leading-[19px] font-normal tracking-[5%] text-center uppercase'>our trusted partners</h3>
            <div className='md:w-[768px]  mx-auto mt-[24px] flex flex-wrap justify-center md:gap-[32px]'>
                <img className='w-[128px] h-[64px]' src="/images/backhub.png" alt="backhub" />
                <img className='w-[128px] h-[64px]' src="/images/cable.png" alt="cablelab" />
                <img className='w-[128px] h-[64px]' src="/images/dbs.png" alt="" />
                <img className='w-[128px] h-[64px]' src="/images/easyeuro.png" alt="" />
                <img className='w-[128px] h-[64px]' src="/images/amdlogo.png" alt="" />
                
            </div>

        </div>

    </div>
  )
}

export default Partner