import React from 'react'
import cn from '../../utils/cn'

function Button({children,className}) {
  return (
    <>
          <button className={cn(`px-[16px] py-[10px] text-[14px]  font-medium leading-[16px] rounded-full bg-primary transition-all hover:scale-105 duration-300 shadow-primaryShadow `,className)}>{children}</button>
    </>
  )
}

export default Button