import React from 'react'

function Container({children}) {
  return (
    <div className='max-w-[1440px] px-[120px] '>
        {children}

    </div>
  )
}

export default Container