import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Container from "./common/Container"
import Description from './common/Description';
import Title from './common/Title';
import { swiperData } from '../Api/Swiper';

export default function Slider() {
    return (
        <>
            <div className='bg-bg-primary pt-[96px] pb-[80px]'>
                <Container>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        {
                            swiperData.map((data,index)=>(
                                <SwiperSlide className=' flex' key={index}>
                                <div className='w-[920px] mx-auto text-center'>
                                    <img className='w-[74px] h-[74px] mb-[44px] flex mx-auto' src={data.image}alt="" />
                                    <Description className={"text-[32px] leading-[45px]"}>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</Description>
                                    <Title className={"text-[24px] font-semibold leading-[36px] mt-[24px] text-primary"}>John Doe</Title>
                                    <Description className={"mb-[54px]"}>Chief Strategy Officer @ Company</Description>
                                </div>
                            </SwiperSlide>


                            ))
                        }
        
                


                    </Swiper>
                </Container>


            </div>

        </>
    );
}
