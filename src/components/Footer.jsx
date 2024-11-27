import React from 'react'

function Footer() {
    return (
        <div className='bg-bg-secondary text-white py-[40px] md:px-[120px]' >
            <div className='flex md:flex-row flex-col gap-[24px] md:-gap-0 justify-between items-center'>
                <img src="/images/footerlogo.png" alt="" />
                <p className='font-worksans font-light text-[16px] text-white/50'>Copyright © 2023 Wizia. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer