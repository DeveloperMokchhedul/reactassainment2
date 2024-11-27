import React from 'react'
import { serviceItem } from '../../Api/SeviceItem'
import ServiceCard from './ServiceCard'

function Service() {
  return (
    <section className='bg-bg-primary py-[40px] px-[24px] md:px-[50px] md:py-[120px]'>
      <div className='flex gap-[48px] md:gap-[24px] flex-wrap lg:justify-center md:justify-start'>
        {
          serviceItem.map((item, index) => (
            <div key={index}  className=' scale-105 duration-700 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110'  >
              <ServiceCard image={item.image} title={item.title} description={item.description} />
            </div>
          ))

        }
      </div>


    </section>
  )
}

export default Service