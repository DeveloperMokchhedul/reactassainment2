import React from 'react'

function Container({children}) {
  return (
    <div className='max-w-[1440px] md:px-[120px]  mx-auto'>
        {children}

    </div>
  )
}

export default Container