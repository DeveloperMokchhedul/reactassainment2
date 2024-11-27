import React from 'react'
import cn from '../../utils/cn'

function Title({children,className}) {
  return (
    <>
      <h1 className={cn(`font-montserrat md:text-[28px] md:leading-[34px] font-semibold text-white`,className)}>{children}</h1>
    </>
  )
}

export default Title