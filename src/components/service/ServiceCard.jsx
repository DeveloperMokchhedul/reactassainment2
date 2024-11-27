import React from 'react'
import Title from '../common/Title'
import Description from '../common/Description'

function ServiceCard({image, title,description}) {
  return (
    <div className='md:w-[384px]'>
        <img className='w-[54px] h-[48px] mb-[24px]' src={image} alt="" />
        <Title className="text-[28px] font-semibold leading-[34px]">{title}</Title>
        <Description className="text-[22px] tracking-[-1%] font-[300] mt-[16px]">{description}</Description>
         
    </div>
  )
}

export default ServiceCard