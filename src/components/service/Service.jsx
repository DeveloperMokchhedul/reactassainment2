import React from 'react'
import { serviceItem } from '../../Api/SeviceItem'
import ServiceCard from './ServiceCard'

function Service() {
  return (
    <section className='bg-bg-primary py-[40px] px-[24px] md:px-[0px] md:py-[120px]'>
      <div className='flex gap-[48px] md:gap-[24px] flex-wrap justify-center'>
        {
          serviceItem.map((item, index) => (
            <div key={index}   >
              <ServiceCard image={item.image} title={item.title} description={item.description} />
            </div>
          ))

        }
      </div>


    </section>
  )
}

export default Service