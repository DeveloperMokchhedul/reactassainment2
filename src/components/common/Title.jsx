import React from 'react'
import cn from '../../utils/cn'

function Title({children,className}) {
  return (
    <>
      <h1 className={cn(`font-montserrat text-[28px] leading-[34px] font-semibold text-white`,className)}>{children}</h1>
    </>
  )
}

export default Title