import React from 'react'
import { serviceItem } from '../../Api/SeviceItem'
import ServiceCard from './ServiceCard'

function Service() {
  return (
    <section className='bg-bg-primary p-[120px]'>
      <div className='flex gap-[24px]'>
        {
          serviceItem.map((item, index) => (
            <div key={index} >
              <ServiceCard image={item.image} title={item.title} description={item.description} />
            </div>
          ))

        }
      </div>


    </section>
  )
}

export default Service