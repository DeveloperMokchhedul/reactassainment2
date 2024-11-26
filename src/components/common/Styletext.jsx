import { cn } from '@nextui-org/theme'
import React from 'react'

function Styletext({children,className}) {
  return (
    <>
        <p className={cn(`font-montserrat italic tracking-[-1%] font-medium  text-white `, className)}>{children}</p>
    </>
  )
}

export default Styletext