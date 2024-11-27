import React from 'react'
import cn from '../../utils/cn'

function Description({ children, className }) {
  return (
    <>

      <p className={cn(`font-worksans font-light  text-[16px] md:text-[20px] md:leading-[26px] text-white`, className)}>{children}</p>

    </>
  )
}

export default Description